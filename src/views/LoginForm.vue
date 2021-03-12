<template>
  <ion-card>
    <ion-card-content>
      <div>LOGIN FORM</div>
      <ion-item>
        <ion-label>Email</ion-label>
        <ion-input type="text" v-model="credentials.email" />
      </ion-item>
      <ion-item>
        <ion-label>Password</ion-label>
        <ion-input
          type="password"
          v-model="credentials.password"
          autocomplete="new-password"
        />
      </ion-item>
      <ion-button @click="handleLogin">LOGIN</ion-button>
      <ion-button @click="handleCreateAccount">CREATE ACCOUNT</ion-button>
    </ion-card-content>
  </ion-card>
</template>

<script lang="ts">
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonItem,
  IonInput
} from "@ionic/vue";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "LoginForm",
  emits: ["login", "createAccount"],
  setup(props, { emit }) {
    const credentials = ref<any>({
      email: "",
      password: ""
    });

    return {
      credentials,
      handleLogin: () => {
        emit("login", { ...credentials.value });
      },
      handleCreateAccount: () => {
        emit("createAccount", { ...credentials.value });
      }
    };
  },
  components: {
    IonButton,
    IonCard,
    IonCardContent,
    IonItem,
    IonInput
  }
});
</script>

<style lang="scss" scoped>
</style>