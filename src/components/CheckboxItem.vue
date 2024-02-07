<template>
    <div>
    <li>
        <input type="checkbox" :checked="idol.checked" />{{ idol.name }}
    </li>
    </div>
</template>

<script>
    export default {
        name : "CheckboxItem",
        // 객체 자체를 전달하는 방법
        props : ["idol"],
    }
</script>

<style lang="scss" scoped>

</style>