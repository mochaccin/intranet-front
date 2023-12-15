<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function changePassword() {
    router.push({ name: 'ChangePassword' });
}

function changeEmail() {
    router.push({ name: 'ChangeEmail' });
}

</script>

<template>
    <v-container class="fill-height">
        <v-responsive class="align-center text-center fill-height">
            <v-card class="container" variant="tonal" color="primary" elevation="3">
                <v-btn @click="changeEmail()" height="100px" class="mt-4 login-btn" color="primary">Cambiar correo</v-btn>
                <v-btn @click="changePassword()" height="100px" class="mt-4 login-btn" color="primary">Cambiar
                    contraseña</v-btn>
            </v-card>
        </v-responsive>
    </v-container>
</template>

<style scoped>
.container {
    width: 1000px;
    height: 800px;
    border-radius: 20px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.login-btn {
    width: 500px;
    border-radius: 20px;
}

.login-btn:hover {
    background-color: transparent !important;
    color: black !important;
    border: 2px solid #1867C0 !important;
}
</style>