<script setup>
import CourseCard from '@/components/CourseCard.vue';
import { onMounted, ref } from 'vue';
import { getStudentCourses } from '@/services/courses.service';

const studentCourses = ref([]);

onMounted(async () => {
    const response = await getStudentCourses();
    studentCourses.value = response.courses;
});

</script>

<template>
    <v-container class="fill-height">
        <v-responsive class="align-center text-center fill-height">
            <div class="py-3" />
            <v-row>
                <v-col v-for="course in studentCourses" :key="course.courseCode" cols="3" sm="4">
                    <CourseCard :course-name="course.courseName" :course-code="course.courseCode" />
                </v-col>
            </v-row>
            <div class="py-1" />
            <div class="py-3" />
        </v-responsive>
    </v-container>
</template>