<template>
  <div>
    <ion-item>
      <ion-input placeholder="E-mail / Número de telefone / Nome de usuário" type="text"></ion-input>
    </ion-item>
    <ion-item>
      <ion-input placeholder="Senha" type="password"></ion-input>
      <ion-icon slot="end" :icon="eyeOffOutline"></ion-icon>
    </ion-item>

    <ion-item lines="none">
      <ion-checkbox slot="start"></ion-checkbox>
      <ion-label>Lembre de mim</ion-label>
      <ion-label slot="end"><p class="text-[#6f3ed5] text-xs">Esqueceu sua senha?</p></ion-label>
    </ion-item>
  </div>
</template>
<script setup lang="ts">
import { IonItem, IonLabel, IonInput, IonIcon, IonCheckbox } from '@/estudAI/components';
import { eyeOffOutline } from 'ionicons/icons';
</script>