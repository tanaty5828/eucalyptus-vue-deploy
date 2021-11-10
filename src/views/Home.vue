<template>
  <v-container>
    <loading-component v-model="is_loading"></loading-component>
    <v-flex offset-xs1 xs10>
      <v-carousel height="auto" cycle>
        <v-carousel-item
          v-for="(carousel_item, i) in carousel_items"
          :key="i"
          :href="carousel_item.link"
          eager
        >
          <v-img :src="carousel_item.src" eager></v-img>
        </v-carousel-item>
      </v-carousel>
    </v-flex>
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
import ArticleCardList from "../components/vue/articles/ArticleCardList.vue";
import LoadingComponent from "../components/vue/common/LoadingComponent.vue";
import ArticlePageNation from "../components/vue/articles/ArticlePageNation.vue";
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
      is_loading: false,
      page: {},
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
        .get(
          "https://eucalyptus-api.herokuapp.com/articles?size=5&&orderby=created_at&&direction=desc"
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
