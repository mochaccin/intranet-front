<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const props = defineProps({
    courseName: String,
    courseCode: String,
    courseImg: String,
})

function courseDetails() {
    router.push({ name: 'CourseAssistance', params: { courseCode: props.courseCode } });
}
</script>

<template>
    <v-card class="mx-auto" max-width="400">
        <v-img class="align-end text-white" height="200" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" cover>
            <v-card-title>{{ courseName }}</v-card-title>
        </v-img>

        <v-card-subtitle class="pt-4">
            {{ courseCode }}
        </v-card-subtitle>

        <v-card-actions class="align-center text-center justify-center">
            <v-btn @click="courseDetails()" color="black" rounded="lg">
                Ver Asistencia
            </v-btn>
        </v-card-actions>
    </v-card>
</template>