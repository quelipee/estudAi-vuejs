<template>
  <div class="flex flex-col items-center p-6">
    <!-- Imagem e detalhes do usuário -->
    <div class="relative">
      <img
          :src="imgAvatar"
          alt="Profile"
          class="rounded-full w-24 h-24 object-cover"
      />
      <ion-icon
          :icon="createSharp"
          class="absolute bottom-0 right-0 bg-purple-600 p-1 rounded-full text-white"
      ></ion-icon>
    </div>
    <h2 class="mt-3 text-lg font-semibold text-gray-800">{{ profile.user.name }}</h2>
    <p class="text-sm text-gray-500">{{ profile.user.email }}</p>
  </div>
</template>
<script setup lang="ts">
  import { onMounted, useCourseStore, createSharp } from "@/estudAI/components";

  const profile = useCourseStore();
  const imgAvatar = 'https://ionicframework.com/docs/img/demos/avatar.svg';

  onMounted(async () => {
    await profile.fetchUser()
  })
</script>