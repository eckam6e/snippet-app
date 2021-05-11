<template>
  <div>
    <v-toolbar dark>
      <v-toolbar-title><router-link to="/">Snippet APP</router-link></v-toolbar-title>
      <v-spacer></v-spacer>
      <router-link to="/snippet/new"><v-btn>New Snippet</v-btn></router-link>
      <router-link to="/login"><v-btn>a</v-btn></router-link>
    </v-toolbar>
  </div>
</template>

<style scoped>
a {
  color:white;
  text-decoration: none;
}

</style>
