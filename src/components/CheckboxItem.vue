<template>
    <div>
    <li>
        <input type="checkbox" :checked="checked" />{{ name }}
    </li>
    </div>
</template>

<script>
    export default {
        name : "CheckboxItem",
        props : ["name" , "checked"],
    }
</script>

<style lang="scss" scoped>

</style>