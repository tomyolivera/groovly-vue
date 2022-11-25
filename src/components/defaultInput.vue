<template lang="">
    <input class="input" :placeholder="placeholder" />
</template>

<script setup lang="ts">
    
    defineProps({
        placeholder: {
            type: String,
            default: 'placeholder'
        }
    })

</script>

<style scoped>
.input {
    width: 237px;
    height: 43px;
    border: double 2px transparent;
    border-radius: 5px;
    background-image: linear-gradient(var(--background-color), var(--background-color)),
        linear-gradient(to right, var(--main-color), var(--main-color-dark));
    background-origin: border-box;
    background-clip: content-box, border-box;
    text-decoration: none;
    outline-width: 0;
    color: #C2C2C2;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
}

::placeholder {
    color: #C2C2C2;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    padding: 20px;
}
</style>

    







border-radius: 20px !important;