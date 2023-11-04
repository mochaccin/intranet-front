<template>
  <v-navigation-drawer expand-on-hover rail>
    <v-list>
      <v-list-item prepend-avatar="https://fica.ufro.cl/wp-content/uploads/2017/03/cropped-logo-ufro1--300x300.png"
        title="Nicolas Pelizari" subtitle="n.pelizari01@ufromail.cl"></v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item prepend-icon="mdi-home" title="Home" value="home" to="/home"></v-list-item>
      <v-list-item prepend-icon="mdi-notebook-multiple" title="Ver asignaturas" value="courses"
        to="/courses"></v-list-item>
      <v-list-item prepend-icon="mdi-account-details" title="Menu profesor" value="details"
        to="/teacher/menu"></v-list-item>
      <v-list-item prepend-icon="mdi-logout" title="Cerrar sesion" value="config" to="/login"></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
//
</script>
