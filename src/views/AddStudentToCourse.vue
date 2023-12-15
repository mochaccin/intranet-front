<script setup>
import { addStudentToCourse } from '@/services/courses.service';
import { ref } from 'vue';

const courseCode = ref('');
const studentDni = ref('');

function addStudent() {

    if (!courseCode.value || !studentDni.value) {
        return;
    }

    const response = addStudentToCourse(courseCode.value, studentDni.value);

    if (response.error) {
        console.log(response.error);
    } else {
        console.log("Asignatura creada");
    }
}

</script>

<template>
    <v-container class="fill-height">
        <v-responsive class="align-center justify-center text-center fill-height">
            <v-card class="container" variant="tonal" color="primary">
                <h1>Inscribir alumno en asignatura</h1>
                <div class="py-3" />
                <v-form class="form" fast-fail @submit.prevent>
                    <v-text-field v-model="courseCode" label="Codigo asignatura" :rules="courseCodeRules"></v-text-field>
                    <v-text-field v-model="studentDni" label="DNI Estudiante" :rules="studentDniRules"></v-text-field>

                    <v-btn @click="addStudent()" type="submit" block class="mt-2" color="primary"
                        height="50px">Inscribir</v-btn>
                </v-form>
            </v-card>
        </v-responsive>
    </v-container>
</template>

<style scoped>
.container {
    width: 1000px;
    height: 800px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-left: 80px;
}

.form {
    width: 800px;
}
</style>