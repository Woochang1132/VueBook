<template>
    <head></head>
    
    <div>
        <a v-bind:href="linkValue">Google</a>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                linkValue: 'https://www.google.com'
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>