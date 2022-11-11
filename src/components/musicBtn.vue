<template lang="">
    <a class="btn"><Icon class="icon" :icon="icon" /><h4 class="text">{{text}}</h4></a>
</template>

<script lang="tsx">
import { Icon } from '@iconify/vue';
export default {
    name: 'musicBtn',
    props: {
        text: {
            type: String,
            default: 'Rock'
        },
        icon: {
            type: String,
            default: 'emojione-monotone:guitar'
        }
    }, components: {
        Icon
    }
}
</script>

<style scoped>
.btn {
    border-radius: 100%;
    width: 85px;
    height: 85px;
    background: #2B2837;
    box-shadow: -2px -2px 15px rgba(142, 58, 237, 0.8), 5px 5px 15px #14121E;
    filter: blur(0.5px);
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    flex-direction: column;
    padding: 0px;
    gap: 5px;
}

.icon {
    width: 37px;
    height: 37px;
    color: #8E3AED;

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