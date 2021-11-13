<template>
  <v-dialog v-model="dialog" max-width="400px">
    <v-card>
      <v-card-title> </v-card-title>
      <v-card-text>
        <v-text-field
          label="keywords"
          required
          v-model="search_keywords"
          @keydown.enter="movePage()"
          autofocus
        ></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="green darken-4 white--text" @click="movePage()">
          <v-icon color="white">mdi-magnify</v-icon>
          Search
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data: () => ({
    search_keywords: "",
  }),
  props: {
      isOpenSearchDialog: Boolean,
  },
  methods: {
    movePage() {
      this.$router
        .push("/articles?keyword=" + this.search_keywords + "&&page=1")
        .catch(() => {});
      this.dialog = false;
    },
  },
  computed: {
      dialog : {
          get() {
              return this.isOpenSearchDialog;
          },
          set(newVal) {
              this.$emit('input', newVal)
          }
      }
  }
};
</script>

<style>
@import "/styles/hover.css";
</style>
