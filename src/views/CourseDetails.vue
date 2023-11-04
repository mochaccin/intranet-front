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
            <v-sheet :height="800" :width="1000" rounded="lg" class="sheet">
                <div class="py-4" />
                <v-table>
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
                <v-btn class="btn" @click="goBack()">Volver a las asignaturas</v-btn>
            </v-sheet>
        </v-responsive>
    </v-container>
</template>

<style scoped>
.sheet {
    background-color: white;
    border-radius: 20px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

.btn {
    cursor: pointer;
}
</style>