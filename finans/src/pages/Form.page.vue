<template>
    <!--<div class="form">
        <form action="#">
            <input type="text" class="form-input" placeholder="Payment description" v-model="description">
            <input type="text" class="form-input" placeholder="Payment amount" v-model="amount">
            <input type="text" class="form-input" placeholder="Payment date" v-model="date">
            <br>
            <button class="form-button" @click="sendData">ADD +</button>
        </form>
    </div>-->
    <Form @sendData="setData" @close="setClose" v-show="formOpen"></Form>
</template>

<script>
import Form from '../components/AddForm.vue'
export default {
    name: 'FromPage',
    data() {
        return {
            description: '',
            amount: '',
            date: '',
            formOpen: true,

        }
    },
    components: {
        Form
    },
    methods: {
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

        },
        setClose({ formOpen }) {
            this.formOpen = formOpen
        }
    },
    computed: {

    },
    mounted() {
        console.log(this.formOpen)
        this.description = this.$route.params.category
        this.amount = this.$route.query.value
        this.date = `${new Date().getDate()}.${new Date().getMonth()}.${new Date().getFullYear()}`
    }
}
</script>

<style lang="less">
.form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 500px;
    left: 36%;
    background-color: #fff;
    height: 300px;
    position: absolute;
    border: 1px solid darkturquoise;
    padding-top: 20px;
    border-radius: 10px;
}

.form-input {
    width: 80%;
    height: 30px;
    margin-bottom: 20px;
}

.form-button {
    width: 100px;
    height: 36px;
    margin: 0 auto;
    background-color: darkturquoise;
    border-radius: 8px;
    border: 1px solid #fff;
    color: #fff;

    &:hover {
        transition-duration: .5s;
        background-color: #fff;
        color: darkturquoise;
        border: 1px solid darkturquoise;
    }
}
</style>