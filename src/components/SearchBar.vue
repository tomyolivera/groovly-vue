<template>
    <div class="inputBox">
        <Icon icon="ion:search" color="grey" class="inputIcon"/>
        <input type="text" class="inputSearch" placeholder="Find band, artist, genre..." v-model="searching.inpt" v-on:input="search"/>
    </div>
</template>

<script setup lang="ts">
    import { Icon } from '@iconify/vue';

    const searching = $ref({inpt: ''})

    const search = () => {
        console.log(searching.inpt);
    }

</script>

<style>
    .inputSearch {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 17px;
        padding: 7px 4px 7px 28px;
        background: #2A2A2C;
        border-radius: 10px;
        border: none;
        color: white;
        width: 100%;
    }

    .inputSearch::placeholder {
        color: rgba(235, 235, 245, 0.3);
    }

    .inputSearch:focus-visible {
        
        outline: none;
    }
    .inputIcon {
        position: absolute;
        width: 17px;
        height: 17px;
        top: 11px;
        left: 8px;
    }
    .inputBox {
        width: 90vw;
        position: relative;
    }
</style>