<template>
  <div class="container"> 
    <h1 class="heading">Your NFTs</h1>
    <nft-control-bar :active="active" :changeActive="toogleList"/>
    <nft-list :nfts="nfts" :active="active"/>
  </div>
</template>

<script lang="ts">
import { dbNfts } from '@/lib/dbNft';

export default {
  data: () => {
    return {
      nfts: dbNfts,
      active: true
    }
  },
  methods: {
    toogleList(option:boolean) {
      console.log(option);
      
      this.active = option
    }
  }
}
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