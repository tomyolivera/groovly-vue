<template lang="">
    <form>

    </form>
</template>

<script lang="ts">
export default {
    name: 'Form',
    props: {
        fields: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped>
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>