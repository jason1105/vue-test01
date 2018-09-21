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
    inserted: function (el) {
        console.log("I am dms-input.");
    },
    bind: function (el, binding, vnode, oldVnode) {

    },
    update: function (el, binding, vnode, oldVnode) {

        console.log("el", el);
        console.log("vnode", vnode);
        console.log("oldVnode", oldVnode);

        // 所绑定的组件的value
        console.log("Now value: ", vnode.data.props["value"]);
        // 所绑定的组件的旧的value
        console.log("Old value: ", oldVnode.data.props["value"]);

        // ★重要：组件中的隐藏属性，这个属性中的值是组件需要传递出去的第二个值
        console.log("Now name: ", vnode.componentInstance.specName);

        // 指令本身
        console.log("binding", binding);


        // 取得接收第二值的属性
        console.log("binding.expression", binding.expression);
        console.log("vnode[binding.expression]: ", vnode["context"][binding.expression]);

        //
        console.log("--------------", eval("vnode.context." + binding.expression));

        //
        // vnode["context"][binding.expression] = vnode["componentInstance"]["specName"]
        eval("vnode.context." + binding.expression + "= vnode.componentInstance[\"specName\"]")


    }
})

new Vue({
    render: h => h(App)
}).$mount('#app')
