import { axiosInstance } from "./auth.service";


export async function registerUser(name, rut, email, password) {
  return await axiosInstance
    .post("/users/students", {
      password: password,
      email: email,
      name: name,
      dni: rut,
    })
    .then((response) => {
      return response.data;
    }).catch((error) => ({
			error: true,
			name: error.response.data?.error?.name || "Error",
			message: error.response.data?.error?.msg || "Error",
		}));
}