<script setup>
import CourseCard from '@/components/CourseCard.vue';
import { onMounted, ref } from 'vue';
import { getTeacherCourses } from '@/services/courses.service';

const teacherCourses = ref([]);

onMounted(async () => {
    const response = await getTeacherCourses();
    teacherCourses.value = response.courses;
});

</script>

<template>
    <v-container class="fill-height">
        <v-responsive class="align-center text-center fill-height">
            <div class="py-3" />
            <v-row>
                <v-col v-for="course in teacherCourses" :key="course.courseCode" cols="3" sm="4">
                    <CourseCard :course-name="course.courseName" :course-code="course.courseCode" :option="1" />
                </v-col>
            </v-row>
            <div class="py-1" />
            <div class="py-3" />
        </v-responsive>
    </v-container>
</template>