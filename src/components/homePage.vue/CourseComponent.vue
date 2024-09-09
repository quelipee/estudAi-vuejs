<template>
  <div class="grid grid-cols-2 gap-4">

        <div @click="comprar()" class="flex flex-col items-center text-center">
          <ion-img class="w-52 h-32" title="Python" members="50" src="src/assets/img/3.png"></ion-img>
          <ion-label class="font-semibold text-gray-600 " for="Python">Python</ion-label>
        </div>

        <div class="flex flex-col text-center items-center">
          <ion-img class="w-52 h-32" title="Python" members="50" src="src/assets/img/3.png"></ion-img>
          <ion-label class="font-semibold text-gray-600 " for="Python">Python</ion-label>
        </div>


        <div class="flex flex-col text-center items-center">
          <ion-img class="w-52 h-32" title="Cybersecurity" members="50" src="src/assets/img/5.png" />
          <ion-label class="font-semibold text-gray-600" for="Cybersecurity">Cybersecurity</ion-label>
        </div>

        <div class="flex flex-col  text-center items-center">
          <ion-img class="w-52 h-32" title="DevOps" members="50" src="src/assets/img/6.png" />
          <ion-label class="font-semibold text-gray-600" for="DevOps">DevOps</ion-label>
        </div>

  </div>

</template>
<script setup lang="ts">
  import { IonImg, IonLabel } from "@/estudAI/components";
  import router from "@/router";

  const comprar = () => {
    console.log('eita');
    router.replace({
      path: "/course",
    })
  }
</script>