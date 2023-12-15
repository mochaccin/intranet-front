<script setup>
import { useRouter, useRoute } from 'vue-router';
import { onMounted, ref } from 'vue';

import { userLogin } from '@/services/auth.service';
import { setToken } from '@/services/helpers';
import { registerUser } from '@/services/users.service';

const name = ref('');
const rut = ref('');
const email = ref('');
const password = ref('');

const router = useRouter();

const props = defineProps({
    option: Number
})

const route = useRoute();
let currentPath = route.path;

onMounted(() => {
    currentPath = route.path;
    console.log(currentPath);
});

async function login() {

    if (!email.value || !password.value) {
        return;
    }

    const response = await userLogin(email.value, password.value);

    if (response.error) {
        console.log(response.error);
    } else {
        setToken(response.token, response.role);

        await router.push({ name: 'Home' });
    }
}

async function register() {

    if (!email.value || !password.value || !name.value || !rut.value) {
        return;
    }

    const response = await registerUser(name.value, rut.value, email.value, password.value);

    if (response.error) {
        console.log(response.error);
    } else {
        setToken(response.token);

        await router.push({ name: 'LogIn' });
    }
}

function exec() {
    if (currentPath === '/signin') {
        register();
    } else {
        login();
    }

}

function redirect() {
    if (currentPath === '/signin') {
        router.push({ name: 'LogIn' });
    } else {
        router.push({ name: 'SignIn' });
    }
}

let btnText = "Iniciar sesion";
let subtext = "No tienes una cuenta? Registrate";

if (props.option === 1) {
    btnText = "Registrarse";
    subtext = "Ya tienes una cuenta? Inicia sesion";
}

</script>

<template>
    <v-col cols="2" class="align-center justify-center container">
        <v-card text="" variant="tonal" class="login-card" color="primary">
            <div v-if="option === 1" class="py-6" />
            <div v-if="option != 1" class="py-14" />
            <v-form fast-fail @submit.prevent="exec" class="px-10">
                <v-text-field v-if="option === 1" class="login-field" v-model="name" label="Nombre"
                    :rules="nameRules"></v-text-field>
                <v-text-field v-if="option === 1" class="login-field" v-model="rut" label="Rut"
                    :rules="rutRules"></v-text-field>
                <v-text-field class="login-field" v-model="email" label="Email" :rules="emailRules"></v-text-field>
                <v-text-field class="login-field" v-model="password" label="Contraseña"
                    :rules="passwordRules"></v-text-field>

                <v-btn @click="exec()" block class="mt-2 login-btn" height="40px">{{ btnText }}</v-btn>
            </v-form>
            <div class="py-2" />
            <a @click="redirect()"
                class="subtext text-body-2 font-weight-light mb-n1 text-decoration-none text-black option">{{
                    subtext }}</a>
        </v-card>
    </v-col>
</template>

<style scoped>
.login-card {
    width: 400px;
    height: 500px;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
}

.login-btn {
    color: white;
    background-color: #00407b;
    cursor: pointer;
}

.login-field {}

.option {
    cursor: pointer;
}

.subtext {
    cursor: pointer;
}

.container {
    z-index: 60;
}
</style>
  @/services/users.service