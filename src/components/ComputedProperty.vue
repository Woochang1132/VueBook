<template>
    <div>
        1보다 큰 수 : <input type="text" v-model.number="num">
        <br/>
        <br/>
        <br/>
        1부터 입력한 값 까지의 합 : <span>{{ sum }}</span><br/>
        1부터 입력한 값 까지의 합 : <span>{{ sum }}</span><br/>
        1부터 입력한 값 까지의 합 : <span>{{ sum }}</span><br/>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                num: 0
            }
        },
        computed : {
            sum() {
                console.log("## num : " + this.num)
                let n = parseInt(this.num);
                if(Number.isNaN(n)) return 0;
                return (n * (n + 1))/2
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>