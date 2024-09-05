<template>
  <ion-page>
    <ion-content class="flex justify-center items-center h-full">
      <div class="w-full max-w-md text-center p-5">
        <!-- Logo e Título -->
<!--        <img src="" alt="EstudAI" class="w-38 mb-5 text-left ml" />-->
        <h3 class="w-38 mb-5 text-left ml text-violet-900 font-bold">EstudAI</h3>
        <div class="text-left font-semi-bold text-md-left font-thin">
          <h1 class="text-2xl ">Olá, convidado!</h1>
          <h2 class="text-xl">Bem-vindo ao EstudAI</h2>
        </div>
        <p class="text-left mt-3 mb-14 font-medium text-gray-600">Antes de continuar, faça login primeiro.</p>

        <!-- Imagem ilustrativa -->
        <img src="../../assets/img/1.png" alt="Ilustração" class="w-full h-auto mb-5" />

        <!-- Formulário de Login -->
        <ion-item>
          <ion-input placeholder="E-mail / Número de telefone / Nome de usuário" type="text"></ion-input>
        </ion-item>
        <ion-item>
          <ion-input placeholder="Senha" type="password"></ion-input>
          <ion-icon slot="end" name="eye-off-outline"></ion-icon>
        </ion-item>

        <ion-item lines="none">
          <ion-checkbox slot="start"></ion-checkbox>
          <ion-label>Lembre de mim</ion-label>
          <ion-label slot="end"><p class="text-[#6f3ed5] text-xs">Esqueceu sua senha?</p></ion-label>
        </ion-item>

        <!-- Botão de Login -->
        <ion-button expand="block" class="bg-[#6f3ed5] mt-5">Entrar</ion-button>

        <!-- Link para criar conta -->
        <ion-label><p class="text-sm block mt-5 text-gray-600">Toque aqui se você não tem conta</p></ion-label>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LoginPage',
});
</script>

<style scoped>

</style>
