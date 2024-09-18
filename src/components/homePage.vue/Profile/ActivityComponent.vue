<template>
  <div class="mt-6 bg-white rounded-lg shadow p-4">
    <p class="text-sm text-gray-400 mb-3">Information</p>
    <ion-item lines="none" button>
      <ion-icon :icon="informationCircleOutline" slot="start"></ion-icon>
      <ion-label>About App</ion-label>
    </ion-item>
    <ion-item lines="none" button>
      <ion-icon :icon="documentTextOutline" slot="start"></ion-icon>
      <ion-label>Terms & Conditions</ion-label>
    </ion-item>
    <ion-item lines="none" button>
      <ion-icon :icon="lockClosedOutline" slot="start"></ion-icon>
      <ion-label>Privacy Policy</ion-label>
    </ion-item>
    <ion-item lines="none" button>
      <ion-icon :icon="shareSocialOutline" slot="start"></ion-icon>
      <ion-label @click="signOut()">Logout</ion-label>
    </ion-item>
  </div>
</template>
<script setup lang="ts">
import {
  shareSocialOutline, lockClosedOutline, documentTextOutline,
  informationCircleOutline, IonItem, IonLabel, useCourseStore,
  onMounted, useRouter
}
  from '@/estudAI/components';
import {loadingController} from "@ionic/vue";

  const userSignOut = useCourseStore();
  const router = useRouter()
  const signOut = async () => {
    await userSignOut.userSignOut();
    await showLoading();
    await router.replace('/login');
  };

  const showLoading = async () => {
    const loading = await loadingController.create({
      message: 'Loading...',
      duration: 2000,
    });
    await loading.present();
  };
  onMounted(async () => {
    await userSignOut.fetchUser();
  });
</script>