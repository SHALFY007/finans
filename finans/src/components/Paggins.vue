<template>
    <section class="paggins-list">
        <button v-for="item in count" class="paggins-button" :key="item" @click="countValues">{{item}}</button>
    </section>
</template>

<script>
export default {
    name: 'Paggins',
    data() {
        return {
            countValue: 1
        }
    },
    props: {
        count: Array
    },
    methods: {
        countValues() {
            console.log(event.target.textContent)
            this.countValue = event.target.textContent
            this.$emit('countValues', {
                count: event.target.textContent
            })
            console.log(this.countValue)
        },
        changeData() {

        }
    },

}
</script>

<style lang="less">
.paggins-list {
    display: flex;
    justify-content: center;
}
</style>