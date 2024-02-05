<template>
    <div>
        <input type="text" v-model="balance">
        <br>
        회원님의 등급 : 
        <span v-if="balance >= 1000000">Gold</span>
        <span v-else-if="balance >= 50000">Gold</span>
        <span v-else-if="balance >= 20000">Bronze</span>
        <span else>Basic</span>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                balance: 0
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>