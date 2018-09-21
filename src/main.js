import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false


Vue.directive('focus', {
    // 当被绑定的元素插入到 DOM 中时……
    inserted: function (el) {
        // 聚焦元素
        el.focus()
    }
})

/**
 * 将input组件中的specName绑定到组件表达式所指示的变量中。
 * 当input组件中的specName发生变化，组件表达式所指示的变量值也会相应变化。
 *
 */
Vue.directive('2nd-bind', {
    update: function (el, binding, vnode, oldVnode) {
        eval("vnode.context." + binding.expression + "= vnode.componentInstance[\"specName\"]")
    }
})

new Vue({
    render: h => h(App)
}).$mount('#app')
