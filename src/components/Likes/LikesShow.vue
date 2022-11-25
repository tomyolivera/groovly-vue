<template lang="">
    <div v-for="like in likes">
        <like-show :like="like" />
    </div>
</template>

<script setup lang="ts">

    import { $ref } from 'vue/macros';

    const likes = $ref([
                {
                    name: "Solomun",
                    image: "../../assets/img/solomun.jpg",
                    date: {
                        day: "19",
                        month: "SEP"
                    },
                    location: "Los Angeles, USA",
                },
                {
                    name: "Amelie Lens",
                    image: "../../assets/img/amelie-lens.jpg",
                    date: {
                        day: "21",
                        month: "SEP"
                    },
                    location: "Los Angeles, USA",
                },
                {
                    name: "Exit Festival",
                    image: "../../assets/img/exit-festival.jpg",
                    date: {
                        day: "27-29",
                        month: "OCT"
                    },
                    location: "Los Angeles, USA",
                },
            ])

</script>

<style scoped>
    
</style>