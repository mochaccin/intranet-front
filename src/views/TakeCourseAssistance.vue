<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();
const courseCode = route.params.courseCode;
const students = [
    {
        name: 'Juan Pérez',
        dni: '12345678A',
        asistencias: [
            { fecha: '2023-11-01', asistio: 'si' },
            { fecha: '2023-11-02', asistio: 'no' },
        ]
    },
    {
        name: 'María Rodríguez',
        dni: '87654321B',
        asistencias: [
            { fecha: '2023-11-01', asistio: 'si' },
            { fecha: '2023-11-02', asistio: 'si' },
        ]
    },
    {
        name: 'Carlos Sánchez',
        dni: '45678901C',
        asistencias: [
            { fecha: '2023-11-01', asistio: 'no' },
            { fecha: '2023-11-02', asistio: 'no' },
        ]
    },
    {
        name: 'Juan Pérez',
        dni: '12345678A',
        asistencias: [
            { fecha: '2023-11-01', asistio: 'si' },
            { fecha: '2023-11-02', asistio: 'no' },
        ]
    },
    {
        name: 'Juan Pérez',
        dni: '12345678A',
        asistencias: [
            { fecha: '2023-11-01', asistio: 'si' },
            { fecha: '2023-11-02', asistio: 'no' },
        ]
    },
];

</script>

<template>
    <v-container class="fill-height">
        <v-responsive class="align-center justify-center text-center fill-height">
            <div class="container">
                <v-for>
                    <h1> Tomar asistencia para la asignatura {{ courseCode }}</h1>
                    <div v-for="student in students" :key="student.dni">
                        <h2>{{ student.name }}</h2>
                        <p>DNI: {{ student.dni }}</p>
                        <ul>
                            <li v-for="attendance in student.asistencias" :key="attendance.fecha">
                                {{ attendance.fecha }}
                                <input type="checkbox" v-model="attendance.asistio" />
                            </li>
                        </ul>
                    </div>
                </v-for>
            </div>
        </v-responsive>
    </v-container>
</template>

<style scoped>
.container {
    width: 1000px;
    height: 800px;
    background-color: #cee6fd;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.form {
    width: 800px;
}
</style>