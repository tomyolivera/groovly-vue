<template>
    <div class="bg" v-bind:style="{backgroundImage: 'linear-gradient(360deg, rgba(0, 216, 231, 0.25) 0%, rgba(103, 103, 103, 0.2) 100%), url(' + like?.image + ')' }">
        <div class="content">
            <p class="date">
                <span class="day">{{ like.date.day }}</span>
                <span class="month">{{ like.date.month }}</span>
            </p>
            <h4 class="title">{{ like.name }}</h4>
            <div class="locationBox">
                <Icon icon="material-symbols:location-on-outline"/>
                <p class="location">{{ like.location }}</p>
            </div>
        </div>
        <div class="rectangle"></div>
    </div>
</template>
<script setup lang="ts">

    import { Icon } from '@iconify/vue';
    import { defineProps } from 'vue';

    defineProps({
        like: {
            type: Object,
            required: true
        }
    })


</script>
<style scoped>
    .bg {
        margin: 25px 35px;
        padding: 13px 16px;
        background-size: cover;
        background-position: top;
        border-radius: 8px;
        position: relative;
    }

    .bg::after {
        z-index: -10;
        content: '';
        position: absolute;
        width: 280px;
        height: 109px;
        left: 14px;
        top: 40px;

        background: #3F74FF;
        border-radius: 8px;
    }

    .title {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 100%;
        /* or 16px */


        color: #F9FAFC;
    }

    .locationBox {
        display: flex;
        flex-direction: row;
        align-items: center;
        color: #F9FAFC;

    }

    .location svg {
        width: 8.89px;
        height: 10px;

    }

    .location {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 10px;
        line-height: 15px;
    }

    .date {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: max-content;
        margin-bottom: 40px;
    }

    .day {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 125%;
        letter-spacing: 0.02em;

        color: #F9FAFC;
    }

    .month {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 125%;
        /* or 15px */

        text-align: center;
        letter-spacing: 0.02em;

        color: #F9FAFC;
    }

    .rectangle {
        
    }
</style>