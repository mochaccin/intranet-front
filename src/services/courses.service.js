import { axiosInstance } from "./auth.service";

export async function getStudentCourses() {
  return await axiosInstance
    .get("/courses/getStudentCourses")
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
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

export async function getTeacherCourses() {
  return await axiosInstance
    .get("/courses/getTeacherCourses")
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
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

export async function getCourseAttendances(courseId) {
  return await axiosInstance
    .get(`/courses/${courseId}/getAttendances`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
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

export async function createCourse(courseCode, courseName) {
  return await axiosInstance
    .post("/courses", {
      courseCode,
      courseName,
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
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

export async function deleteCourse(courseCode) {
  return await axiosInstance
    .delete(`/courses/${courseCode}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
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

export async function addStudentToCourse(courseCode, studentDni) {
  return await axiosInstance
    .patch(`/courses/students/add`, {
      courseCode: courseCode,
      studentDni: studentDni,
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
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

export async function removeStudentFromCourse(courseCode, studentDni) {
  return await axiosInstance
    .patch(`/courses/students/remove`, {
      courseCode: courseCode,
      studentDni: studentDni,
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
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

export async function getStudents(courseCode) {
  console.log(courseCode);
  return await axiosInstance
    .get(`courses/${courseCode}/students`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
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
