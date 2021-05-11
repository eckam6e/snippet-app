<template>
  <v-app id="app">
    <Header></Header>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
  import Header from "./components/Header.vue";

  export default {
    components: {
      Header : Header
    },
  }
</script>

<style scoped>
body {
  margin:0;
}
</style>
