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

      <v-btn href="https://google.com/" target="_blank" text>
        <span class="mr-2" style="color: #1b5e20">Search</span>
        <!-- color equals green darken-4 -->
        <v-icon color="green darken-4">mdi-magnify</v-icon>
      </v-btn>
      <v-btn href="https://google.com/" target="_blank" text>
        <span class="mr-2" style="color: #1b5e20">Articles</span>
        <!-- color equals green darken-4 -->
        <v-icon color="green darken-4">mdi-book-open-page-variant</v-icon>
      </v-btn>
      <v-btn href="https://google.com/" target="_blank" text>
        <span class="mr-2" style="color: #1b5e20">Log-in</span>
        <!-- color equals green darken-4 -->
        <v-icon color="green darken-4">mdi-account</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
