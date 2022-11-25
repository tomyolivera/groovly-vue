<template>
    <div class="wrapBox">
        <div class="box">
            <p class="price">{{price}} ETH</p>
        </div>
    </div>
  
</template>

<script setup lang="ts">

    import { defineProps } from 'vue'; // Sin import lanza error --IsolatedModules

    defineProps({
        price: {type: Number, required: true}
    })

</script>

<style scoped>

    .wrapBox {
        border: 1px solid;
        padding: 2px;
        background: linear-gradient(90deg, #00D8E7 0.01%, #3F74FF 99.9%),
        linear-gradient(0deg, #000000, #000000);
        border-radius: 10px;

    }
    
    .box {
        background: #000000;
        box-shadow: 0px -5px 60px rgba(0, 0, 0, 0.15);
        border-radius: 8px;
        border: 1px solid;

    }

    .price {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 17px;
        letter-spacing: -0.3px;

        margin: 5px 20px;
        background: linear-gradient(90deg, #00D8E7 0.01%, #3F74FF 99.9%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;

    }
</style>