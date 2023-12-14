<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

let desserts = [
    {
        name: '29-4-23',
        calories: "Si",
    },
    {
        name: '29-4-23',
        calories: "Si",
    },
    {
        name: '29-4-23',
        calories: "Si",
    },
    {
        name: '29-4-23',
        calories: "Si",
    },
    {
        name: '29-4-23',
        calories: "Si",
    },
    {
        name: '29-4-23',
        calories: "Si",
    },
    {
        name: '29-4-23',
        calories: "Si",
    },
    {
        name: '29-4-23',
        calories: "Si",
    },
    {
        name: '29-4-23',
        calories: "Si",
    },
    {
        name: '29-4-23',
        calories: "Si",
    },
    {
        name: '29-4-23',
        calories: "Si",
    },
    {
        name: '29-4-23',
        calories: "Si",
    },
]

function goBack() {
    router.push({ name: 'Courses' });
}
</script>


<template>
    <v-container class="fill-height">
        <v-responsive class="align-center justify-center text-center fill-height fill-width">
            <v-card :height="800" :width="1000" rounded="lg" class="sheet" variant="tonal" color="primary" elevation="3">
                <div class=" py-4" />
                <v-table theme="primary">
                    <thead>
                        <tr>
                            <th class="text-left">
                                Fecha
                            </th>
                            <th class="text-right">
                                Asistio
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in desserts" :key="item.name">
                            <td class="text-left">{{ item.name }}</td>
                            <td class="text-right">{{ item.calories }}</td>
                        </tr>
                    </tbody>
                </v-table>
                <v-btn class="btn" height="40px" color="primary" @click="goBack()">Volver a las asignaturas</v-btn>
            </v-card>
        </v-responsive>
    </v-container>
</template>

<style scoped>
.btn {
    cursor: pointer;
}
</style>