<template>
  <div class="hvr-underline-from-left">
    <div v-if="button.text == 'Search'">
      <v-dialog v-model="dialog" max-width="600px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn :to="button.link" text v-bind="attrs" v-on="on">
            <span class="mr-2" style="color: #1b5e20">{{ button.text }}</span>
            <v-icon color="green darken-4">{{ button.icon }}</v-icon>
          </v-btn>
        </template>
        <v-card>
          <v-card-title> </v-card-title>
          <v-card-text>
            <v-text-field label="keywords" required v-model="search_keywords"></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-4 white--text" @click=movePage()>
              <v-icon color="white">mdi-magnify</v-icon>
              Search
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
    <div v-else>
      <v-btn :to="button.link" text>
        <span class="mr-2" style="color: #1b5e20">{{ button.text }}</span>
        <v-icon color="green darken-4">{{ button.icon }}</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    search_keywords: "",
  }),
  props: {
    button: {
      type: Object,
      required: true,
    },
  },
  methods: {
    movePage(){
      this.$router.push("/articles?keyword=" + this.search_keywords + "&&page=1").catch(()=>{});
    },
  },
};
</script>

<style>
@import "/styles/hover.css";
</style>
