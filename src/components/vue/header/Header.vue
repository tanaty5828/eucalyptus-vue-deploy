<template>
  <div>
    <v-app-bar app color="white" dark :flat="true">
      <div class="d-flex align-center">
        <router-link to="/">
          <v-img
            alt="Eucalyptus Logo"
            class="shrink mr-2"
            contain
            :src="require('../../../assets/img/logos/3t.png')"
            transition="scale-transition"
            width="230"
          />
        </router-link>
      </div>

      <v-spacer></v-spacer>

      <div class="hidden-sm-and-down">
        <header-button :button="buttons[0]"></header-button>
        <header-button :button="buttons[1]"></header-button>
        <header-button :button="buttons[2]"></header-button>
      </div>
      <div class="hidden-md-and-up">
        <v-menu bottom left>
          <template v-slot:activator="{ on, attrs }">
            <v-btn dark icon v-bind="attrs" v-on="on">
              <v-icon color="green darken-4">mdi-dots-vertical</v-icon>
            </v-btn>
          </template>

          <v-list>
            <template v-for="(button, i) in buttons">
              <div v-if="button.text == 'Search'" :key="i">
                <v-list-item
                  :key="i"
                  color="green darken-4"
                  @click="openSearchDialog()"
                >
                  <v-icon color="green darken-4">{{ button.icon }}</v-icon>
                  <v-list-item-title> {{ button.text }}</v-list-item-title>
                </v-list-item>
              </div>
              <div v-else :key="i">
                <v-list-item
                  :to="button.link"
                  :key="i"
                  color="green darken-4"
                >
                  <v-icon color="green darken-4">{{ button.icon }}</v-icon>
                  <v-list-item-title> {{ button.text }}</v-list-item-title>
                </v-list-item>
              </div>
            </template>
          </v-list>
        </v-menu>
      </div>
    </v-app-bar>
    <search-dialog ref="childOpenSearchDialog"></search-dialog>
  </div>
</template>

<script>
import HeaderButton from "./HeaderButton.vue";
import SearchDialog from "./SearchDialog.vue";
export default {
  name: "App",
  components: {
    HeaderButton,
    SearchDialog,
  },
  data: () => {
    return {
      isOpenSearchDialog: false,
      buttons: [
        {
          text: "Search",
          icon: "mdi-magnify",
          link: "",
        },
        {
          text: "Create Article",
          icon: "mdi-book-open-page-variant",
          link: "/articles/create",
        },
        {
          text: "Log-in",
          icon: "mdi-account",
          link: "",
        },
      ],
    };
  },
  methods: {
    openSearchDialog() {
      this.$refs.childOpenSearchDialog.openSearchDialog()
    },
  },
};
</script>
