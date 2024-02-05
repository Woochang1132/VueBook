<template>
    <div>
        <h2>취미생활</h2>
        <input type="checkbox" id="hobbyA" value="운동" v-model="hobby">
        <label for="hobbyA">운동</label>
        <input type="checkbox" id="hobbyB" value="독서" v-model="hobby">
        <label for="hobbyB">독서</label>
        <input type="checkbox" id="hobbyC" value="음악" v-model="hobby">
        <label for="hobbyC">음악</label>
        <input type="checkbox" id="hobbyD" value="댄스" v-model="hobby">
        <label for="hobbyD">댄스</label>
        <input type="checkbox" id="hobbyE" value="역사" v-model="hobby">
        <label for="hobbyE">역사</label>
    </div>
    <hr/>

    <div>
        <h2>상품 분류 선택</h2>
        <select v-model="category">
            <option value="">상품 분류를 선택하세요</option>
            <option value="레저">레저</option>
            <option value="가전">가전</option>
            <option value="음식">음식</option>
            <option value="도서">도서</option>
            <option value="주방">주방</option>
        </select>
    </div>
    <hr/>

    <div>
        선택한 취미 : {{ hobby.join(',') }} <br>
        선택한 상품 분류 : {{ category }}
    </div>
</template>

<script>
    export default {
        data() {
            return {
                hobby: [],
                category: ""
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>