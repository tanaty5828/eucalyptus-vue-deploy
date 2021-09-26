<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <div>{{json_value}}</div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      json_value: {}
    };
  },
  created() {
    axios
      .get('https://eucalyptus-api.herokuapp.com/')
      .then(response => {
        this.json_value = response.data
      })
      .catch(error => {
        console.log(error)
      })
  },
};
</script>
