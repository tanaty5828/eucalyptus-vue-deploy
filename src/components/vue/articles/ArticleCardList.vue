<template>
  <div>
    <template v-for="article in articles">
      <v-card :key="article.id" class="mx-auto my-12">
        <v-card-title>{{ article.title }}</v-card-title>
        <v-divider class="mx-4"></v-divider>
        <v-card-text>{{
          sliceContent(removeMarkdown(article.content))
        }}</v-card-text>
        <v-btn text color="green darken-4" class="mx-1 mb-2" @click="moveArticlePage(article.id_sha256)" >Read More</v-btn>
      </v-card>
    </template>
  </div>
</template>

<script>
import removeMd from "remove-markdown";

export default {
  props: {
    articles: {
      type: Array,
      required: true,
    },
  },
  methods: {
    sliceContent(content) {
      if (!content) return "";
      if (content.length > 200) {
        console.log(content);
        return content.slice(0, 200) + "...";
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
      document.location.href = "./articles/" + id_sha256;
    }
  },
};
</script>
