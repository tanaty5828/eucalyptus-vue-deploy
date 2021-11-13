<template>
  <div>
    <v-btn
      icon
      color="primary"
      :href="'https://www.facebook.com/sharer/sharer.php?u=' + url"
      target="_blank"
    >
      <v-icon>mdi-facebook</v-icon>
    </v-btn>
    <v-btn
      icon
      color="blue"
      :href="'https://twitter.com/intent/tweet?url=' + url + '&text=' + share_content"
      target="_blank"
    >
      <v-icon>mdi-twitter</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  props: {
    url: String
  },
  data: () => {
    return {
      share_content: '共有記事:',
    };
  },
};
</script>
