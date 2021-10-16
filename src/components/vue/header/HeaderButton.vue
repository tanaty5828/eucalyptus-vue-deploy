<template>
  <div class='hvr-underline-from-left'>
    <v-btn :to="button.link" text>
      <span class="mr-2" style="color: #1b5e20">{{ button.text }}</span>
      <v-icon color="green darken-4">{{ button.icon }}</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  props: {
    button: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
@import "/styles/hover.css";

</style>
