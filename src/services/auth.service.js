import axios from "axios";

export async function userLogin() {
  return await axios
    .post("http://localhost:3000/users/login", {
      password: "1234",
      email: "sdjddkasdaddasdhdjsaka@gmail.com",
    })
    .then((response) => {
      return response.data;
    });
}
