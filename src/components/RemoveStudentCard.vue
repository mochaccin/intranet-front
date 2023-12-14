<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const props = defineProps({
    studentName: String,
    studentRut: String,
})

</script>

<template>
    <v-card class="mx-auto card-wrapper" variant="tonal" color="primary" elevation="1">
        <v-card-title>{{ studentName }}</v-card-title>
        <v-card-subtitle class="pt-4">
            {{ studentRut }}
        </v-card-subtitle>

        <v-card-actions class="align-center text-center justify-center">
            <v-btn class="remove-btn" variant="flat" color="primary" rounded="lg">
                Desinscribir
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
    width: 140px;
}
</style>