import { axiosInstance } from "./auth.service";

export function setToken(token, role) {
  localStorage.setItem("token", token);
  localStorage.setItem("role", role);
  axiosInstance.defaults.headers["Authorization"] = `Bearer ${token}`;
}

export function removeToken() {
  localStorage.removeItem("token");
  localStorage.removeItem("role");
  axiosInstance.defaults.headers["Authorization"] = "";
}

export function getToken() {
  return localStorage.getItem("token");
}

export function getRole() {
  return localStorage.getItem("role");
}

export function logout() {
  removeToken();
  axiosInstance.defaults.headers["Authorization"] = "";
  localStorage.removeItem("verified");
}
