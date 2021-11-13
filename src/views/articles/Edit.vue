<template>
  <v-app>
    <v-container fluid>
      <loading-component v-model="is_loading"></loading-component>
      <h1 class="mt-2">記事の編集</h1>
      <v-row justify="end" align-content="center">
        <v-switch
          v-model="is_preview"
          label="Show Preview"
          color="green darken-4"
          hide-details
        ></v-switch>
      </v-row>
      <v-row>
        <v-col v-if="is_preview" cols="12" sm="6" md="6" lg="6">
          <v-form class="" v-model="form">
            <v-text-field
              :label="article_title.label"
              :rules="[
                article_title.rules.required,
                article_title.rules.max_length,
              ]"
              v-model="article_title.text"
              counter
              maxlength="40"
            ></v-text-field>
            <v-textarea
              filled
              :rules="article_content.rules"
              :label="article_content.label"
              auto-grow
              v-model="article_content.text"
            ></v-textarea>
          </v-form>
        </v-col>
        <v-col v-else cols="12" sm="12" md="12" lg="12">
          <v-form class="" v-model="form">
            <v-text-field
              :label="article_title.label"
              :rules="[
                article_title.rules.required,
                article_title.rules.max_length,
              ]"
              v-model="article_title.text"
              counter
              maxlength="40"
            ></v-text-field>
            <v-textarea
              filled
              :rules="article_content.rules"
              :label="article_content.label"
              auto-grow
              v-model="article_content.text"
            ></v-textarea>
          </v-form>
        </v-col>
        <v-col class="pt-6" cols="12" sm="6" md="6" lg="6">
          <v-card v-if="is_preview">
            <v-card-text v-if="article_content.text">
              <div>記事をmarkdownで表示した際の表示</div>
            </v-card-text>
            <div class="markdown-body ml-3">
              <div v-html="marked_article"></div>
            </div>
          </v-card>
        </v-col>
      </v-row>
      <v-btn
        class="mt-2 white--text"
        :disabled="!form"
        color="green darken-4"
        @click="updateArticle"
        >Submit</v-btn
      >
    </v-container>
  </v-app>
</template>

<script>
import marked from "marked"
import axios from "axios";
import errorRouting from "../../components/js/common/errorRouting";
import LoadingComponent from "../../components/vue/common/LoadingComponent.vue";
export default {
    components: {
    LoadingComponent,
  },
  data() {
    return {
      is_loading: false,
      form: false,
      article_title: {
        label: "Title",
        text: "",
        rules: {
          required: (v) => !!v || "Title is required",
          max_length: (v) => v.length <= 40 || "Max 40 characters",
        },
      },
      article_content: {
        label: "Aritcle",
        text: "",
        rules: [(v) => !!v || "Aritcle is required"],
      },
      is_preview: false,
    };
  },
  created() {
    this.getArticle(this.$route.params.id_sha256);
  },
  computed: {
    marked_article: function () {
      return marked(this.article_content.text);
    },
  },
  methods: {
    getArticle(id_sha256) {
      this.is_loading = true;
      axios
        .get("https://eucalyptus-api.herokuapp.com/articles/" + id_sha256)
        .then((response) => {
          console.log(response)
          this.article_title.text = response.data.title;
          this.article_content.text = response.data.content;
          this.is_loading = false;
        })
        .catch((error) => {
          this.is_loading = false;
          errorRouting.errorRouting(error.response.status, this.$router);
        });
    },
    updateArticle() {
      this.is_loading = true;
      console.log("https://eucalyptus-api.herokuapp.com/articles/" + this.$route.params.id_sha256)
      axios
        .put("https://eucalyptus-api.herokuapp.com/articles/" + this.$route.params.id_sha256, {
          title: this.article_title.text,
          content: this.article_content.text,
        })
        .then(() => {
          this.is_loading = false;
          this.$router.push("/");
        })
        .catch((error) => {
          this.is_loading = false;
          errorRouting.errorRouting(error.response.status, this.$router);
        });
    },
  },
};
</script>

<style>
@import "/styles/markdown.css";
</style>
