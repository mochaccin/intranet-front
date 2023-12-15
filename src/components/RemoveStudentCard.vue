<script setup>
import { useRoute } from 'vue-router';
import { removeStudentFromCourse } from '@/services/courses.service';
import { ref } from 'vue';

const route = useRoute();
const isStudentDeleted = ref(false);

const props = defineProps({
    studentName: String,
    studentRut: String,
})

function removeStudent() {
    const courseCode = route.query.courseCode;
    const response = removeStudentFromCourse(courseCode, props.studentRut);
    if (response.error) {
        console.log(response.error);
    } else {
        isStudentDeleted.value = true;
    }
}

</script>

<template>
    <v-card v-if="!isStudentDeleted" class="mx-auto card-wrapper" variant="tonal" color="primary" elevation="1">
        <v-card-title>{{ studentName }}</v-card-title>
        <v-card-subtitle class="pt-4">
            {{ studentRut }}
        </v-card-subtitle>

        <v-card-actions class="align-center text-center justify-center">
            <v-btn @click="removeStudent()" class="remove-btn" variant="flat" color="primary" rounded="lg">
                Desinscribir
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<style scoped>
.card-wrapper {
    display: flex;
    flex-direction: row;
    width: 800px;
    position: relative;
}

.remove-btn {
    position: absolute;
    right: 20px;
    width: 140px;
}
</style>