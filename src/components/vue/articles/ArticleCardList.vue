<template>
  <div>
    <v-card :key="article.id" class="mx-auto my-12">
      <router-link :to="articlePageLink(article.id_sha256)" class="router-text">
        <v-img
          class="white--text align-end"
          max-height="400px"
          :src="generateRandomPhotoUrl(article.id)"
        >
          <v-card-text class="text-h6">
            <v-icon color="white">mdi-lead-pencil</v-icon>
            {{ article.created_at | moment }}</v-card-text
          >
          <v-card-title class="pb-0 text-h4">{{ article.title }}</v-card-title>
          <br />
        </v-img>
      </router-link>
      <v-divider class="mx-4"></v-divider>
      <v-card-text class="text-h6">{{
        sliceContent(removeMarkdown(article.content))
      }}</v-card-text>
      <v-btn
        text
        color="green darken-4"
        class="mx-1 mb-2"
        @click="moveArticlePage(article.id_sha256)"
        >Read More</v-btn
      >
    </v-card>
  </div>
</template>

<style>
@import "/styles/router-link.css";
</style>

<script>
import removeMd from "remove-markdown";
import moment from "moment";

export default {
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
  methods: {
    sliceContent(content) {
      if (!content) return "";
      if (content.length > 400) {
        return content.slice(0, 400) + "...";
      }
      return content;
    },
    removeMarkdown(markdown) {
      return removeMd(markdown)
        .replace(/\\n/g, "")
        .replace(/\\t/g, "")
        .replace(/#/g, "");
    },
    moveArticlePage(id_sha256) {
      document.location.href = "./articles/show/" + id_sha256;
    },
    articlePageLink(id_sha256) {
      return "./articles/show/" + id_sha256;
    },
    generateRandomPhotoUrl(id) {
      return "https://picsum.photos/1024/768?random=" + id;
    },
  },
  filters: {
    moment: function (date) {
      return moment(date).format("YYYY/MM/DD");
    },
  },
};
</script>
