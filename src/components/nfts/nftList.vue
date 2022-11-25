<template>
  <div class="nftsContainer">
    
    <div v-for="nft in nftsList" :key="nft.id">
        <nft-card :nft="nft"/>
    </div>
  </div>
</template>

<script lang="ts">
import { NftInterface } from '@/interfaces/NftInterface';
import nftCard from './nftCard.vue';


export default {
  components: { nftCard },
    props: {
        nfts: {type: Object as () => NftInterface[]},
        active: {type: Boolean},
    },
    setup(props) {
        
      
        
        return {
            nftsList: props.nfts?.filter(nft => nft.active === props.active)
        }
    }
}

</script>

<style>
  
</style>