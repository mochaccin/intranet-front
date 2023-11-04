<script setup>
import LogMenu from '@/components/LogMenu.vue'
</script>

<template>
    <v-container class="fill-height">
        <div class="px-3" />
        <v-responsive class="align-center text-center fill-height">

            <div class="py-3" />
            <v-row class="d-flex align-center justify-center">
                <LogMenu />
                <v-img height="300"
                    src="https://www.ufro.cl/index.php/normas-corporativas/31-logo-ufro-azul-vertical/file" />
            </v-row>
            <div class="py-1" />
            <div class="py-3" />
        </v-responsive>
    </v-container>
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
</style>
  