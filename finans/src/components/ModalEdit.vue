<template>
    <div class="modal-edit">
        <input type="text" class="modal-edit-input" placeholder="Payment description" v-model="description">
        <input type="text" class="modal-edit-input" placeholder="Payment amount" v-model="amount">
        <input type="text" class="modal-edit-input" placeholder="Payment date" v-model="date">
        <br>
        <button class="form-button" @click="admit">Admit</button>
    </div>
</template>

<script>
export default {
    name: 'ModalWindow',
    data() {
        return {
            description: this.$store.getters.getViewCoasts.find(el => el.id == this.id).category,
            amount: this.$store.getters.getViewCoasts.find(el => el.id == this.id).value,
            date: this.$store.getters.getViewCoasts.find(el => el.id == this.id).date
        }
    },
    props: {
        id: Number
    },
    computed: {
        element() {
            return this.$store.getters.getViewCoasts.find(el => el.id == this.id)
        },
        description: {
            get: function () {
                return this.element.category
            },
            set: function () {
                return this.description
            }
        },
        amount() {
            return this.element.value
        },
        date() {
            return this.element.date
        }
    },
    methods: {
        admit() {
            console.log(this.description)
            this.$store.dispatch('editCosts', {
                id: this.id,
                category: this.description,
                value: this.amount,
                date: this.date
            })
        }
    }
}
</script>

<style leng="less">

</style>