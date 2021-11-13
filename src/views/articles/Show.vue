<template>
  <v-app>
    <v-container>
      <loading-component v-model="is_loading"></loading-component>
      <h1 class = "mt-2">{{article.title}}</h1>
      <v-card class = "mt-5">
        <v-card-text>
          <div class="markdown-body">
            <div id="content"></div>
          </div>
        </v-card-text>
      </v-card>
      <v-row class = "mt-4 mr-1">
        <v-btn
          color="green darken-4"
          class="white--text ml-auto"
          @click="moveArticleEditPage"
          >編集</v-btn>
      </v-row>
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
      article: {},
    }
  },
  created() {
    this.getArticle(this.$route.params.id_sha256);
  },
  methods: {
    getArticle(id_sha256) {
      this.is_loading = true;
      axios
        .get("https://eucalyptus-api.herokuapp.com/articles/" + id_sha256)
        .then((response) => {
          this.article = response.data;
          this.convertMarkdownToHTML(this.article.content);
          this.is_loading = false;
        })
        .catch((error) => {
          this.is_loading = false;
          errorRouting.errorRouting(error.response.status, this.$router);
        });
    },
    moveArticleEditPage(){
      this.$router.push("/articles/" + this.$route.params.id_sha256+ "/edit");
    },
    convertMarkdownToHTML(markdownText){
      document.querySelector('#content').innerHTML = marked(markdownText);
    }
  },
};
</script>

<style>
@import "/styles/markdown.css";
</style>
