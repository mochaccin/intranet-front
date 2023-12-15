<script setup>
import { useRouter } from 'vue-router';
import { toRefs } from 'vue';

const router = useRouter();

const props = defineProps({
    courseName: String,
    courseCode: String,
    option: Number,
})

let btnText = "Ver Asistencia";

if (props.option) {
    btnText = "Desinscribir Alumno";
}

function courseDetails() {

    const { courseCode } = toRefs(props);
    if (props.option == 1) {
        console.log(props.courseCode);
        router.push({ name: 'RemoveStudentFromCourse', query: { courseCode: courseCode.value } });
    } else {
        router.push({ name: 'CourseAssistance', params: { courseCode: courseCode.value } });
    }
}
</script>

<template>
    <v-card class="mx-auto" max-width="400" variant="tonal" color="primary" elevation="2" rounded="lg">
        <v-img class="align-end text-white" height="200" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" cover>
            <v-card-title>{{ courseName }}</v-card-title>
        </v-img>

        <v-card-subtitle class="pt-4">
            {{ courseCode }}
        </v-card-subtitle>

        <v-card-actions class="align-center text-center justify-center">
            <v-btn @click="courseDetails()" color="black" rounded="lg">
                {{ btnText }}
            </v-btn>
        </v-card-actions>
    </v-card>
</template>