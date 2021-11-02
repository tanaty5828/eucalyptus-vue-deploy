<template>
  <v-container fluid>
    <loading-component v-model="is_loading"></loading-component>
    <v-flex offset-md1 md10 offset-xs1 xs10>
      <v-row>
        <template v-for="article in articles">
          <v-col cols="6" :key="article.id">
            <article-card-list
              :article="article"
              :key="article.id"
            ></article-card-list>
          </v-col>
        </template>
      </v-row>
    </v-flex>
    <article-page-nation :page="page" />
  </v-container>
</template>

<script>
import ArticleCardList from "../../components/vue/articles/ArticleCardList.vue";
import ArticlePageNation from "../../components/vue/articles/ArticlePageNation.vue";
import LoadingComponent from "../../components/vue/common/LoadingComponent.vue";

import scroll from "../../components/js/common/scroll.js";
import axios from "axios";
export default {
  components: {
    ArticleCardList,
    ArticlePageNation,
    LoadingComponent,
  },
  data() {
    return {
      articles: [],
      page: {},
      is_loading: false,
    };
  },
  created() {
    this.getArticles();
  },
  beforeRouteUpdate(to, from, next) {
    this.getArticles();
    scroll.scrollTop();
    next();
  },
  methods: {
    getArticles() {
      this.is_loading = true;
      axios
        .get(
          "https://eucalyptus-api.herokuapp.com/articles?size=5&&orderby=created_at&&direction=desc&&page=" +
            this.$route.query.page
        )
        .then((response) => {
          this.articles = response.data.article;
          this.page = response.data.page;
          this.is_loading = false;
        })
        .catch((error) => {
          console.log(error);
          this.is_loading = false;
        });
    },
  },
};
</script>
