<script setup>
import RemoveStudentCard from '@/components/RemoveStudentCard.vue';
import { onMounted, ref } from 'vue';
import { getStudents } from '@/services/courses.service';
import { useRoute } from 'vue-router';

const courseStudents = ref([]);
const route = useRoute();

onMounted(async () => {
    const courseCode = route.query.courseCode;
    const response = await getStudents(courseCode);
    if (response.error) {
        console.log(response.error);
    } else {
        courseStudents.value = response.students;
    }
});

</script>

<template>
    <v-container class="fill-height">
        <v-responsive class="align-center justify-center text-center fill-height">
            <v-card class="container" variant="tonal" color="primary">
                <v-col v-for="student in courseStudents" :key="student.studentCode" cols="1" sm="1">
                    <RemoveStudentCard :student-name="student.name" :student-rut="student.dni" />
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
    padding-top: 20px;
    padding-bottom: 20px;
}
</style>