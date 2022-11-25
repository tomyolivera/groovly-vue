<template lang="">

        <div class="container">
        <img src="../../assets/img/banner.png" class="banner"/>
        <SearchBar/>
        <shows :shows="showsList" showsListName="Shows in your city" />
        <shows :shows="showsList" showsListName="Upcoming shows" />
    </div>

        <navbar/>

</template>

<script lang="ts">

import { dbShows } from '../lib/dbShows.js'




export default {

    data: () => {
        return {
            showsList: dbShows
        }
    }
}
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