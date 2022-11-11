<template lang="">
    <div class="background">
        <shows :shows="showsList" showsListName="Shows in your city" />
        <shows :shows="showsList" showsListName="Upcoming shows" />
    </div>
</template>

<script lang="tsx">
import Shows from '../components/Shows/Shows.vue'
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
    
</style>