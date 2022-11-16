<template>

    <div class="image"></div>

    <div class="container">
        <div class="data">
            <h2>Amelie Lens</h2>
            <p>09/21/2022</p>
        </div>

        <div class="location">
            <Icon icon="material-symbols:location-on-outline" color="#00D8E7"/>
            <p>Movistar Arena</p>
        </div>

        <img src="../../../assets/img/nft.png" class="nft"/>

        <button class="buyBtn">Buy</button>
    </div>
    

  
</template>

<script lang="tsx">
import { Icon } from '@iconify/vue';

export default {
    components: {
        Icon
    }
}
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

    .data h2 {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 800;
        font-size: 30px;
        line-height: 36px;
        text-align: center;
        letter-spacing: 0.0231818px;

        color: #FFFFFF;

        text-shadow: 2px 2px 10px #B149F1;
    }

    .data p {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 300;
        font-size: 15px;
        line-height: 21px;
        /* identical to box height */

        text-align: center;
        letter-spacing: 0.0231818px;

        color: #FFFFFF;
    }

    .location {
        display: flex;
        align-items: center;
        margin: 7px 0;
    }

    .location p {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 300;
        font-size: 15px;
        line-height: 22px;
        /* identical to box height */

        letter-spacing: 0.0231818px;

        color: #FFFFFF;
        margin-left: 7px;

    }

    .nft {
        display: block;
        margin: 15px auto;
        
    }

    .buyBtn {
        width: 198px;
        height: 43px;
        margin: auto;
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

</style>