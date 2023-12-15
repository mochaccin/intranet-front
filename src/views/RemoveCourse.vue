<script setup>
import RemoveCourseCard from '@/components/RemoveCourseCard.vue';
import { getTeacherCourses } from '@/services/courses.service';
import { ref, onMounted } from 'vue';

const teacherCourses = ref([]);

onMounted(async () => {
    const response = await getTeacherCourses();
    teacherCourses.value = response.courses;
});
</script>

<template>
    <v-container class="fill-height">
        <v-responsive class="align-center justify-center text-center fill-height">
            <v-card class="container" variant="tonal" color="primary">
                <v-col v-for="course in teacherCourses" :key="course.courseCode" cols="1" sm="1">
                    <RemoveCourseCard :course-name="course.courseName" :course-code="course.courseCode" />
                </v-col>

            </v-card>
        </v-responsive>
    </v-container>
</template>

<style scoped>
.container {
    width: 1000px;
    height: auto;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-left: 80px;
    padding-top: 30px;
    padding-bottom: 30px;
}
</style>