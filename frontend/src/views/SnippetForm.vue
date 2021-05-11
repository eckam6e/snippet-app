<template>
  <form @submit.prevent="$emit('submit')">
    <label>タイトル</label>
    <input v-model="snippet.title" type="text" placeholder="Title...">
    <label>本文</label>
    <input v-model="snippet.content" type="text" placeholder="Content...">
    <button type="submit">送信</button>
  </form>
</template>


<script>
export default {
  props: {
      snippet: {}
    }
  }
</script>

<style>
</style>
