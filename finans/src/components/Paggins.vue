<template>
    <v-paggination>
        <v-btn v-for="item in counts" :key="item" @click="countValues" color="#26C6DA">
            {{item}}
        </v-btn>
    </v-paggination>

</template>

<script>
export default {
    name: 'Paggins',
    data() {
        return {
            countValue: 1
        }
    },
    methods: {
        countValues() {
            this.$emit('countValues', {
                //count: this.counts
                count: event.target.textContent
            })
            /*console.log(event.target.textContent)
            this.countValue = event.target.textContent
            this.$emit('countValues', {
                count: event.target.textContent
            })
            console.log(this.countValue)
            console.log(this.counts)*/
        },
        changeData() {

        }
    },
    computed: {
        counts() {
            return Math.ceil(this.$store.getters.getCostes.length / 3)
        }
    },
    mounted: {

    }

}
</script>

<style lang="less">
.paggins-list {
    display: flex;
    justify-content: center;
}
</style>