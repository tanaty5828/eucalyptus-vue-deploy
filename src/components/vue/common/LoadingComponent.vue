<template>
  <v-row justify="center">
    <v-dialog
      v-model="loadingDialog"
      max-width="290"
      persistent
    >
      <v-card>
        <v-card-text class="pt-3">
          ロード中
          <v-progress-linear
            indeterminate
            class="mb-0"
          ></v-progress-linear>
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
        return this.value
      }
    },
  }
</script>
