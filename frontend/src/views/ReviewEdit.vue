<template>
  <ReviewForm :snippet="snippet" @submit="editSnippet"></ReviewForm>
</template>


<script>
import axios from "../../util/axios";
import ReviewForm from "./ReviewForm.vue";

export default {
  components: {
    ReviewForm,
  },
  data() {
    return {
      snippet: {},
      errors: "",
    };
  },
  mounted() {
    axios
      .get(`/api/snippets/${this.$route.params.id}.json`)
      .then((response) => (this.snippet = response.data));
  },
  methods: {
    editSnippet: function () {
      axios
        .patch(`/api/snippets/${this.$route.params.id}.json`, this.snippet)
        .then((response) => {
          this.$router.push({
            name: "ReviewShow",
            params: { id: this.snippet.id },
          });
        });
    },
  },
};
</script>

<style>
</style>

