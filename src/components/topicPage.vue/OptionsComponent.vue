<template>
  <div>
    <div class="flex flex-col space-y-4 mb-9">
      <div @click="handleAction('exercises')"
           class="cursor-pointer p-3 bg-blue-200 text-blue-800 rounded-md
           shadow-sm hover:bg-blue-300 transition-colors">
        <h3 class="text-lg font-medium">Exercícios</h3>
        <p class="text-sm">Pratique o que aprendeu.</p>
      </div>
      <div @click="handleAction('explanation')"
           class="cursor-pointer p-3 bg-green-200 text-green-800 rounded-md
           shadow-sm hover:bg-green-300 transition-colors">
        <h3 class="text-lg font-medium">Explicação</h3>
        <p class="text-sm">Veja uma explicação detalhada.</p>
      </div>
      <div @click="handleAction('continue')"
           class="cursor-pointer p-3 bg-gray-200 text-gray-800 rounded-md
           shadow-sm hover:bg-gray-300 transition-colors">
        <h3 class="text-lg font-medium">Continuar</h3>
        <p class="text-sm">Prossiga para a próxima seção.</p>
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