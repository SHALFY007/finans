import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    costs: [],
    count: 1
  },
  getters: {
    getCostes(state) {
      return state.costs
    },
    getCount(state) {
      return state.count
    }
  },
  mutations: {
    setCostes: (state, payload) => {
      state.costs = payload
      console.log(state.costs)
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
    fetchData({ commit }, count) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({
            page1: [
              { "id": 1, "date": "20.03.2020", "category": "Food", "value": 169 },
              { "id": 2, "date": "21.03.2020", "category": "Navigation", "value": 50 },
              { "id": 3, "date": "22.03.2020", "category": "Sport", "value": 450 }
            ],
            page2: [
              { "id": 4, "date": "23.03.2020", "category": "Entertaiment", "value": 969 },
              { "id": 5, "date": "24.03.2020", "category": "Education", "value": 1500 },
              { "id": 6, "date": "25.03.2020", "category": "Food", "value": 200 }
            ],
          })
        }, 1000)
      })
        .then((result) => {
          console.log(count.count)
          if (count.count == 1) {
            commit('setCostes', result.page1)
          } else if (count.count == 2) {
            commit('setCostes', result.page2)
          }
          console.log()

        })
        .catch(e => console.log(e))

    },
    addNewCost: ({ commit }, values) => {
      let obj = new Object();
      obj.id = 1
      obj.description = values.description
      obj.amount = values.amount
      obj.date = values.date
      commit('setNewCostes', obj)
    }

  },
  modules: {
  },
}
)
/*{
"page1": [
{ "id": 1, "date": "20.03.2020", "category": "Food", "value": 169 },
{ "id": 2, "date": "21.03.2020", "category": "Navigation", "value": 50 },
{ "id": 3, "date": "22.03.2020", "category": "Sport", "value": 450 }
],
"page2": [
{ "id": 4, "date": "23.03.2020", "category": "Entertaiment", "value": 969 },
{ "id": 5, "date": "24.03.2020", "category": "Education", "value": 1500 },
{ "id": 6, "date": "25.03.2020", "category": "Food", "value": 200 }
],
...
}
*/
/*if (count == 1) {
            commit('setCostes', result.page1)
          } else if (count == 2) {
            commit('setCostes', result.page2)
          }*/