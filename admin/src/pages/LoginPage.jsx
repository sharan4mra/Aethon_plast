import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api, tokenStore } from "../api/client";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (tokenStore.get()) {
      navigate("/", { replace: true });
    }
  }, [navigate]);

  const handleLogin = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await api.login(email, password);
      tokenStore.set(response.token);
      navigate("/", { replace: true });
    } catch (requestError) {
      if (requestError?.payload?.verificationRequired) {
        setError("Only direct login is enabled. Contact admin to disable verification requirement.");
      } else {
        setError(requestError?.message || "Login failed.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <form className="login-card" onSubmit={handleLogin}>
        <h1>Admin Login</h1>
        <p>Use email and password to access the admin panel.</p>

        <input
          type="email"
          placeholder="Admin email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />

        {error ? <div className="error">{error}</div> : null}

        <button type="submit" disabled={loading}>
          {loading ? "Please wait..." : "Log In"}
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
