<script setup>
import CourseCard from '@/components/CourseCard.vue';
import { onMounted, ref } from 'vue';
import { getStudentCourses } from '@/services/courses.service';

const studentCourses = ref([]);

onMounted(() => {
    getStudentCourses()
        .then((response) => {
            console.log(response.data);
            studentCourses.value = response.data;

        })
        .catch((error) => {
            console.log(error);
        });
});

const courses = [
    {
        courseCode: 'CS101',
        courseName: 'Introducción a la Ciencia de la Computación',
        courseImgUrl: 'https://ejemplo.com/imagen-curso1.jpg',
    },
    {
        courseCode: 'MAT202',
        courseName: 'Álgebra Lineal',
        courseImgUrl: 'https://ejemplo.com/imagen-curso2.jpg',
    },
    {
        courseCode: 'ENG110',
        courseName: 'Inglés Básico',
        courseImgUrl: 'https://ejemplo.com/imagen-curso3.jpg',
    },
    {
        courseCode: 'ENG110',
        courseName: 'Inglés Básico',
        courseImgUrl: 'https://ejemplo.com/imagen-curso3.jpg',
    },
    {
        courseCode: 'ENG110',
        courseName: 'Inglés Básico',
        courseImgUrl: 'https://ejemplo.com/imagen-curso3.jpg',
    },
    {
        courseCode: 'ENG110',
        courseName: 'Inglés Básico',
        courseImgUrl: 'https://ejemplo.com/imagen-curso3.jpg',
    },
    {
        courseCode: 'CS101',
        courseName: 'Introducción a la Ciencia de la Computación',
        courseImgUrl: 'https://ejemplo.com/imagen-curso1.jpg',
    },
    {
        courseCode: 'MAT202',
        courseName: 'Álgebra Lineal',
        courseImgUrl: 'https://ejemplo.com/imagen-curso2.jpg',
    },
    {
        courseCode: 'ENG110',
        courseName: 'Inglés Básico',
        courseImgUrl: 'https://ejemplo.com/imagen-curso3.jpg',
    },
];
</script>

<template>
    <v-container class="fill-height">
        <v-responsive class="align-center text-center fill-height">
            <div class="py-3" />
            <v-row>
                <v-col v-for="course in courses" :key="course.courseCode" cols="3" sm="4">
                    <CourseCard :course-name="course.courseName" :course-code="course.courseCode"
                        :course-img="course.courseImgUrl" />
                </v-col>
            </v-row>
            <div class="py-1" />
            <div class="py-3" />
        </v-responsive>
    </v-container>
</template>