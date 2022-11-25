<template lang="">
    <div class="nav">
        <Icon icon="ph:cards-bold" class="icon" style="position: absolute;left: 6.25%;top: 25%;"/>
        <router-link to='profile/likes' ><Icon icon="mdi:cards-heart" class="icon" style="position: absolute;left: 25.6%;top: 25%;"/></router-link>
        <img src="../../assets/img/homeCircle.png" class="circle"><router-link to='Home' ><Icon icon="ic:round-home" class="icon" style="position: absolute;left: 46.93%;top: 12%;"/></router-link><img/>
        <Icon icon="clarity:notification-solid" class="icon" style="position: absolute;right: 25.6%;top: 25%;"/>
        <router-link to='profile/index' ><Icon icon="mdi:user" class="icon" style="position: absolute;left: 85.07%;top: 25%;"/></router-link>
    </div>
</template>

<script setup lang="ts">

    import { Icon } from '@iconify/vue';

    var selected = 0;

    const onClick = (index: number) => {
        selected = index
    }


</script>

<style scoped>
.nav {
    width: 100%;
display: flex;
    box-sizing: border-box;


    height: 10%;

    background: rgba(255, 255, 255, 0.15);
    background-blend-mode: overlay;
    box-shadow: inset 0px 1px 1px rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(20px);
    position:fixed;
 bottom:0;

}
.circle {
    position: absolute;
width: 65px;
height: 65px;
left: 42%;
top: -10px;
}
.icon{
    width: 25px;
    height: 25px;
    color: #fff;
}

</style>