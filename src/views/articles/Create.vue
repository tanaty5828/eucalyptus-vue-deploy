<template>
  <v-app>
    <v-container fluid>
      <h1 class = "mt-2">記事の追加</h1>
      <v-row>
        <v-col cols="12" sm="6" md="6" lg="6">
          <v-form class="pa-4 pt-6" v-model="form">
            <v-textarea
              :label="article_title.label"
              auto-grow
              :rules="article_title.rules"
              rows="1"
              row-height="15"
              v-model="article_title.text"
            ></v-textarea>
            <v-textarea
              filled
              :rules="article_content.rules"
              :label="article_content.label"
              auto-grow
              v-model="article_content.text"
            ></v-textarea>
          </v-form>
        </v-col>
        <v-col cols="12" sm="6" md="6" lg="6">
          <v-card>
            <v-card-text v-if="article_content.text">
              <div>記事をmarkdownで表示した際の表示</div>
            </v-card-text>
            <div class="markdown-body ml-3">
              <div v-html="marked_article"></div>
            </div>
          </v-card>
        </v-col>
      </v-row>
      <v-btn class="mt-2" :disabled="!form" color="primary" @click="createArticle">Submit</v-btn>
    </v-container>
  </v-app>
</template>

<script>
import marked from "marked";
import axios from "axios";
export default {
  data() {
    return {
      is_loading: false,
      form:false,
      article_title:{
        label: "Title",
        text:'',
        rules: [v => !!v || "Title is required"]
      },
      article_content:{
        label: "Aritcle",
        text:'',
        rules: [v => !!v || "Aritcle is required"]
      }
    }
  },
  computed: {
    marked_article: function() {
      return marked(this.article_content.text);
    },
  },
  methods: {
    createArticle() {
      this.is_loading = true;
      axios
        .post("https://eucalyptus-api.herokuapp.com/articles", {title: this.article_title.text, content: this.article_content.text})
        .then((response) => {
          this.article = response.data;
          this.is_loading = false;
        })
        .catch((error) => {
          console.log(error);
        });

    }
  }
};
</script>

<style>
@import "/styles/markdown.css";
</style>