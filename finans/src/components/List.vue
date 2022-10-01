<template>
    <div class="list">
        <div class="container">
            <div class="categories">
                <div class="categories-header">
                    <h3 v-for="item in categories" class="categories-title">{{item}}</h3>
                </div>
                <hr>
                <div v-for="item in costs" class="categories-item">
                    <h3 class="categories-title">{{item.id}}</h3>
                    <h3 class="categories-title">{{item.date}}</h3>
                    <h3 class="categories-title">{{item.category}}</h3>
                    <h3 class="categories-title">{{item.value}}</h3>
                    <button :id="`button-${item.id}`" @click="$modal.show(`${item.id}`)" class=" categories-button">
                        &#65049;</button>
                    <transition name="fade">
                        <ModalWindow :name="item.id" :id="item.id" class="modal-w" />
                    </transition>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ModalWindow from './ModalWindow.vue';
export default {
    name: "List",
    data() {
        return {
            isOpen: false,
            categories: ["id", "Date", "Category", "Value"]
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