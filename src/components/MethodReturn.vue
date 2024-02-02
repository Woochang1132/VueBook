<template>
    <head></head>

    <body>
        <div>
            <div>{{ getMessage() }}</div>
            <div>{{ getNameGreeting() }}</div>
        </div>
    </body>
</template>

<script>
    export default {
        data() {
            return {
                exampleName: 'John'
            }
        },  
        methods: {
            getMessage: () => 'Hello method',
            getNameGreeting: function(){
                return `Hello ${this.exampleName}`
            },
        },
    }
</script>

<style lang="scss" scoped>

</style>