<template lang="">

        <div class="container">
        <img src="../../assets/img/banner.png" class="banner"/>
        <SearchBar/>
        <shows :shows="showsList" showsListName="Shows in your city" />
        <shows :shows="showsList" showsListName="Upcoming shows" />
    </div>

        <navbar/>

</template>

<script setup lang="ts">

import { ShowInterface } from '@/interfaces/ShowInterface.js'
import { dbShows } from '../lib/dbShows.js'

const showsList = $ref<ShowInterface[]>(dbShows)

</script>

<style scoped>
    .banner {
        width: 128.1px;
        height: 35.32px;
        filter: drop-shadow(1px 1px 20px var(--main-color));
        margin: 30px 0;
    }
    .container {
        display: flex;
        flex-direction: column;
        align-items: center; 
    }
    
</style>