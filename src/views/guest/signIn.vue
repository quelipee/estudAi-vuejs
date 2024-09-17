<template>
  <ion-page>
    <ion-content>
      <div class="container mx-auto px-4 space-y-5">
          <HeaderComponent/>
          <SubTitleComponent/>
          <img src="../../assets/img/1.png" alt="Ilustração" class="w-full h-auto mb-5" />
          <FormComponent/>
          <LabelSignUp/>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { HeaderComponent, SubTitleComponent, FormComponent, LabelSignUp, IonContent, IonPage }
  from "@/estudAI/components";

</script>

<style scoped>

</style>
