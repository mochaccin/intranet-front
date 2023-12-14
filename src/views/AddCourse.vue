<script setup>
</script>

<template>
    <v-container class="fill-height">
        <v-responsive class="align-center justify-center text-center fill-height">
            <v-card class="container" variant="tonal" color="primary">
                <h1>Agregar asignaturas</h1>
                <div class="py-3" />
                <v-form class="form" fast-fail @submit.prevent>
                    <v-text-field v-model="courseName" label="Nombre asignatura" :rules="courseNameRules"></v-text-field>

                    <v-text-field v-model="courseCode" label="Codigo asignatura" :rules="courseCodeRules"></v-text-field>
                    <v-text-field v-model="courseTeacher" label="DNI Profesor" :rules="courseTeacherRules"></v-text-field>

                    <v-btn type="submit" block class="mt-2" color="primary" height="50px">Crear asignatura</v-btn>
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