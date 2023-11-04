<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function addStudent() {
    router.push({ name: 'AddStudentToCourse' });
}

function removeStudent() {
    router.push({ name: 'RemoveStudentFromCourse' });
}

function takeAssistance() {
    router.push({ name: 'TakeAssistance' });
}

function addCourse() {
    router.push({ name: 'AddCourse' });
}

function removeCourse() {
    router.push({ name: 'RemoveCourse' });
}


</script>

<template>
    <v-container class="fill-height">
        <v-responsive class="align-center text-center fill-height">
            <div class="container">
                <v-btn @click="addStudent()" class="mt-2 login-btn">Inscribir alumno en asignatura</v-btn>
                <v-btn @click="removeStudent()" class="mt-2 login-btn">Desinscribir alumno en asignatura</v-btn>
                <v-btn @click="takeAssistance()" class="mt-2 login-btn">Registrar Asistencia</v-btn>
                <v-btn @click="addCourse()" class="mt-2 login-btn">Agregar Curso</v-btn>
                <v-btn @click="removeCourse()" class="mt-2 login-btn">Eliminar Curso</v-btn>
            </div>
        </v-responsive>
    </v-container>
</template>

<style scoped>
.container {
    width: 1000px;
    height: 800px;
    border-radius: 20px;
    background-color: #cee6fd;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.login-btn {
    width: 500px;
    height: 70px;
    border-radius: 20px;
    background-color: #00407b;
    color: white;
}
</style>