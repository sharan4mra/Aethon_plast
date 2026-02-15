import { clearAdminToken, getAdminToken } from "./auth";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

const buildHeaders = (isJson = true) => {
  const token = getAdminToken();
  const headers = {};

  if (isJson) {
    headers["Content-Type"] = "application/json";
  }

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  return headers;
};

const handleUnauthorized = (response) => {
  if (response.status === 401 || response.status === 403) {
    clearAdminToken();
  }
};

const parseResponse = async (response) => {
  let data = {};
  try {
    data = await response.json();
  } catch (error) {
    data = {};
  }

  if (!response.ok) {
    const message = data.message || "Request failed";
    throw new Error(message);
  }

  return data;
};

export const adminLogin = async (email, password) => {
  const response = await fetch(`${API_BASE_URL}/admin/login`, {
    method: "POST",
    headers: buildHeaders(),
    body: JSON.stringify({ email, password }),
  });

  return parseResponse(response);
};

export const getUsers = async () => {
  const response = await fetch(`${API_BASE_URL}/admin/users`, {
    headers: buildHeaders(),
  });
  handleUnauthorized(response);
  return parseResponse(response);
};

export const createUser = async (payload) => {
  const response = await fetch(`${API_BASE_URL}/admin/users`, {
    method: "POST",
    headers: buildHeaders(),
    body: JSON.stringify(payload),
  });
  handleUnauthorized(response);
  return parseResponse(response);
};

export const updateUser = async (id, payload) => {
  const response = await fetch(`${API_BASE_URL}/admin/users/${id}`, {
    method: "PUT",
    headers: buildHeaders(),
    body: JSON.stringify(payload),
  });
  handleUnauthorized(response);
  return parseResponse(response);
};

export const deleteUser = async (id) => {
  const response = await fetch(`${API_BASE_URL}/admin/users/${id}`, {
    method: "DELETE",
    headers: buildHeaders(),
  });
  handleUnauthorized(response);
  return parseResponse(response);
};

export const getProducts = async () => {
  const response = await fetch(`${API_BASE_URL}/products`, {
    headers: buildHeaders(false),
  });

  return parseResponse(response);
};

export const createProduct = async (formData) => {
  const response = await fetch(`${API_BASE_URL}/products`, {
    method: "POST",
    headers: buildHeaders(false),
    body: formData,
  });
  handleUnauthorized(response);
  return parseResponse(response);
};

export const updateProduct = async (id, formData) => {
  const response = await fetch(`${API_BASE_URL}/products/${id}`, {
    method: "PUT",
    headers: buildHeaders(false),
    body: formData,
  });
  handleUnauthorized(response);
  return parseResponse(response);
};

export const deleteProduct = async (id) => {
  const response = await fetch(`${API_BASE_URL}/products/${id}`, {
    method: "DELETE",
    headers: buildHeaders(false),
  });
  handleUnauthorized(response);
  return parseResponse(response);
};

export { API_BASE_URL };
