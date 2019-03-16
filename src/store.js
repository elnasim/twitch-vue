import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    'data': null,
    'loading': false,
  },

  mutations: {
    RESET_DATA (state) {
      state.data = null
    },

    GET_DATA (state, payload) {
      state.data = payload.data
    },

    LOADING (state, payload) {
      state.loading = payload
    },
  },

  actions: {

    async getData ({ commit }, payload) {
      commit('LOADING', true)
      commit('RESET_DATA')
      try {
        let config = {
          headers: {
            'Client-ID': 'z97pdq1cei4wqu42l3kkkdnseq06bj',
          },
        }

        let { data } = await axios.get(payload, config)
        commit('GET_DATA', data)
      } catch (e) {
        console.log('-->', e)
      }
      commit('LOADING', false)
    },

  },
})
