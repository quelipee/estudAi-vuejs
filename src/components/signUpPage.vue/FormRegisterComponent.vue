<template>
    <div class="bg-white rounded-lg shadow-md">
      <form class="space-y-4">

        <div class="flex space-x-2">
          <ion-item class="w-1/2">
            <ion-input placeholder="First Name" type="text"></ion-input>
          </ion-item>
          <ion-item class="w-1/2">
            <ion-input placeholder="Last Name" type="text"></ion-input>
          </ion-item>
        </div>

        <!-- E-mail -->
        <ion-item>
          <ion-input placeholder="E-mail Address" type="email"></ion-input>
        </ion-item>

        <!-- Telefone -->
        <div class="flex space-x-2">
          <ion-item class="w-1/4">
            <ion-select placeholder="+1" interface="popover">
              <ion-select-option value="+1">+1</ion-select-option>
              <!-- Adicione mais opções de código de país -->
            </ion-select>
          </ion-item>

          <ion-item class="w-3/4">
            <ion-input placeholder="Phone Number" type="tel"></ion-input>
          </ion-item>
        </div>

        <!-- Senha e Confirmação -->
        <ion-item>
          <ion-input placeholder="Create your Password" type="password"></ion-input>
        </ion-item>
        <ion-item>
          <ion-input placeholder="Confirm Password" type="password"></ion-input>
        </ion-item>

        <!-- Termos e Condições -->
        <div class="flex items-center p-7">
          <ion-checkbox class="mr-2" id="terms"></ion-checkbox>
          <label for="terms" class="text-gray-500">
            I agree to the
            <a href="#" class="text-indigo-500">Terms and Conditions</a>
          </label>
        </div>

        <!-- Botão de Registro -->
        <ion-button expand="block" color="primary">
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
import { IonInput, IonItem, IonCheckbox, IonButton,
  IonSelect, IonSelectOption } from "@/estudAI/components";
</script>

