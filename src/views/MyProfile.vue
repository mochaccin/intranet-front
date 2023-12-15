<script setup>
import { getMe } from '@/services/auth.service';
import { ref, onMounted } from 'vue';
import { getStudentCourses, getTeacherCourses } from '@/services/courses.service';
import { getRole } from '@/services/helpers';

const profileInfo = ref([]);
const studentCourses = ref([]);
const role = ref('');
const isTeacher = ref(Boolean);

onMounted(async () => {

    role.value = getRole();
    if (role.value === 'teacher') {
        isTeacher.value = true;
    } else {
        isTeacher.value = false;
    }

    try {
        const response = await getMe();
        profileInfo.value = response;
    } catch (error) {
        console.error('Error fetching profile information:', error);
    }
    try {
        if (!isTeacher.value) {
            const response = await getStudentCourses();
            studentCourses.value = response.courses;
        } else {
            const response = await getTeacherCourses();
            studentCourses.value = response.courses;
        }
    } catch (error) {
        console.error('Error fetching profile information:', error);
    }
});

</script>

<template>
    <v-container class="fill-height">
        <v-responsive class="align-center text-center fill-height">
            <v-card class="container" variant="tonal" color="primary" elevation="3">
                <v-card-title class="info-title">Nombre: {{ profileInfo.name }}</v-card-title>
                <v-card-subtitle class="info">Rut: {{ profileInfo.dni }}</v-card-subtitle>
                <v-card-subtitle class="info">Correo: {{ profileInfo.email }}</v-card-subtitle>
                <v-card-subtitle class="info">Rol: {{ profileInfo.role }}</v-card-subtitle>
                <v-card-title class="courses-title info-title">Mis Cursos</v-card-title>
                <div class="courses-container">
                    <v-col v-for="course in studentCourses" :key="course.courseCode" cols="3" sm="4">
                        <v-card-subtitle class="info">Codigo: {{ course.courseCode }}</v-card-subtitle>
                        <v-card-subtitle class="info">Nombre: {{ course.courseName }}</v-card-subtitle>
                    </v-col>
                </div>
            </v-card>
        </v-responsive>
    </v-container>
</template>

<style scoped>
.container {
    width: 1000px;
    height: 800px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 20px;
    padding-bottom: 20px;
}

.info-title {
    font-size: 2rem;
}

.info {
    font-weight: 600;
}

.courses-title {
    padding-top: 40px;
}

.courses-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}
</style>