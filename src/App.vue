<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        <CustomInput v-2nd-bind="msgName" msg="Welcome to Your Vue.js App"  v-model="msgId"/>
        <h1>I am msgId in msgId: {{ msgId }}</h1>
        <h1>I am msgName in parent: {{ msgName }}</h1>

        <CustomInput v-2nd-bind="msgObj.name" msg="Welcome to Your Vue.js App"  v-model="msgObj.id"/>
        <h1>I am msgId in msgId: {{ msgObj.id }}</h1>
        <h1>I am msgName in parent: {{ msgObj.name }}</h1>
    </div>
</template>

<script>
    import CustomInput from './components/CustomInput.vue'

    export default {
        name: 'app',
        components: {
            CustomInput
        },
        data() {
            return {
                msgId: 1,
                msgName: "no name",
                msgObj: {id: 2, name: ""}
            }
        }
    }

</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
