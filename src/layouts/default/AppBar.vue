<template>
    <v-navigation-drawer expand-on-hover rail>
      <v-list>
          <v-list-item
            prepend-avatar="https://fica.ufro.cl/wp-content/uploads/2017/03/cropped-logo-ufro1--300x300.png"
            title="Nicolas Pelizari"
            subtitle="n.pelizari01@ufromail.cl"
          ></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-home" title="Home" value="home"></v-list-item>
          <v-list-item prepend-icon="mdi-notebook-multiple" title="Ver asignaturas" value="courses"></v-list-item>
          <v-list-item prepend-icon="mdi-account-details" title="Configuracion del perfil" value="details"></v-list-item>
          <v-list-item prepend-icon="mdi-logout" title="Cerrar sesion" value="config"></v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script setup>
  //
</script>
