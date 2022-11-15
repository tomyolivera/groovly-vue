<template lang="">
    <h4 class="text">{{text}}</h4>
</template>

<script lang="tsx">
export default {
    name: 'defaultText',
    props: {
        text: {
            type: String,
            default: 'text'
        }
    }
}
</script>

<style scoped>
.text {
    font-family: 'Comfortaa';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;

    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.1em;
    text-transform: uppercase;

    color: var(--text-color);
}
</style>