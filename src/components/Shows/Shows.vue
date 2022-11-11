<template>
    <div class="tools">
        <h3>{{showsListName}}</h3>
        <router-link class="seeAll" to="/home">See all</router-link>
    </div>
    <div class="showsContainer">
        <div v-for="show in shows" :key="show.title" >
        <shows-card :data="show"/>
    </div>
    </div>
    
</template>

<script lang="tsx">
import { ShowInterface } from '@/interfaces/ShowInterface';
import ShowsCard from './ShowsCard.vue';

export default {
  components: { ShowsCard },
    name: 'Shows',
    props: {
        shows: {
            type: Object as () => ShowInterface[],
        },
        showsListName: {
            type: String
        }
    }
}

</script>
<style scoped>
    .showsContainer {
        display: flex;
        flex-direction: row;
        overflow-x: scroll;
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
        width: 100%;
        
    }

    .showsContainer::-webkit-scrollbar {
        display: none;
    }

    h3 {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        color: #F9FAFC;

    }
    .seeAll {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 18px;
        text-decoration: none;
        color: #A995CE;
    }

    .tools {
        display: flex;
        align-items: baseline;
        width: 100%;
        justify-content: space-between;
        padding-right: 9px;
        padding-left: 12px;
        margin-bottom: 14px;
        margin-top: 23px;
    }
</style>