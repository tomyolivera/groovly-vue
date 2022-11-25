<template>
  <div class="box">
    <img src="../../../assets/img/nft.png" class="img"/>
    <div class="infoBox">
        <div class="subBox">
            <h3 class="title">{{nft.name}}</h3>
            <div class="locationBox">
                <Icon icon="material-symbols:location-on-outline"/>
                <p>{{nft.location}}</p>
            </div>
            
            <date-count-badge/>

        </div>
        <div class="dateBox">
            <p class="dateBox--number">19</p>
            <p class="dateBox--month">SEP</p>
        </div>
    </div>

  </div>
</template>

<script setup lang="ts">
    import { NftInterface } from '@/interfaces/NftInterface'
    import { Icon } from '@iconify/vue';

    defineProps({
        nft: {
            type: Object as () => NftInterface,
            required: true
        }
    })

</script>

<style>

    .box {
        background: #2B2837;
        border-radius: 8px;
        margin: 27px auto;
        padding: 17px 13px;
        display: flex;
        flex: row;
        align-items: center;
        position: relative;
    }

    .box::after {
        z-index: -10;
        content: '';
        position: absolute;
        width: 301px;
        height: 109px;
        left: 10px;
        top: 20px;

        background: #3F74FF;
        border-radius: 8px;
    }

    .img {
        filter: drop-shadow(2px 2px 10px #3F74FF);
        width: 90.43px;
        height: 86px;
        margin-right: 30px;
    }

    .infoBox {
        display: flex;
        gap: 4px;
    }

    .title {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 100%;
        /* or 18px */


        color: #F9FAFC;

        text-shadow: 0px 1px 4px #00D8E7;
    }

    .locationBox {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .locationBox p {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 10px;
        line-height: 15px;

        color: #F9FAFC;

    }

    .locationBox svg {
        width: 8.89px;
        height: 10px;
        color: #F9FAFC;
    }

    .subBox {
        display: flex;
        flex-direction: column;
        gap: 9px;

    }

    .dateBox {
        margin-left: 24px;
    }

    .dateBox--number {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 125%;
        /* or 25px */

        text-align: center;
        letter-spacing: 0.02em;

        color: #F9FAFC;

    }

    .dateBox--month {
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

</style>