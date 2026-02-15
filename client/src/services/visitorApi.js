const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

const SESSION_KEY = "website_session_id";

const getOrCreateSessionId = () => {
  const existing = localStorage.getItem(SESSION_KEY);
  if (existing) return existing;
  const created = `sess_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
  localStorage.setItem(SESSION_KEY, created);
  return created;
};

export const trackVisitor = async (path) => {
  try {
    await fetch(`${API_BASE_URL}/visitors/track`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        sessionId: getOrCreateSessionId(),
        path: path || "/",
      }),
      keepalive: true,
    });
  } catch {
    // Silent failure: tracking should never block UX
  }
};

