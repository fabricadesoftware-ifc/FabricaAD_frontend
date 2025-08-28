<template>
  <v-container class="d-flex justify-center align-center" style="height: 100vh;">
    <v-card class="pa-4" min-width="400">
      <v-card-title class="text-h5">Login</v-card-title>
      <v-card-text>
        <v-form @submit.prevent="loginFunction">
          <v-text-field
            v-model="user.registration"
            label="Registration"
            placeholder="Enter your registration"
            outlined
            required
          ></v-text-field>
          <v-text-field
            v-model="user.password"
            label="Password"
            placeholder="Enter your password"
            type="password"
            outlined
            required
          ></v-text-field>
          <v-btn type="submit" color="primary" block>Login</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';
import userService from '@/services/userService';

const user = ref({
  registration: '',
  password: ''
});

const loginFunction = async () => {
  try {
    const { data } = await userService.login(user.value.registration, user.value.password);
    console.log('Login bem-sucedido!', data);
  } catch (error) {
    console.log('Erro ao fazer login. Verifique suas credenciais.');
  }
};
</script>