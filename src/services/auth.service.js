import axios from "axios";
import { getRole, getToken, removeToken, setToken } from "./helpers";

const BASE_URL = "http://localhost:3000";

const axiosInstance = axios.create({ baseURL: BASE_URL });

const token = getToken();
const role = getRole();

if (token) {
  setToken(token, role);
}

export async function userLogin(email, password) {
  return await axiosInstance
    .post("/auth/login", {
      password: password,
      email: email,
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => ({
      error: true,
      name: error.response.data?.error?.name || "Error",
      message: error.response.data?.error?.msg || "Error",
    }));
}

export async function getMe() {
  return await axiosInstance
    .get(`${BASE_URL}/me`)
    .then((response) => response.data)
    .catch((error) => {
      console.log(error);
      if (error.response.status === 404) {
        removeToken();
      }
      return {
        error: true,
        name: error.response.data?.error?.name || "Error",
        message: error.response.data?.error || "Error",
      };
    });
}

export { axiosInstance };
