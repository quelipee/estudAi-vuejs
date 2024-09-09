<template>
  <ion-page>
    <ion-content>
      <div class="container mx-auto px-4 space-y-5">
        <HeaderComponent/>
        <SubTitleSignUpComponent/>
        <FormRegisterComponent/>
      </div>
    </ion-content>
  </ion-page>
</template>
<script setup lang="ts">
import { IonPage,IonContent, HeaderComponent, FormRegisterComponent } from "@/estudAI/components";
import SubTitleSignUpComponent from "@/components/signUpPage.vue/SubTitleSignUpComponent.vue";
</script>