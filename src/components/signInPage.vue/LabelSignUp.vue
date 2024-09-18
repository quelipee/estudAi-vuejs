<template>
  <div>
    <ion-label><p @click="signUp()" class="text-sm text-center block mt-5 text-gray-600">
      Toque aqui se você não tem conta</p>
    </ion-label>
  </div>
</template>
<script setup lang="ts">
import { IonLabel, useRouter } from '@/estudAI/components';
const router = useRouter();
const signUp = () => {
    router.push('register');
  }
</script>