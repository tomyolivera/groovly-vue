<template lang="">
    <v-btn class="containerLike" @click="toggleLike">
        <Icon icon="bi:heart-fill" :color="color" width="13" height="13"/>
    </v-btn>
</template>

<script setup lang="ts">
    import { Icon } from '@iconify/vue';
    import { computed } from 'vue-demi';

    defineProps({
        id: { type: String }
    })

    const isLiked = $ref<{state: boolean}>({state: false})

    const toggleLike = () => {
        isLiked.state = !isLiked.state
    }    

    const color = computed(() => {
        return isLiked.state ? "var(--main-color)" : "#FEFDFF"
    })



</script>

<style scoped>
    .containerLike {
        display: flex;
        width: 24px;
        height: 24px;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        background: #010101;
        opacity: 0.5;
        position: absolute;
        top: 5px;
        right: 5px;
        border: none;
    }
</style>