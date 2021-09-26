<template>
  <div>
    <template v-for="article in articles">
      <v-card :key="article.id" class="mx-auto my-12">
        <v-card-title>{{ article.title }}</v-card-title>
        <v-divider class="mx-4"></v-divider>
        <!-- <v-divider :dark=true class="mx-4"></v-divider> -->
        <!-- <v-card-text>
          <div v-html="markedContent(article.content)"></div>
        </v-card-text> -->
        <v-btn text color="deep-purple accent-4" class="mx-1 mb-2"
          >Read More</v-btn
        >
      </v-card>
    </template>
  </div>
</template>

<script>
import marked from "marked";
export default {
  props: {
    articles: {
      type: Array,
      required: true,
    },
  },
  methods: {
      markedContent(markdown){
          return marked(markdown)
      },
        sliceContent(content) {
        if (!content) return "";
        if (content.length > 200) {
            console.log(content);
            return content.slice(0, 200) + "...";
        }
        return content;
        },
  }
};
</script>
