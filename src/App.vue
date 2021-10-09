<template>
  <v-app>
    <header-component />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import HeaderComponent from "./components/vue/header/Header.vue";
export default {
  name: "App",
  components: {
    HeaderComponent,
  },
};
</script>
