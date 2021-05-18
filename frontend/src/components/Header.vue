<template>
  <div>
    <v-toolbar dark>
      <v-toolbar-title><router-link to="/">Snippet APP</router-link></v-toolbar-title>
      <v-spacer></v-spacer>
      <slot></slot>
    </v-toolbar>
  </div>
</template>

<style scoped>
a {
  color:white;
  text-decoration: none;
}

</style>
