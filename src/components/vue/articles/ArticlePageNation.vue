<template>
  <v-card flat>
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
        <v-btn v-for="n of page.total_pages" @click="movePage(n)" :key="n">
          {{ n }}
        </v-btn>
        </v-btn-toggle>
      </v-row>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
    props: {
    page: {
      type: Object,
      required: true,
    },
  },
  methods: {
    movePage(page){
      const keyword = ( this.$route.query.keyword === undefined ? "" : this.$route.query.keyword)
      this.$router.push("/articles?page=" + page + "&&keyword=" + keyword).catch(()=>{});
    },
  },
};
</script>
