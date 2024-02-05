<template>
    <div>
        <input type="text" v-model="name">
        <br/>
        입력하신 이름 : <span v-text="name"></span>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name: ""
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>