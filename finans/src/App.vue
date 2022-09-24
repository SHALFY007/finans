<template>
  <div id="app">
    <div class="container">
      <h1 class="header-text">My personal costs</h1>
      <button class="header-button" @click="openForm">
        <span class="header-button-txt">
          ADD NEW COSTS +
        </span>
      </button>
    </div>
    <AddForm @sendData="setData" v-show="formOpen"></AddForm>
    <List :costs="costs"></List>

  </div>
</template>

<script>

import List from './components/List.vue'
import AddForm from './components/AddForm.vue'

export default {
  name: 'App',
  data() {
    return {
      costs: [],
      formOpen: false,
      description: '',
      amount: '',
      date: ''
    }
  },
  components: {
    List,
    AddForm
  },
  methods: {
    getCosts() {
      return [
        { id: 1, date: '21.09.2022', category: 'food', value: 1582 },
        { id: 2, date: '22.09.2022', category: 'transport', value: 82 },
        { id: 3, date: '22.09.2022', category: 'health', value: 582 },
      ]

    },
    openForm() {
      this.formOpen = !this.formOpen
    },
    setData({ description, amount, date }) {
      this.description = description
      this.amount = amount
      this.date = date
      console.log(this.amount)
    },

  },
  mounted() {
    this.costs = this.getCosts()
  },
}
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  padding-top: 10px;
  box-sizing: border-box;
  max-width: 1920px;
  /*margin-top: 60px;*/
}

.container {
  width: 1440px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
}

.header-text {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-bottom: 10px;
}

.header-button {
  width: 150px;
  height: 36px;
  margin: 0 auto;
  background-color: darkturquoise;
  border-radius: 8px;
  border: 1px solid #fff;

  &-txt {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    color: #fff;
    font-weight: 800;
  }

  &:hover {
    background-color: #fff;
    transition-duration: .5s;
    border-radius: 8px;
    border: 1px solid darkturquoise;

    .header-button-txt {
      color: darkturquoise;
      transition-duration: .5s;
    }
  }


}

/*.header-button-txt {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #fff;
  font-weight: 800;
}*/
</style>
