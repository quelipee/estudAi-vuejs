
<template>
  <IonPage>
    <IonContent>
      <div class="container mx-auto px-4 space-y-5">
        <HeaderComponent/>
        <BannerComponent/>
        <SearchComponent/>
        <FilterComponent/>
        <CourseComponent/>
      </div>
    </IonContent>
  </IonPage>
</template>

<script setup lang="ts">
import { BannerComponent, HeaderComponent, SearchComponent, FilterComponent,
  CourseComponent,
  IonContent, IonPage,
 } from '@/../src/estudAI/components';
import {onMounted} from "vue";

onMounted(() => {
  console.log("Página montada");
  // Aqui você pode disparar qualquer ação necessária para garantir que
  // os componentes sejam carregados corretamente
});
</script>
