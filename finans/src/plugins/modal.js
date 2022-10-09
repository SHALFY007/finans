export default {
    install(Vue) {
        if (this.installed) {
            return
        }
        this.installed = true

        Vue.prototype.$modal = {

            EventEmitter: new Vue,
            show(name) {
                console.log('asd')
                this.EventEmitter.$emit('show', name)
            },
            hide(name) {
                this.EventEmitter.$emit('hide', name)
            },

            edit(name) {
                this.EventEmitter.$emit('edit', name)
            },
            delete(name) {
                this.EventEmitter.$emit('delete', name)
            }
        }
    }
}