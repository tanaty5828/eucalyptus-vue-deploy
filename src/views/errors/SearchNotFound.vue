<template>
  <v-container>
    <v-card
      class="mx-auto my-10"
    >
      <v-img
        class="align-end bold red--text"
        height="600px"
        :src="require('../../assets/img/errors/search_not_found.png')"
      >
        <v-card-title class="text-h1">Article Not Found</v-card-title>
      </v-img>

      <v-card-text class="text--primary">
        <div class="text-h5">Please Search agein !!!</div>
      </v-card-text>

      <v-card-actions>
        <router-link to="/" class="router-text">
          <v-btn
            color="orange"
            text
          >
            Home
          </v-btn>
        </router-link>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<style>
@import "/styles/router-link.css";
</style>
