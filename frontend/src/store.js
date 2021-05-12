import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router'
import axios from '../util/axios'

import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    authData: null
  },
  getters: {
    authData: state => state.authData
  },
  mutations: {
    updateAuthData (state, responseData) {
      state.authData = responseData
    }
  },
  actions: {
    signup ({commit}, authParams) {
      axios.post('/api/auth/sign_up', {
        name: authParams.name,
        email: authParams.email,
        password: authParams.password
      })
        .then(response => {
          commit('updateAuthData', response.headers)
          router.replace('/')
        })
    },
    login ({commit}, authParams) {
      axios.post('/api/auth/sign_in', {
        email: authParams.email,
        password: authParams.password
      })
        .then(response => {
          commit('updateAuthData', response.headers)
          router.replace('/')
        })
    },
    logout ({commit}, authParams) {
      axios.delete('/api/auth/sign_out', {
        headers: authParams
      })
      commit('updateAuthData', null)
      router.replace('/', () => {})
    }
  },
  plugins: [createPersistedState({
    key: 'example',
    storage: window.sessionStorage
  })]
})
