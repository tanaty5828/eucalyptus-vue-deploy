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
</template>
<script>
export default {
  methods: {
    movePage(page){
      this.$router.push("/articles?page=" + page).catch(()=>{});
    },
  },
};
</script>