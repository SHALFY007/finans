<template>
    <v-container>
        <v-row>
            <v-col v-for="item in categories" class="categories-title">{{item}}</v-col>
            <v-col v-for="item in costs">
                <v-card style="display:flex; justify-content: space-between; width: 1440px;">
                    <v-card-title>{{item.id}}</v-card-title>
                    <v-card-title>{{item.date}}</v-card-title>
                    <v-card-title>{{item.category}}</v-card-title>
                    <v-card-title>{{item.value}}</v-card-title>
                    <v-card-actions :id="`button-${item.id}`" @click="$modal.show(`${item.id}`)">
                        <v-btn>&#65049;</v-btn>
                    </v-card-actions>
                    <transition name="fade">
                        <ModalWindow :name="item.id" :id="item.id" class="modal-w" />
                    </transition>
                </v-card>
            </v-col>
        </v-row>

    </v-container>


</template>

<script>
import ModalWindow from './ModalWindow.vue';
export default {
    name: "List",
    data() {
        return {
            isOpen: false,
            categories: ["id", "Date", "Category", "Value", "Edit"]
        };
    },
    computed: {
        costs() {
            return this.$store.getters.getViewCoasts;
        }
    },
    props: {
        costs: Array
    },
    methods: {
        /*openWindow() {
            let a = event.target.getAttribute('id')
            let b = document.querySelector(`#modal-${a}`)
            b.classList.toggle('open')
        }*/
        modalOpen() {
            this.$modal.show()
        },
        modalClose() {
            this.$modal.hide()
        }
    },
    components: { ModalWindow }
}
</script>

<style lang="less">
.list {
    width: 100%;
    max-width: 1920px;
}

.categories {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
}

.categories-header {
    display: flex;
    justify-content: space-between;
}

.categories-line {
    height: 1px;
    width: 100%;
    color: #444;
}

.categories-item {
    margin-top: 15px;
    .categories-header();
    position: relative;
}

#no-background-hover::before {
    background-color: transparent !important;
}

.categories-button {
    margin-left: -390px;
    background: transparent;
    border: none;
    cursor: pointer;
}

.modal-w {}

.fade-enter-active,
.fade-leave-active {
    transition: opacity .5s;
}

.fade-enter,
.fade-leave-to // .fade-leave-active до версии 2.1.8 

    {
    opacity: 0;
}
</style>