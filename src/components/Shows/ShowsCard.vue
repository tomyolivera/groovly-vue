<template>
    <router-link to="/shows/{{data.id}}">

        <div class="bg" v-bind:style="{ backgroundImage: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 44.79%, rgba(142, 58, 237, 0.4) 100%), url(' + data?.image + ')' }">
            <like-btn/>
            <div class="info">
                <h4>{{data?.title}}</h4>
                <p>{{date}}</p>
            </div>
        </div>
    </router-link>

</template>

<script lang="tsx">
import { ShowInterface } from '@/interfaces/ShowInterface';
import moment from 'moment';
import LikeBtn from './LikeBtn.vue';


export default {
    name: 'ShowsCard',

        LikeBtn,    
        props: {
        data: {
            type: Object as () => ShowInterface
        }
    },
    computed: {
        date() {
            
            return moment(this.data?.date).format('D MMMM, YYYY');
        }
    }

}

</script>
<style scoped>
    .bg {
        width: 135px;
        height: 180px;
        background-size: cover;
        background-position: center;
        border-radius: 7px;
        position: relative;
        margin-left: 12px;
        
    }

    .info {
        position: absolute;
        bottom: 14px;
        left: 13px;

    }

    h4 {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        color: #FEFDFF;
    }

    p {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 8px;
        line-height: 12px;

        color: #FEFDFF;

    }
</style>