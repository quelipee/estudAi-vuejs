<template>
    <div class="flex items-center justify-center">
      <img class="w-24 h-24 rounded-full shadow-lg"
           :src="imgAvatar"
           alt="Profile Avatar" />
    </div>

    <div class="text-center mt-4">
      <h2 class="text-xl font-bold text-gray-800">Nome do Usuário</h2>
      <p class="text-sm text-gray-500">Profissão/Status</p>
    </div>
</template>
<script setup lang="ts">
  const imgAvatar = 'https://ionicframework.com/docs/img/demos/avatar.svg'
</script>