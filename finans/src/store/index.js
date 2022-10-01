import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    costs: [],
    viewCosts: [],
    count: 1
  },
  getters: {
    getCostes(state) {
      return state.costs
    },
    getCount(state) {
      return state.count
    },
    getViewCoasts(state) {
      return state.viewCosts
    }
  },
  mutations: {
    setCostes: (state, payload) => {
      state.costs = payload
      console.log(state.costs)
    },
    setViewCoasts: (state, payload) => {
      state.viewCosts = payload
      console.log(state.viewCosts)
    },
    setCount: (state, payload) => {
      state.count = payload
    },
    /*setNewCostes: (state, payload) => {
      state.costs.push(payload)
      console.log({description,amount, date})
    }**/
    setNewCostes: (state, payload) => {
      state.costs.push(payload)
      console.log(payload)
      //console.log({ description, amount, date })

    },
  },
  actions: {
    loadCosts: ({ commit }) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([
            { id: 1, date: '21.09.2022', category: 'food', value: 1582 },
            { id: 2, date: '22.09.2022', category: 'transport', value: 82 },
            { id: 3, date: '22.09.2022', category: 'health', value: 582 },
          ])
        }, 1000)
      })
        .then((result) => commit('setCostes', result))
    },
    fetchData({ commit, state }, count) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {

          resolve([

            { "id": 1, "date": "20.03.2020", "category": "Food", "value": 169 },
            { "id": 2, "date": "21.03.2020", "category": "Navigation", "value": 50 },
            { "id": 3, "date": "22.03.2020", "category": "Sport", "value": 450 },

            { "id": 4, "date": "23.03.2020", "category": "Entertaiment", "value": 969 },
            { "id": 5, "date": "24.03.2020", "category": "Education", "value": 1500 },
            { "id": 6, "date": "25.03.2020", "category": "Food", "value": 200 }

          ])
        }, 1000)
      })
        .then((result) => {
          let paggins = result.length / 3
          commit('setCostes', result)
          commit('setViewCoasts', state.costs.filter(a => a.id <= 3))



        })
        .catch(e => console.log(e))

    },

    addNewCost: ({ commit, state }, values) => {
      let obj = new Object();
      obj.id = state.costs.length + 1
      obj.category = values.description
      obj.date = values.date
      obj.value = values.amount

      commit('setNewCostes', obj)

    },
    AddViewCosts: ({ commit, state }, values) => {
      if (values.count == 1) {
        commit('setViewCoasts', state.costs.filter(a => a.id <= 3))
      } else if (values.count == 2) {
        commit('setViewCoasts', state.costs.filter(a => a.id >= 4 && a.id <= 6))
      } else if (values.count == 3) {
        commit('setViewCoasts', state.costs.filter(a => a.id >= 7 && a.id <= 9))
      } else if (values.count == 4) {
        commit('setViewCoasts', state.costs.filter(a => a.id >= 10 && a.id <= 12))
      }
      console.log(state.costs)
    },
    deleteCosts: ({ commit, state }, value) => {
      let el = state.viewCosts.findIndex(el => el.id == value.id)
      console.log(el)
      let f = state.viewCosts.splice(el, 1)
      commit('setViewCoasts', state.viewCosts)
    },
    editCosts: ({ commit, state }, value) => {
      let el = state.viewCosts.findIndex(el => el.id == value.id)
      state.viewCosts[el].date = value.date
      state.viewCosts[el].category = value.category
      state.viewCosts[el].value = value.value
      commit('setViewCoasts', state.viewCosts)
    }

  },
  modules: {
  },
}
)