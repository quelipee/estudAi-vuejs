<template>
  <div>
    <div class="flex flex-row items-center space-x-1 justify-between mb-5">
      <div @click="handleAction('exercises')"
           class="cursor-pointer p-3 bg-blue-200 text-blue-800 rounded-md
           shadow-sm hover:bg-blue-300 transition-colors w-1/2 text-center">
        <h3 class="text-sm font-medium">Exercícios</h3>
      </div>
      <div @click="handleAction('explanation')"
           class="cursor-pointer p-3 bg-green-200 text-green-800 rounded-md
           shadow-sm hover:bg-green-300 transition-colors w-1/2 text-center">
        <h3 class="text-sm font-medium">Explicação</h3>
      </div>
      <div @click="handleAction('continue')"
           class="cursor-pointer p-3 bg-gray-200 text-gray-800 rounded-md
           shadow-sm hover:bg-gray-300 transition-colors w-1/2 text-center">
        <h3 class="text-sm font-medium">Continuar</h3>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  // Função para lidar com cliques nos cards
    const handleAction = (action: string) => {
      switch (action) {
        case 'exercises':
          // Redirecionar para a página de exercícios
          console.log('Navegar para Exercícios');
          break;
        case 'continue':
          // Redirecionar para a próxima seção ou continuar
          console.log('Continuar com o curso');
          break;
        case 'explanation':
          // Redirecionar para a seção de explicação detalhada
          console.log('Mostrar Explicação Detalhada');
          break;
      }
    };
</script>