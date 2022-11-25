<template>
  <div class="nftsContainer">
    
    <div v-for="nft in nfts" :key="nft.id">
        <nft-card :nft="nft"/>
    </div>
  </div>
</template>

<script setup lang="ts">
    import { NftInterface } from '@/interfaces/NftInterface';

    const {nfts} = defineProps({
        nfts: {type: Object as () => NftInterface[]},
    })

    console.log(nfts)


</script>

<style>
  
</style>