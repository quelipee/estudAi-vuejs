<template>
  <ion-page>   
    <ion-content>
      <div class="container mx-auto px-4 space-y-5">
        <HeaderComponent/>
        <AvatarImgComponent/>
        <AboutComponent/>
        <ActivityComponent/>
        <EditProfileComponent/>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent, HeaderComponent, AvatarImgComponent,
  AboutComponent, ActivityComponent, EditProfileComponent }
  from '@/estudAI/components';
</script>
