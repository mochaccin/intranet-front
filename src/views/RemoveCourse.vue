<script setup>
import RemoveCourseCard from '@/components/RemoveCourseCard.vue';

const courses = [
    {
        courseCode: 'CS101',
        courseName: 'Introducción a la Ciencia de la Computación',
    },
    {
        courseCode: 'MAT202',
        courseName: 'Álgebra Lineal',
    },
    {
        courseCode: 'ENG110',
        courseName: 'Inglés Básico',
    },
    {
        courseCode: 'ENG110',
        courseName: 'Inglés Básico',
    },
    {
        courseCode: 'ENG110',
        courseName: 'Inglés Básico',
    },
    {
        courseCode: 'ENG110',
        courseName: 'Inglés Básico',
    },
    {
        courseCode: 'CS101',
        courseName: 'Introducción a la Ciencia de la Computación',
    },
    {
        courseCode: 'MAT202',
        courseName: 'Álgebra Lineal',
    },
    {
        courseCode: 'ENG110',
        courseName: 'Inglés Básico',
    },
];
</script>

<template>
    <v-container class="fill-height">
        <v-responsive class="align-center justify-center text-center fill-height">
            <div class="container">
                <v-col v-for="course in courses" :key="course.courseCode" cols="1" sm="1">
                    <RemoveCourseCard :course-name="course.courseName" :course-code="course.courseCode" />
                </v-col>

            </div>
        </v-responsive>
    </v-container>
</template>

<style scoped>
.container {
    width: 1000px;
    height: 800px;
    background-color: #cee6fd;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-left: 80px;
}
</style>