<script setup>
import RemoveStudentCard from '@/components/RemoveStudentCard.vue';

const students = [
    {
        name: 'Juan Pérez',
        dni: '12345678A',
    },
    {
        name: 'María Rodríguez',
        dni: '87654321B',
    },
    {
        name: 'Carlos Sánchez',
        dni: '45678901C',
    },
    {
        name: 'Ana López',
        dni: '78901234D',
    },
    {
        name: 'Eduardo García',
        dni: '23456789E',
    },
    {
        name: 'Luisa Martínez',
        dni: '90123456F',
    },
    {
        name: 'Eduardo García',
        dni: '23456789E',
    },
    {
        name: 'Luisa Martínez',
        dni: '90123456F',
    },
    {
        name: 'Luisa Martínez',
        dni: '90123456F',
    },
];
</script>

<template>
    <v-container class="fill-height">
        <v-responsive class="align-center justify-center text-center fill-height">
            <v-card class="container" variant="tonal" color="primary">
                <v-col v-for="student in students" :key="student.studentCode" cols="1" sm="1">
                    <RemoveStudentCard :student-name="student.name" :student-rut="student.dni" />
                </v-col>
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
</style>