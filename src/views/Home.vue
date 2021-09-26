<template>
  <article-card-list :articles="articles"></article-card-list>
</template>

<script>
import ArticleCardList from '../components/ArticleCardList.vue'
import axios from "axios";
export default {
  components: {
    ArticleCardList
  },
  data() {
    return {
      articles: {},
    };
  },
  created() {
    this.getArticles();
  },
  methods: {
    getArticles() {
      axios
        .get("https://eucalyptus-api.herokuapp.com/articles")
        .then((response) => {
          this.articles = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
