const normalizeApiBaseUrl = (value) => {
  const base = value || "http://localhost:5000/api";
  const trimmed = base.replace(/\/$/, "");
  return trimmed.endsWith("/api") ? trimmed : `${trimmed}/api`;
};

const API_BASE_URL = normalizeApiBaseUrl(import.meta.env.VITE_API_BASE_URL);
const API_ORIGIN = API_BASE_URL.replace(/\/api\/?$/, "");

export const resolveMediaUrl = (value) => {
  if (!value) return "";
  if (value.startsWith("http://") || value.startsWith("https://")) return value;
  if (value.startsWith("/uploads/")) return `${API_ORIGIN}${value}`;
  if (value.startsWith("/")) return value;
  return `${API_ORIGIN}/uploads/${value}`;
};
