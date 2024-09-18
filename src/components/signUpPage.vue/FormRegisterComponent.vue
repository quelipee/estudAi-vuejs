<template>
    <div class="bg-white rounded-lg shadow-md">
      <form class="space-y-4" @submit.prevent="submitForm" method="post">

        <div class="flex space-x-2">
          <ion-item class="w-1/2">
            <ion-input placeholder="First Name" name="user.name"
                       v-model="user.name" type="text" required></ion-input>
          </ion-item>
          <ion-item class="w-1/2">
            <ion-input placeholder="Last Name" name="user.surname" type="text" required></ion-input>
          </ion-item>
        </div>

        <!-- E-mail -->
        <ion-item>
          <ion-input placeholder="E-mail Address" name="email"
                     v-model="user.email" type="email" required></ion-input>
        </ion-item>

        <!-- Senha e Confirmação -->
        <ion-item>
          <ion-input placeholder="Create your Password" name="user.password"
                     v-model="user.password"
                     type="password"
                     required></ion-input>
        </ion-item>
        <ion-item>
          <ion-input placeholder="Confirm Password" name="user.confirmPassword"
                     v-model="user.confirmPassword"
                     type="password"
                     required></ion-input>
        </ion-item>

        <ion-item lines="none">
          <ion-text color="danger" class="text-center w-full" v-if="passwordMismatch">
            <p class="text-sm">As senhas não coincidem.</p>
          </ion-text>
        </ion-item>

        <!-- Termos e Condições -->
        <div class="flex items-center p-7">
          <ion-checkbox v-model="acceptedTerms" class="mr-2" id="terms"></ion-checkbox>
          <label for="terms" class="text-gray-500">
            I agree to the
            <a href="#" class="text-indigo-500">Terms and Conditions</a>
          </label>
        </div>

        <!-- Botão de Registro -->
        <ion-button type="submit" :disabled="!canSubmit" expand="block" color="tertiary">
          Sign Up
        </ion-button>
      </form>

      <!-- Link para Sign In -->
      <div class="text-center p-4">
        <a href="#" class="text-indigo-500">Back to Sign In</a>
      </div>
    </div>
</template>

<script setup lang="ts">
import {
  IonInput, IonItem, IonCheckbox,
  IonButton, ref, computed, IonText,
  signInUserAuthenticated, useRouter,
} from "@/estudAI/components";
import {User} from "@/types/types";
import {signUpUserAuthenticated} from "@/api/api";

const router = useRouter();
const user = ref<User>({
  name : '',
  email: '',
  password: '',
  confirmPassword: ''
});
const acceptedTerms = ref(false);

const passwordMismatch = computed(() =>
    user.value.password !== user.value.confirmPassword);

const canSubmit = computed(() =>
    user.value.password && user.value.confirmPassword &&
    !passwordMismatch.value && acceptedTerms.value);

const submitForm = async () => {
  try {
    await signUpUserAuthenticated(user.value);
    await signInUserAuthenticated(user.value.email,user.value.password);
    await router.push('/');
  }catch (err){
    console.log(err);
  }
}
</script>

