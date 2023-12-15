import { axiosInstance } from "./auth.service";


export async function getStudentCourses() {
    return await axiosInstance
    .get("/courses/getStudentCourses")
    .then((response) => {
      return response.data;
    }).catch((error) => {
        console.log(error);
        if (error.response.status === 403) {
            removeToken();
        }
        return {
            error: true,
            name: error.response.data?.error?.name || "Error",
            message: error.response.data?.error || "Error",
        };
    });
}

