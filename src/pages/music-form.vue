<template lang="">
    <div class="background">
        <defaultText text="Let us know you better" style="font-size: 16px;position: absolute;top: 9%;"/>
        <defaultText text="What Music do you like?" style="font-size: 10px;position: absolute;top: 15%;"/>
        

            <div  class="music-grid">
                <musicBtn v-for="item in music" :text="item.text" :icon="item.icon" :likeList="likeList"/>
            </div>
            <defaultBtn text="Next" to="/home" style="position: absolute;top: 80%;"/>
            <defaultLink text="SKIP THIS STEP" to="/home" style="position: absolute;top: 90%;"/>

    </div>
</template>
<script setup lang="ts">

    const music =[
                {text:"Pop",icon:"game-icons:microphone"},
                {text:"Rock",icon:"emojione-monotone:guitar"},
                {text:"Trap",icon:"healthicons:i-groups-perspective-crowd-outline"},
                {text:"Electro",icon:"fluent:music-note-1-24-regular"},
                {text:"Classical",icon:"fluent-emoji-high-contrast:musical-keyboard"},
                {text:"Hip Hop",icon:"healthicons:speech-language-therapy-outline"},
                {text:"Jazz",icon:"wpf:herald-trumpet"},
                {text:"Metal",icon:"bi:lightning-fill"},
                {text:"Country",icon:"game-icons:farm-tractor"},
            ]

    let likeList =[]

</script>
<style scoped>
    .music-grid{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 20px;
        position: absolute;
        top: 25%;
        width: 300px;
    }
</style>