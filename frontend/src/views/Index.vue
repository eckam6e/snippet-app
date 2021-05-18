<template>
  <div>
    <v-card style="margin-top:10px" v-for="s in snippets" :key="s.id">
        <v-card-title primary-title>
          <h3 class="headline">{{ s.id }} : {{ s.title }}</h3>
        </v-card-title>
        <div style="margin: 10px 20px;">
          <textarea style='width:100%; height:300px; background-color:#efefef; padding:3px' v-model="s.content"></textarea>
        </div>
        <v-card-actions>
          <router-link :to="{ name: 'ShowSnippet', params: { id: s.id } }">詳細</router-link>
          <button @click="deleteTarget = s.id; showModal = true">削除</button>
        </v-card-actions>
        <modal v-if="showModal" @cancel="showModal = false" @ok="deleteSnippet(); showModal = false;">
          <div slot="body">Are you sure?</div>
        </modal>
      </v-card>
  </div>
</template>

<script>
  import axios from "axios";

  import Modal from '../components/Modal'

  export default {
    components: {
      Modal
    },
    data() {
      return {
        snippets: [],
        showModal: false,
        deleteTarget: -1,
      }
    },
    mounted () {
      this.setSnippets();
    },
    methods: {
      setSnippets: function () {
        axios.get('/api/snippets.json')
        .then(response => (
          this.snippets = response.data
        ))
      },
    deleteSnippet: function() {
      if (this.deleteTarget <= 0) {
        console.warn('deleteTarget should be grater than zero.');
        return;
      }
      axios.delete(`/api/snippets/${this.deleteTarget}`)
        .then(response => {
          this.deleteTarget = -1;
          this.setSnippets();
        })
      },
    }
  }
</script>

<style>
</style>
