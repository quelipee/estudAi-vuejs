<template>

  <div class="bg-purple-500 text-white rounded-lg p-4 flex items-center space-x-4">
<!--        <ion-img src="src/assets/img/banner.png" alt="Upgrade to VIP" class="w-24" />-->
        <div>
          <h2 class="text-lg font-bold">Dica de Estudo Diário</h2>
          <p v-if="loading">Carregando frase...</p>
          <p v-else class="text-sm">{{ messageDay.message_day }}</p>
        </div>
      </div>

</template>
<script setup lang="ts">
import {IonImg, onMounted, ref, useCourseStore} from "@/estudAI/components";
  const messageDay = useCourseStore();
  const loading = ref(true);
  onMounted(async () => {
    try {
      await messageDay.motivationalMessage()
    }catch (err){
      console.log(err)
    }finally {
      loading.value = false;
    }
  });
</script>