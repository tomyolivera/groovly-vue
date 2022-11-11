<template lang="">
    <router-link :to="to" class="btn" ><span class="btn-text">{{text}}</span></router-link >
</template>

<script lang="tsx">
export default {
    name: 'defaultBtn',
    props: {
        text: {
            type: String,
            default: 'button'
        },
        to: {
            type: String,
            default: ''
        }
    }
}
</script>

<style scoped>
.btn {
    width: 198px;
    height: 43px;
    background: linear-gradient(90deg, #B149F1 0%, #8E3AED 96.51%);
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
}

.btn-text {
    left: 108px;
    top: 369px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #F9FAFC;
}
</style>