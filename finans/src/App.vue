<template>
  <v-app>
    <v-container>

      <v-col>
        <h1 class="header-text">My personal costs</h1>
      </v-col>
      <v-col>
        <v-btn color="#26C6DA" @click="openForm"><span class="header-button-txt">
            ADD NEW COSTS +
          </span></v-btn>
      </v-col>
      <v-main>
        <div id="app">
          <router-link to="/add/payment/:category" :formOpen="formOpen"></router-link>
          <router-view />
          <AddForm @sendData="setData" @close="close" v-show="formOpen"></AddForm>
          <List :costs="costs"></List>

          <Paggins @countValues="setCountValue" @click="changeData"></Paggins>

        </div>
        <BarChart :category="category"></BarChart>
      </v-main>
    </v-container>

  </v-app>

</template>

<script>
import List from './components/List.vue'
import AddForm from './components/AddForm.vue'
import Paggins from './components/Paggins.vue'
import BarChart from './components/BarChart.vue'
export default {
  name: 'App',
  data() {
    return {
      //counts: [1, 2],
      formOpen: false,
      description: '',
      count: 1,
      amount: '',
      date: '',
      category: [],
      countOfCategory: 0
    }
  },
  components: {
    List,
    AddForm,
    Paggins,
    BarChart
  },
  computed: {
    costs() {
      let a = this.$store.getters.getCostes;
      for (let i of a) {
        this.category.push(i.category)
      }
    }
    /*count() {
      return this.$store.getters.getCostes.length / 3
    }*/
  },
  methods: {
    getCosts() {
      return [
        { id: 1, date: '21.09.2022', category: 'food', value: 1582 },
        { id: 2, date: '22.09.2022', category: 'transport', value: 82 },
        { id: 3, date: '22.09.2022', category: 'health', value: 582 },
      ]
    },
    changeData() {
      this.$store.dispatch('fetchData', {
        count: this.count
      })
    },
    openForm() {
      this.formOpen = !this.formOpen
      //this.$router.push('/add/payment/:category')
    },
    close() {
      this.formOpen = false
    },
    setCountValue({ count }) {
      event.preventDefault()
      //this.$router.push('/add/payment/:category')
      /*this.count = count
      this.$store.dispatch('fetchData', {
        count: count
      })*/
      this.$store.dispatch('AddViewCosts', {
        count: count
      })
    },
    setData({ description, amount, date }) {
      /*this.description = description
      this.amount = amount
      this.date = date
      console.log(this.amount)*/
      this.$store.dispatch('addNewCost', {
        description: description,
        amount: amount,
        date: date
      })
      this.$store.dispatch('AddViewCosts', {
        count: count
      })
    },
  },
  mounted() {
    this.$store.dispatch('fetchData', {
      count: this.count
    })


  },
  update() {
    this.$store.dispatch('addNewCost', {
      description: this.description,
      amount: this.amount,
      date: this.date
    })
  }
  /*update() {
    this.$nextTick(function () {
      // ??????, ?????????????? ?????????? ?????????????? ???????????? ??????????
      // ?????????????????????????? ???????? ??????????????????????????
      this.$store.dispatch('fetchData', {
        count: this.count
      })
    })*/
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
  /*height: 36px;*/
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