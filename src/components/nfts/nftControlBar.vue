<template>
    <div class="toolsBox" >
        <button :class="active.state ? 'button active' : 'button'" @click="toggle()">
            Upcoming
        </button>
        <button :class="!active.state ? 'button active' : 'button'" @click="toggle()">
            <p>Passed</p>
        </button>
    </div>
</template>

<script setup lang="ts">

    import { defineProps } from 'vue';

    interface IProps {
        changeActive: (option:boolean) => void
    }

    const active = $ref({state: true})

    const {changeActive} = defineProps<IProps>()

    const toggle = () => {
        
        active.state = !active.state
        changeActive(active.state)
    }


</script>

<style>
    .toolsBox {
        width: 100%;
        height: 32px;
        background: #2D2D2D;
        border-radius: 8.91px;
        display: flex;
        justify-content: center;

    }

    .button {
        width: 50%;
        background: #2D2D2D;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        /* or 138% */

        letter-spacing: -0.078px;

        /* LabelColor/Dark/Primary */

        color: #FFFFFF;
        border: none;
        border-radius: 8.91px;


    }

    .active {
        background: linear-gradient(180deg, #00d8e7a9 0%, #3f75ffa2 100%),
        linear-gradient(0deg, #354A59, #354A59);
        border: 1.5px solid;

        border-image-source: linear-gradient(180deg, #00D8E7 0%, #3F74FF 100%);

    }
</style>