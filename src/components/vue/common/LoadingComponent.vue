<template>
  <v-row justify="center">
    <v-dialog v-model="value" max-width="290" persistent overlay-opacity="0.5">
      <v-card class="dialog">
        <v-card-text class="pt-6">
          <v-row justify="center">
            <v-progress-circular
              :size="80"
              color="green darken-4"
              indeterminate
            >
              Loading...
            </v-progress-circular>
          </v-row>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  props: {
    value: Boolean,
  },
  computed: {
    loadingDialog() {
      return this.value;
    },
  },
};
</script>

<style>
@import "/styles/dialog.css";
</style>
