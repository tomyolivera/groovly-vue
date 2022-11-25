<template>

    <div class="image"></div>

    <div class="container">
        <div class="data">
            <h2 class="showTitle">Amelie Lens</h2>
            <price-badge price="9.5"/>
        </div>

        

        <img src="../../../assets/img/nft.png" class="nft"/>

        <div class="infoContainer">
            <div class="infoBox">
                <Icon icon="fluent:calendar-empty-16-regular" color="#00D8E7"/>
                <p class="infoText">Viernes 21 de Diciembre - 22:00 hs</p>
            </div>

            <div class="infoBox spaceBetween">
                <div class="infoBox--SubContainer">
                    <Icon icon="material-symbols:location-on-outline" color="#00D8E7"/>
                    <p class="infoText">Movistar Arena</p>
                </div>
                <a class="infoAncor">See map</a>

            </div>
        </div>

       

        <button class="buyBtn">Buy</button>
    </div>
    

  
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';


</script>

<style>

    .image {
        width: 375px;
        height: 290px;
        left: 0px;
        top: 0px;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0) 34.9%, rgba(11, 11, 13, 0.605405) 72.92%, rgba(15, 15, 17, 0.8) 92.71%, #1A1A1D 100%), url('https://weraveyou.com/wp-content/uploads/2022/04/Amelie-Lens-EXHALE.jpg');
        background-size: cover;
        background-position: center;
        border-radius: 0px 0px 7px 7px;
    }

    .container {
        margin: 22px 20px;
    }

    .data {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .showTitle {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 800;
        font-size: 35px;
        line-height: 42px;
        text-align: center;
        letter-spacing: 0.0231818px;

        color: #FFFFFF;


        text-shadow: 2px 2px 10px #00D8E7;
    }

    .infoContainer {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 30px;
    }

    .infoBox {
        display: flex;
        align-items: center;
        margin: 7px 0;
        width: 100%;
    }

    .spaceBetween {
        justify-content: space-between;
    }

    .infoText {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 300;
        font-size: 15px;
        line-height: 22px;
        /* identical to box height */

        text-align: center;
        letter-spacing: 0.0231818px;

        color: #FFFFFF;
        margin-left: 7px;

    }

    .nft {
        display: block;
        margin: 15px auto;
        filter: drop-shadow(2px 2px 10px #3F74FF);
        
    }

    .buyBtn {
        width: 198px;
        height: 43px;
        margin: 23px auto;
        display: block;
        background: linear-gradient(90deg, #3F74FF 0%, #00D8E7 96.51%);
        border-radius: 5px;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        text-align: center;
        color: #F9FAFC;
        border: none;
        transition: all .5s;
    }

    .buyBtn:active {
        opacity: .5;

    }

    .infoAncor {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 18px;
        /* identical to box height */


        color: #60A9D2;
    }

    .infoBox--SubContainer {
        display: flex;
        align-items: center;
    }

</style>