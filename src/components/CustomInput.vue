<template>
    <div class="hello">
        <input v-focus v-bind:value="value" v-on:input="onInputHandler"/>
    </div>
</template>

<script>
    export default {
        name: 'Bind2-Input',
        props: {
            value: ""
        },
        data: function() {
            return {
                specName: ""
            }
        },
        methods: {
            onInputHandler: function(event) {
                this.specName = event.target.value + "-name";
                this.$emit('input', event.target.value);
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
