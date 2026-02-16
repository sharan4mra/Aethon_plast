import { useEffect, useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { api, tokenStore } from "../api/client";

const LoginPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const resetToken = searchParams.get("resetToken") || "";
  const resetEmailFromUrl = searchParams.get("email") || "";

  const [authMode, setAuthMode] = useState("login");

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [verifyEmail, setVerifyEmail] = useState("");
  const [verificationCode, setVerificationCode] = useState("");

  const [forgotEmail, setForgotEmail] = useState(resetEmailFromUrl);
  const [resetCode, setResetCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [showForgotForm, setShowForgotForm] = useState(false);
  const [resetMode, setResetMode] = useState(false);

  const isResetMode = Boolean(resetToken) || resetMode;

  const [error, setError] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const canSubmitReset = useMemo(() => {
    const emailOk = Boolean(resetEmailFromUrl || forgotEmail);
    const passwordOk = Boolean(newPassword);
    const codeOk = Boolean(isResetMode ? resetToken : resetCode);
    return emailOk && passwordOk && codeOk;
  }, [forgotEmail, newPassword, resetEmailFromUrl, resetCode, resetToken, isResetMode]);

  useEffect(() => {
    if (tokenStore.get()) {
      navigate("/", { replace: true });
    }
  }, [navigate]);

  const clearMessages = () => {
    setError("");
    setStatus("");
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    setLoading(true);
    clearMessages();

    try {
      const response = await api.login(loginEmail, loginPassword);
      tokenStore.set(response.token);
      navigate("/", { replace: true });
    } catch (requestError) {
      if (requestError.payload?.verificationRequired) {
        setVerifyEmail(requestError.payload.email || loginEmail);
        setAuthMode("verify");
        const codeHint = requestError.payload.verificationCode
          ? ` Verification code: ${requestError.payload.verificationCode}`
          : "";
        setStatus((requestError.message || "Verification required.") + codeHint);
      } else {
        setError(requestError.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleVerify = async (event) => {
    event.preventDefault();
    setLoading(true);
    clearMessages();

    try {
      const response = await api.verifyLogin(verifyEmail, verificationCode);
      tokenStore.set(response.token);
      navigate("/", { replace: true });
    } catch (requestError) {
      setError(requestError.message);
    } finally {
      setLoading(false);
    }
  };

  const handleResendCode = async () => {
    setLoading(true);
    clearMessages();
    try {
      const response = await api.resendVerification(verifyEmail);
      const codeHint = response.verificationCode ? ` Verification code: ${response.verificationCode}` : "";
      setStatus((response.message || "Verification code sent.") + codeHint);
    } catch (requestError) {
      setError(requestError.message);
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = async (event) => {
    event.preventDefault();
    setLoading(true);
    clearMessages();

    try {
      const response = await api.forgotPassword(forgotEmail);
      const baseMessage = response.message || "If this email exists, a reset code has been sent.";
      setStatus(response.resetLink ? `${baseMessage} ${response.resetLink}` : baseMessage);
      setResetMode(true);
    } catch (requestError) {
      setError(requestError.message);
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async (event) => {
    event.preventDefault();
    setLoading(true);
    clearMessages();

    try {
      const emailForReset = resetEmailFromUrl || forgotEmail;
      const response = await api.resetPassword(
        emailForReset,
        resetToken,
        newPassword,
        isResetMode ? "" : resetCode
      );
      setStatus(response.message || "Password reset successful. Please login.");
      setNewPassword("");
      setResetCode("");
    } catch (requestError) {
      setError(requestError.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <form
        className="login-card"
        onSubmit={isResetMode ? handleResetPassword : authMode === "verify" ? handleVerify : handleLogin}
      >
        <h1>
          {isResetMode
            ? "Reset Password"
            : authMode === "verify"
            ? "Verify Code"
            : "Admin Login"}
        </h1>
        <p>
          {isResetMode
            ? "Set a new password for your admin account."
            : authMode === "login"
            ? "Use email and password to access the admin panel."
            : "Enter the verification code sent to your email."}
        </p>

        {!isResetMode ? (
          <div style={{ display: "grid", gap: 8, gridTemplateColumns: "1fr" }}>
            <button type="button" onClick={() => { setAuthMode("login"); clearMessages(); }}>
              Login
            </button>
          </div>
        ) : null}

        {isResetMode ? (
          <>
            <input
              type="email"
              placeholder="Admin email"
              value={resetEmailFromUrl || forgotEmail}
              onChange={(event) => setForgotEmail(event.target.value)}
              required
              disabled={Boolean(resetEmailFromUrl)}
            />
            {!resetToken ? (
              <input
                type="text"
                placeholder="Reset code"
                value={resetCode}
                onChange={(event) => setResetCode(event.target.value)}
                required
              />
            ) : null}
            <input
              type="password"
              placeholder="New password"
              value={newPassword}
              onChange={(event) => setNewPassword(event.target.value)}
              required
            />
          </>
        ) : authMode === "verify" ? (
          <>
            <input
              type="email"
              placeholder="Admin email"
              value={verifyEmail}
              onChange={(event) => setVerifyEmail(event.target.value)}
              required
            />
            <input
              type="text"
              placeholder="6-digit verification code"
              value={verificationCode}
              onChange={(event) => setVerificationCode(event.target.value)}
              required
            />
          </>
        ) : (
          <>
            <input
              type="email"
              placeholder="Admin email"
              value={loginEmail}
              onChange={(event) => setLoginEmail(event.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={loginPassword}
              onChange={(event) => setLoginPassword(event.target.value)}
              required
            />
          </>
        )}

        {error ? <div className="error">{error}</div> : null}
        {status ? <div className="status">{status}</div> : null}

        <button type="submit" disabled={loading || (isResetMode && !canSubmitReset)}>
          {loading
            ? "Please wait..."
            : isResetMode
            ? "Reset Password"
            : authMode === "verify"
            ? "Verify and Login"
            : "Sign In"}
        </button>

        {!isResetMode && authMode === "verify" ? (
          <button type="button" onClick={handleResendCode} disabled={loading || !verifyEmail}>
            Resend Verification Code
          </button>
        ) : null}

        {!isResetMode && authMode === "login" ? (
          <>
            <button
              type="button"
              onClick={() => {
                setShowForgotForm((prev) => !prev);
                clearMessages();
              }}
            >
              {showForgotForm ? "Hide Forgot Password" : "Forgot Password?"}
            </button>
            {showForgotForm ? (
              <>
                <input
                  type="email"
                  placeholder="Enter admin email"
                  value={forgotEmail}
                  onChange={(event) => setForgotEmail(event.target.value)}
                  required
                />
                <button type="button" onClick={handleForgotPassword} disabled={loading || !forgotEmail}>
                  Send Reset Code
                </button>
              </>
            ) : null}
          </>
        ) : null}
      </form>
    </div>
  );
};

export default LoginPage;
