<template>
  <v-container>
    <loading-component v-model="is_loading"></loading-component>
    <v-flex offset-xs1 xs10>
      <v-carousel height="auto">
        <v-carousel-item
          v-for="(carousel_item, i) in carousel_items"
          :key="i"
          :src="carousel_item.src"
          :href="carousel_item.link"
        >
        </v-carousel-item>
      </v-carousel>
    </v-flex>
    <v-flex offset-xs3 xs6>
      <article-card-list :articles="articles"></article-card-list>
    </v-flex>
  </v-container>
</template>

<script>
import ArticleCardList from "../components/vue/articles/ArticleCardList.vue";
import LoadingComponent from "../components/vue/common/LoadingComponent.vue";
import axios from "axios";
export default {
  components: {
    ArticleCardList,
    LoadingComponent,
  },
  data() {
    return {
      articles: [],
      is_loading: false,
      carousel_items: [
        {
          src: require("../assets/img/banners/1.png"),
          link: "https://google.com",
        },
        {
          src: require("../assets/img/banners/2.png"),
          link: "https://google.com",
        },
        {
          src: require("../assets/img/banners/3.png"),
          link: "https://google.com",
        },
      ],
    };
  },
  created() {
    this.getArticles();
  },
  methods: {
    getArticles() {
      this.is_loading = true;
      axios
        .get("https://eucalyptus-api.herokuapp.com/articles")
        .then((response) => {
          this.articles = response.data;
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
