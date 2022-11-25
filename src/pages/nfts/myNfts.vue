<template>
  <div class="container"> 
    <h1 class="heading">Your NFTs</h1>
    <nft-control-bar :changeActive="toogleList"/>
    <nft-list :nfts="nfts.nftsList"/>
  </div>
</template>

<script setup lang="ts">
  import { dbNfts } from '@/lib/dbNft';
  import { onBeforeMount } from 'vue-demi';

  const nfts = $ref({nftsList: dbNfts})

  const toogleList = (option = true) => {
    console.log(option);

    nfts.nftsList = dbNfts.filter(nft => nft.active === option)

  }

  onBeforeMount(() => {
    toogleList()
  })

</script>

<style>
  .container {
    margin: 0 35px;
  }

  .heading { 
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    /* identical to box height */

    text-align: center;

    color: #F9FAFC;

  }
</style>