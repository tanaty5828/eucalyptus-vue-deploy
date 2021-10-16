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
    </v-container>
  </v-app>
</template>

<script>
import marked from "marked"
import axios from "axios";
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
          console.log(error);
          this.is_loading = false;
        });
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
