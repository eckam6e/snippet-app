<template>
  <v-app id="app">
    <Header>
      <template v-if="!isAuthenticated">
        <router-link to="/signup"><v-btn>新規登録</v-btn></router-link>
        <router-link to="/login"><v-btn>ログイン</v-btn></router-link>
      </template>
      <template v-else>
        <router-link to="/review/new"><v-btn>投稿</v-btn></router-link>
        <span class="logout" @click="logOut"><v-btn>ログアウト</v-btn></span>
      </template>
    </Header>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Header: Header,
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters.authData !== null;
    },
  },
  methods: {
    logOut() {
      this.$store.dispatch("logout", this.$store.getters.authData);
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  text-decoration: none;
}
</style>
