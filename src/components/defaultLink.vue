<template lang="">

    <router-link :to="to" ><p class="link">{{text}}</p></router-link >
</template>

<script setup lang="ts">

    defineProps({
        text: {
            type: String,
            required: true
        },
        to: {
            type: String,
            required: true
        }
    })
</script>

<style scoped>
.link {
    font-family: 'Comfortaa';
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 200%;
/* identical to box height, or 22px */

display: flex;
align-items: center;
text-align: center;
letter-spacing: 0.06em;
text-decoration-line: underline;
font-feature-settings: 'pnum' on, 'onum' on;

color: var(--main-color-light);
}
</style>