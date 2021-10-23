<template>
  <v-container fluid>
    <loading-component v-model="is_loading"></loading-component>
    <v-flex offset-md2 md8 offset-xs1 xs10>
      <article-card-list :articles="articles"></article-card-list>
    </v-flex>
    <v-card
      flat
    >
      <v-card-text>
        <v-row
          align="center"
          justify="center"
        >
          <v-btn-toggle
            tile
            color="green darken-4"
            group
          >
          <v-btn value=1 @click="movePage(1)">
            1
          </v-btn>

          <v-btn value=2 @click="movePage(2)">
            2
          </v-btn>

          <v-btn value=3 @click="movePage(3)">
            3
          </v-btn>

          <v-btn value=4 @click="movePage(4)">
            4
          </v-btn>
          </v-btn-toggle>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import ArticleCardList from "../../components/vue/articles/ArticleCardList.vue";
import LoadingComponent from "../../components/vue/common/LoadingComponent.vue";
import scroll from "../../components/js/common/scroll.js";
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
        .get("https://eucalyptus-api.herokuapp.com/articles?size=5&&orderby=created_at&&direction=desc&&page=" + this.$route.query.page)
        .then((response) => {
          this.articles = response.data;
          this.is_loading = false;
        })
        .catch((error) => {
          console.log(error);
          this.is_loading = false;
        });
    },
    movePage(page){
      this.$router.push("/articles?page=" + page).catch(()=>{});
    },
  },
};
</script>
