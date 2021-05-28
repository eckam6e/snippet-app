<template>
  <div>
    <dl>
      <dt>ID</dt>
      <dd>{{ snippet.id }}</dd>
      <dt>Title</dt>
      <dd>{{ snippet.title }}</dd>
      <dt>Content</dt>
      <dd>{{ snippet.content }}</dd>
    </dl>
    <router-link :to="{ name: 'ReviewEdit' }">編集</router-link>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      snippet: {},
    };
  },
  mounted() {
    axios
      .get(`/api/snippets/${this.$route.params.id}.json`)
      .then((response) => (this.snippet = response.data));
  },
};
</script>

<style scoped>
</style>
