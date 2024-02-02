<template>
    <button @click="show=!show">변경하기</button>
    <transition>
        <p v-if="show">Hello Vue.js!@</p>
    </transition>
</template>

<script>
    export default {
     data() {
        return {
            show: true
        }
     },
    }
</script>

<style lang="scss" scoped>

</style>