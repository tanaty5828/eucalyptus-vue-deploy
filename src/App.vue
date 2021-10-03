<template>
  <v-app>
    <v-app-bar app color="white" dark flat="true">
      <div class="d-flex align-center">
        <v-img
          alt="Eucalyptus Logo"
          class="shrink mr-2"
          contain
          :src="require('./assets/img/logos/3t.png')"
          transition="scale-transition"
          width="230"
        />
      </div>

      <v-spacer></v-spacer>

      <header-button :button="buttons[0]"></header-button>
      <header-button :button="buttons[1]"></header-button>
      <header-button :button="buttons[2]"></header-button>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import HeaderButton from "./components/HeaderButton.vue";
export default {
  name: "App",
  components: {
    HeaderButton,
  },
  data: () => {
    return {
      buttons: [
        {
          text: "Search",
          icon: "mdi-magnify",
          link: "https://google.com",
        },
        {
          text: "Articles",
          icon: "mdi-book-open-page-variant",
          link: "https://google.com",
        },
        {
          text: "Log-in",
          icon: "mdi-account",
          link: "https://google.com",
        },
      ],
    };
  },
};
</script>
