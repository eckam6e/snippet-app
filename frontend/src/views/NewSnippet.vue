<template>
  <SnippetForm :snippet="snippet" @submit="createSnippet"></SnippetForm>
</template>


<script>
  import axios from "../../util/axios";
  import SnippetForm from "./SnippetForm.vue";

  export default {
    components: {
      SnippetForm
    },
    data() {
      return {
        snippet: {},
        errors: ""
      }
    },
    methods: {
      createSnippet: function() {
        axios.post('/api/snippets.json', this.snippet )
        .then(response => {
          let e = response.data;
          this.$router.push({ name: 'ShowSnippet', params: { id: e.id } });
        })
      },
    }
  }
</script>

<style>
</style>
