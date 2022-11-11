<template lang="">
    <a class="link">{{text}}</a>
</template>

<script lang="tsx">
export default {
    name: 'defaultLink',
    props: {
        text: {
            type: String,
            default: 'text'
        }
    }
}
</script>

<style scoped>
.link {
    font-family: 'Comfortaa';
font-style: normal;
font-weight: 400;
font-size: 11px;
line-height: 200%;
/* identical to box height, or 22px */

display: flex;
align-items: center;
text-align: center;
letter-spacing: 0.06em;
text-decoration-line: underline;
font-feature-settings: 'pnum' on, 'onum' on;

color: #DBA0FF;
}
</style>