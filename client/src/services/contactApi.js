const normalizeApiBaseUrl = (value) => {
  const base = value || "http://localhost:5000/api";
  const trimmed = base.replace(/\/$/, "");
  return trimmed.endsWith("/api") ? trimmed : `${trimmed}/api`;
};

const API_BASE_URL = normalizeApiBaseUrl(import.meta.env.VITE_API_BASE_URL);

export const sendContactMessage = async (payload) => {
  const response = await fetch(`${API_BASE_URL}/contact/send`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  let data = {};
  try {
    data = await response.json();
  } catch {
    data = {};
  }

  if (!response.ok) {
    throw new Error(data.message || "Failed to send message");
  }

  return data;
};
