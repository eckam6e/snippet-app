<template>
  <v-app id="app">
    <Header>
      <template v-if="!isAuthenticated">
        <router-link to="/snippet/new"><v-btn>New Snippet</v-btn></router-link>
        <router-link to="/signup"><v-btn>Sign Up</v-btn></router-link>
        <router-link to="/login"><v-btn>Log In</v-btn></router-link>
      </template>
      <template v-else>
        <span  class="logout" @click="logOut"><v-btn>Log Out</v-btn></span>
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
    name: 'App',
    components: {
      Header : Header
    },
    computed: {
    isAuthenticated () {
      return this.$store.getters.authData !== null
      }
    },
    methods: {
      logOut () {
        this.$store.dispatch('logout', this.$store.getters.authData)
      }
    }
  }
</script>

<style scoped>
body {
  margin:0;
}
</style>
