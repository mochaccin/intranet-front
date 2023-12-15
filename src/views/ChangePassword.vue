<script setup>
import { ref } from 'vue';
import { changePassword } from '@/services/users.service';

const password = ref('');

function onSubmit() {
    if (!password.value) {
        return;
    }

    const response = changePassword(password.value);

    if (response.error) {
        console.log(response.error);
    } else {
        console.log("Contraseña cambiada");
    }
}
</script>

<template>
    <v-container class="fill-height">
        <v-responsive class="align-center justify-center text-center fill-height">
            <v-card class="container" variant="tonal" color="primary">
                <h1>Cambiar contraseña</h1>
                <div class="py-3" />
                <v-form class="form" fast-fail @submit.prevent>
                    <v-text-field v-model="password" label="Nueva contraseña" :rules="passwordRules"></v-text-field>

                    <v-btn @click="onSubmit()" type="submit" block class="mt-2" color="primary" height="50px">Cambiar
                        contraseña</v-btn>
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