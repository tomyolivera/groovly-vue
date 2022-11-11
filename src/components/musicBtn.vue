<template lang="">
    <button v-on:click="toggleActive" :class="btnActive" ><Icon :class="iconActive" :icon="icon" /><h4 class="text">{{text}}</h4></button>
</template>

<script lang="tsx">
import { Icon } from '@iconify/vue';
export default {
    name: 'musicBtn',
    data(){
        return{
            btnActive: 'btn btn-off',
            iconActive: 'icon icon-off',
            active: false
        }
  
    },
    props: {
        text: {
            type: String,
            default: 'Rock'
        },
        icon: {
            type: String,
            default: 'emojione-monotone:guitar'
    }}, components: {
        Icon
    }, 
    methods: {
        toggleActive() {
            if(this.active == false){
                this.btnActive = 'btn btn-on'
                this.iconActive = 'icon icon-on'
                this.active = true
            }else{
                this.btnActive = 'btn btn-off'
                this.iconActive = 'icon icon-off'
                this.active = false
            }

        }
    }
}
</script>

<style scoped>
.btn {
    border-radius: 100%;
    width: 85px;
    height: 85px;
    box-shadow: -2px -2px 15px rgba(142, 58, 237, 0.8), 5px 5px 15px #14121E;
    filter: blur(0.5px);
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    flex-direction: column;
    padding: 0px;
    gap: 5px;
    border: 2px solid transparent;
}
.btn-off{
    background: #2B2837;
}
.btn-on{
    background: #8E3AED;
}
.icon-off{
    color: #8E3AED;
}
.icon-on{
    color: #2B2837;
}
.icon {
    width: 37px;
    height: 37px;
}

.text {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 9px;
    line-height: 14px;
    /* identical to box height */

    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.14em;
    text-transform: uppercase;

    color: #FFFFFF;


    /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 0;
}
</style>