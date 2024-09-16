<template>
  <div class="flex flex-col items-center">
    <!-- Avatar -->
    <div class="relative mb-4">
      <img class="w-28 h-28 rounded-full border-2 border-purple-400"
           :src="imgAvatar" alt="Foto de Perfil">
    </div>

    <!-- Nome do Usuário -->
    <h2 class="text-md font-bold text-gray-800 mb-1">Nome do Usuário</h2>
    <p class="text-sm text-gray-500 mb-4">Profissão/Status</p>
  </div>
</template>
<script setup lang="ts">
  const imgAvatar = 'https://ionicframework.com/docs/img/demos/avatar.svg'
</script>