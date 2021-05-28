<template>
  <ReviewForm :snippet="snippet" @submit="createSnippet"></ReviewForm>
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
  methods: {
    createSnippet: function () {
      axios.post("/api/snippets.json", this.snippet).then((response) => {
        let e = response.data;
        this.$router.push({ name: "ReviewShow", params: { id: e.id } });
      });
    },
  },
};
</script>

<style>
</style>
