<template>
    <div class="window" v-if="isShow">
        <div class="window-hide" @click="$modal.hide(name)">&#10006;</div>
        <div class="window-edit" @click="edit">Редактировать</div>
        <ModalEdit :id='id' v-if="editOpen" />
        <div class="window-delete" @click="del">Удалить</div>
    </div>
</template>

<script>
import ModalEdit from './ModalEdit.vue'
export default {
    name: "ModalWindow",
    data() {
        return {
            isShow: false,
            editOpen: false
        };
    },
    props: {
        name: Number,
        id: Number
    },
    methods: {
        edit() {
            this.editOpen = !this.editOpen
            console.log(this.id);
        },
        del() {
            this.$store.dispatch('deleteCosts', {
                id: this.id
            })
        },
        show(name) {
            console.log(name);
            if (this.name == name) {
                this.isShow = true;
            }
        },
        hide(name) {
            if (this.name == name) {
                this.isShow = false;
            }
        }
    },
    mounted() {
        this.$modal.EventEmitter.$on("show", this.show);
        this.$modal.EventEmitter.$on("hide", this.hide);
    },
    components: { ModalEdit }
}
</script>

<style lang="less">
.window {
    padding-right: 10px;
    right: 10px;
    z-index: 2;
    display: flex;
    flex-direction: column;
    position: absolute;
    background: #fff;
    border: 1px solid black;
    width: 140px;
    height: 70px;

    &-hide {
        position: absolute;
        align-self: flex-end;
        cursor: pointer;
    }

    &-edit {
        cursor: pointer;
        align-self: flex-start;
    }

    &-delete {
        cursor: pointer;
        align-self: flex-start;
    }
}
</style>