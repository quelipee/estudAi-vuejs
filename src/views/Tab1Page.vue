<template>
  <IonPage>
    <IonContent class="bg-gray-100">

      <!-- Header -->
      <HeaderComponent/>

      <!-- Banner -->
      <BannerComponent/> 

      <!-- Search Bar -->
       <SearchComponent/>

      <!-- Filter Tabs -->
       <Filtercomponent/>

      <!-- Course Cards -->
       <CourseComponent/>

    </IonContent>
  </IonPage>
</template>

<script setup lang="ts">
import { 
  BannerComponent, HeaderComponent, SearchComponent, 
  Filtercomponent, CourseComponent,
  IonContent, IonPage, IonIcon, IonInput
 } from '@/../src/estudAI/components';

</script>
