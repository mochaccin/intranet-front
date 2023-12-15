<script setup>
import { ref } from 'vue';
import { changeEmail } from '@/services/users.service';

const email = ref('');

function onSubmit() {
    if (!email.value) {
        return;
    }

    const response = changeEmail(email.value);

    if (response.error) {
        console.log(response.error);
    } else {
        console.log("Correo cambiada");
    }
}
</script>

<template>
    <v-container class="fill-height">
        <v-responsive class="align-center justify-center text-center fill-height">
            <v-card class="container" variant="tonal" color="primary">
                <h1>Cambiar correo</h1>
                <div class="py-3" />
                <v-form class="form" fast-fail @submit.prevent>
                    <v-text-field v-model="email" label="Nuevo correo" :rules="emailRules"></v-text-field>

                    <v-btn @click="onSubmit()" type="submit" block class="mt-2" color="primary" height="50px">Cambiar
                        correo</v-btn>
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