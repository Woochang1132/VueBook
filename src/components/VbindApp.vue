<template>
        <div>
            <input id="a" type="text" v-bind:value="message">
            <br/>
    
        </div>
</template>

<script>
    export default {
        data() {
            return {
               message: "v-bind 디렉티브",
        
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>