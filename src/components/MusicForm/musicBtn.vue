<template>
    <button class="music-btn" @click="onClick" :id="isSelected.state ? 'btn-selected':''" >
    <Icon class="music-icon"  :icon="icon" :color="isSelected.state ? '#FFFFFF':'var(--main-color-dark)'"/>
    <h4 class="text">{{text}}</h4>
    </button>
</template>

<script setup lang="ts">
    import { Icon } from '@iconify/vue';
    import { defineProps } from 'vue';

    const isSelected = $ref({state:false});

    const props = defineProps({
        text: {
            type: String,
            required: true
        },
        icon: {
            type: String,
            required: true
        },
        likeList: {
            type: Array,
            required: true
        }
    })


    const onClick = () => {
        isSelected.state = !isSelected.state

        if (isSelected.state) {
            props.likeList.push(props.text)
        } else {
            props.likeList.splice(props.likeList.indexOf(props.text), 1)
        }
        console.log(props.likeList)
    }
    

</script>

<style scoped>
.music-btn {
    border-radius: 100%;
    width: 85px;
    height: 85px;
    box-shadow: -2px -2px 15px rgba(63, 116, 255, 0.8), 5px 5px 15px #14121E;
    filter: blur(0.5px);
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    flex-direction: column;
    padding: 0px;
    gap: 5px;
    border: 2px solid transparent;
    background: #2B2837;

}

#btn-selected {
    background: linear-gradient(#00D8E7 0%, #3F74FF 54.69%, #1C3A8A 98.96%) !important;
    box-shadow: -2px -2px 15px rgba(152, 152, 152, 0.8), 5px 5px 15px #14121E;
    border: 2px solid #00D8E7;
    
}

.music-icon {
    width: 37px;
    height: 37px;
    filter: blur(0.25px);
}

.text {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 9px;
    line-height: 14px;

    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.14em;
    text-transform: uppercase;

    color: #FFFFFF;




    flex: none;
    order: 1;
    flex-grow: 0;
}
</style>