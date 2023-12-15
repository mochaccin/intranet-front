<template>
  <v-container class="fill-height">
    <v-responsive class="align-center text-center fill-height">
      <v-img height="300" src="https://www.ufro.cl/index.php/normas-corporativas/31-logo-ufro-azul-vertical/file" />

      <div class="py-3" />

      <v-row class="d-flex align-center justify-center">

        <v-col cols="auto">
          <v-btn color="primary" @click="login()" min-width="228" rel="noopener noreferrer" size="x-large" target="_blank"
            variant="flat">
            <v-icon icon="mdi-login" size="large" start />

            Iniciar sesion
          </v-btn>
        </v-col>
      </v-row>
      <div class="py-1" />
      <a @click="signin()" class="text-body-2 font-weight-light mb-n1 text-decoration-none text-black signin">No tienes
        una
        cuenta?
        Registrate</a>
      <div class="py-3" />
    </v-responsive>
  </v-container>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function signin() {
  router.push({ name: 'SignIn', params: { option: 0 } });
}

function login() {
  router.push({ name: 'LogIn', params: { option: 1 } });
}
</script>

<style scoped>
.signin {
  cursor: pointer;
}
</style>
