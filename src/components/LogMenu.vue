<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const props = defineProps({
    option: Number
})

function login() {
    if (props.option === 1) {
        router.push({ name: 'Home' });
    } else {
        router.push({ name: 'Home' });
    }
}

function signin() {
    if (props.option === 1) {
        router.push({ name: 'LogIn' });
    } else {
        router.push({ name: 'SignIn' });
    }
}

let btnText = "Iniciar sesion";
let subtext = "No tienes una cuenta? Registrate";

if (props.option === 1) {
    btnText = "Registrarse";
    subtext = "ya tienes una cuenta? Inicia sesion";
}

</script>

<template>
    <v-col cols="2" class="align-center justify-center">
        <v-card text="" variant="tonal" class="login-card">
            <div v-if="option === 1" class="py-6" />
            <div v-if="option != 1" class="py-14" />
            <v-form fast-fail @submit.prevent class="px-10">
                <v-text-field v-if="option === 1" class="login-field" v-model="name" label="Nombre"
                    :rules="nameRules"></v-text-field>
                <v-text-field class="login-field" v-model="rut" label="Rut" :rules="rutRules"></v-text-field>
                <v-text-field v-if="option === 1" class="login-field" v-model="email" label="Correo"
                    :rules="emailRules"></v-text-field>
                <v-text-field class="login-field" v-model="password" label="Contraseña"
                    :rules="passwordRules"></v-text-field>

                <v-btn @click="login()" block class="mt-2 login-btn">{{ btnText }}</v-btn>
            </v-form>
            <div class="py-2" />
            <a @click="signin()" class="text-body-2 font-weight-light mb-n1 text-decoration-none text-black option">{{
                subtext }}</a>
        </v-card>
    </v-col>
</template>

<style scoped>
.login-card {
    width: 400px;
    height: 500px;
    background-color: #cee6fd;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
}

.login-btn {
    background-color: #00407b;
    color: white;
}

.login-field {
    background-color: #cee9fd;
}

.option {
    cursor: pointer;
}
</style>
  