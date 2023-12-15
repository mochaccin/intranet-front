<script setup>
import { deleteCourse } from '@/services/courses.service';
import { ref } from 'vue';

const props = defineProps({
    courseName: String,
    courseCode: String,
})

const isCourseDeleted = ref(false);

async function removeCourse() {
    const response = deleteCourse(props.courseCode);

    if (response.error) {
        console.log(response.error);
    } else {
        isCourseDeleted.value = true;
    }
}


</script>

<template>
    <v-card v-if="!isCourseDeleted" class="mx-auto card-wrapper" variant="tonal" elevation="1">
        <v-card-title>{{ courseName }}</v-card-title>
        <v-card-subtitle class="pt-4">
            {{ courseCode }}
        </v-card-subtitle>

        <v-card-actions class="align-center text-center justify-center">
            <v-btn @click="removeCourse()" class="remove-btn" variant="flat" color="primary" rounded="lg">
                Eliminar asignatura
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
}
</style>