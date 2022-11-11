<template lang="">
    <div class="background">
        <defaultText text="Let us know you better" style="font-size: 16px;position: absolute;top: 9%;"/>
        <defaultText text="What Music do you like?" style="font-size: 10px;position: absolute;top: 15%;"/>
        
        <ul>
            <li v-for="item in music">
                <musicBtn :text="item.text" :icon="icon"/>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            music:[{text:"Pop",icon:"emojione-monotone:microphone"},]
        }
    }
}
</script>
<style lang="">
    
</style>