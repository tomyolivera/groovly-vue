<template lang="">
    <button class="music-btn" @click="onClick" :id="isSelected ? 'btn-selected':''" >
    <Icon class="music-icon"  :icon="icon" :color="isSelected ? '#2B2837':'var(--main-color-dark)'"/>
    <h4 class="text">{{text}}</h4>
    </button>
</template>

<script lang="tsx">
import { Icon } from '@iconify/vue';
export default {
    name: 'musicBtn',
    data() {
        return {
            isSelected: false
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
        },
        likeList: {
            type: Array,
            default: []
        }
    }, components: {
        Icon
    }, methods: {
        onClick() {
            this.isSelected = !this.isSelected
            if (this.isSelected) {
                this.likeList.push(this.text)
            } else {
                this.likeList.splice(this.likeList.indexOf(this.text), 1)
            }
        }
    }
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
    background: var(--main-color-dark);
}

.music-icon {
    width: 37px;
    height: 37px;
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