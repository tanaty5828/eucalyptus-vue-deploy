<template>
  <v-container>
    <v-flex offset-xs3 xs6>
      <template v-for="article in articles">
        <v-card :key="article.id" :loading="loading" class="mx-auto my-12">
          <v-card-title>{{ article.title }}</v-card-title>
          <v-divider dark="true" class="mx-4"></v-divider>
          <v-card-text>{{ article.content | sliceContent }}</v-card-text>
          <v-btn text color="deep-purple accent-4" class="mx-1 mb-2"
            >Read More</v-btn
          >
        </v-card>
      </template>
    </v-flex>
  </v-container>
</template>

<script>
export default {
  props: {
    articles: {
      type: Object,
      default: {},
      required: true,
    },
  },
  filters: {
    sliceContent(content) {
      if (!content) return "";
      if (content.length > 200) {
        return content.slice(0, 200) + "...";
      }
      return content;
    },
  },
};
</script>
