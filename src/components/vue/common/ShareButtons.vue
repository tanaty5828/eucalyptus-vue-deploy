<template>
  <div>
    <v-btn
      icon
      :href="'https://social-plugins.line.me/lineit/share?url=' + url + '&text=' + share_content"
      target="_blank"
    >
      <v-icon>icon-line</v-icon>
    </v-btn>
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
      share_content: 'Share Article:',
    };
  },
};
</script>

<style>
@import '../../../assets/icomoon/style.css';
</style>
