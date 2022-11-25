<template lang="">
    <form>

    </form>
</template>

<script setup lang="ts">

    import { defineProps } from 'vue-demi'

    defineProps({
        placeholder: {
            type: String,
            required: true
        }
    })
</script>

<style scoped>
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>