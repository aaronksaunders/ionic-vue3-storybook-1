<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Blank</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" class="ion-padding">
      <login-form @createAccount="doCreateAccount" @login="doLogin" />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from "@ionic/vue";
import { defineComponent } from "vue";
import LoginForm from "./LoginForm.vue";

export default defineComponent({
  name: "Home",
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    LoginForm
  },
  setup() {
    return {
      doLogin: (params: any) => {
        console.log("doLogin", params);
      },
      doCreateAccount: (params: any) => {
        console.log("doCreateAccount", params);
      }
    };
  }
});
</script>

<style scoped>
</style>