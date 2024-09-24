<template>
  <div>
    <form @submit.prevent="submitForm" method="post">
    <ion-item>
      <ion-input
          placeholder="E-mail / Número de telefone / Nome de usuário"
          name="user.email"
          v-model="user.email"
          type="text"></ion-input>
    </ion-item>
    <ion-item>
      <ion-input
          placeholder="Senha"
          name="user.password"
          v-model="user.password"
          type="password"></ion-input>
      <ion-icon slot="end" :icon="eyeOffOutline"></ion-icon>
    </ion-item>

    <ion-item lines="none" v-if="errorLogin">
      <p class="text-sm text-center w-full text-red-500 font-semibold">{{ errorLogin }}</p>
    </ion-item>

    <ion-item lines="none">
      <ion-checkbox slot="start"></ion-checkbox>
      <ion-label>Lembre de mim</ion-label>
      <ion-label slot="end"><p class="text-[#6f3ed5] text-xs">Esqueceu sua senha?</p></ion-label>
    </ion-item>
    <SignInButton/>
    </form>
  </div>
</template>
<script setup lang="ts">
import {
  IonItem, IonLabel, IonInput, IonIcon, IonCheckbox, ref,
  SignInButton, signInUserAuthenticated, useRouter, useCourseStore
}
  from '@/estudAI/components';
import { eyeOffOutline } from 'ionicons/icons';
import {User} from "@/types/types";

const auth = useCourseStore();
const route = useRouter();
const errorLogin = ref(null);
const clearError = () =>{
  errorLogin.value = null;
};
const user = ref<User>({
  name: "",
  email: '',
  password: ''
});

const submitForm = async () => {
    await signInUserAuthenticated(user.value.email,user.value.password).then(() => {
      auth.fetchUser();
      route.replace('/');
    }).catch(error => {
      errorLogin.value = error.response.data.message
      setTimeout(() => {
        clearError();
      },5000);
    });
};
</script>