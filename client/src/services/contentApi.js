const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

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
