<template>
    <ul>
        <li v-for="person in people" :key="person.id">
            <div>{{ person.firstName }} {{ person.lastName }} - {{ person.dob }}</div>
        </li>
    </ul>
</template>

<script>
    export default {
        data() {
            return {
                people: [
                    {
                        id: 1,
                        firstName: "John",
                        lastName : "Doe",
                        dob : "01-01-1980"
                    },

                    {
                        id: 2,
                        firstName: "Johny",
                        lastName : "Doe",
                        dob : "01-01-1999"
                    },

                    {
                        id: 3,
                        firstName: "kate",
                        lastName : "kim",
                        dob : "01-01-2000"
                    },
                ]
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>