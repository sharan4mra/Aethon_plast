const normalizeApiBaseUrl = (value) => {
  const base = value || "http://localhost:5000/api";
  const trimmed = base.replace(/\/$/, "");
  return trimmed.endsWith("/api") ? trimmed : `${trimmed}/api`;
};

const API_BASE_URL = normalizeApiBaseUrl(import.meta.env.VITE_API_BASE_URL);

export const fetchContentByKey = async (key) => {
  const response = await fetch(
    `${API_BASE_URL}/content/key/${key}?t=${Date.now()}`,
    { cache: "no-store" }
  );
  if (!response.ok) {
    throw new Error("Content not found");
  }
  return response.json();
};
