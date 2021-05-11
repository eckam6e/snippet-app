<template>
  <SnippetForm :snippet="snippet" @submit="editSnippet"></SnippetForm>
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
    mounted () {
      axios.get(`/api/snippets/${this.$route.params.id}.json`)
        .then(response => (
          this.snippet = response.data
        ))
    },
    methods: {
      editSnippet: function() {
        axios.patch(`/api/snippets/${this.$route.params.id}.json`, this.snippet )
        .then(response => {
          this.$router.push({ name: 'ShowSnippet', params: { id: this.snippet.id } });
        })
      },
    }
  }
</script>

<style>
</style>

