<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const props = defineProps({
    studentName: String,
    studentRut: String,
})

</script>

<template>
    <v-card class="mx-auto card-wrapper">
        <v-card-title>{{ studentName }}</v-card-title>
        <v-card-subtitle class="pt-4">
            {{ studentRut }}
        </v-card-subtitle>

        <v-card-actions class="align-center text-center justify-center">
            <v-btn class="remove-btn" color="white" rounded="lg">
                Desinscribir alumno
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
    background-color: #00407b;
}
</style>