<template lang="">
    <v-btn class="containerLike" @click="isLiked = !isLiked">
        <Icon icon="bi:heart-fill" :color="color" width="13" height="13"/>
    </v-btn>
</template>

<script lang="tsx">
import { Icon } from '@iconify/vue';

export default {
    name: 'LikeBtn',
    props: {
        id: {
            type: String,
        }
    },
    data: () => {
        return {
            isLiked: true,
        }
    },
    computed: {
        color() {
            return this.isLiked ? "#b149f1" : "#FEFDFF"
        }
    },
    components: {
		Icon,
	},
    

}
</script>

<style scoped>
    .containerLike {
        display: flex;
        width: 24px;
        height: 24px;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        background: #010101;
        opacity: 0.5;
        position: absolute;
        top: 5px;
        right: 5px;
        border: none;
    }
</style>