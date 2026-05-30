import axios from "axios";

const API = axios.create({
  baseURL: "https://book-store-1sor.onrender.com/api", // change if backend url differs
  headers: { "Content-Type": "application/json" },
});

// attach token
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;
