<template lang="">
    <div class="bg" v-bind:style="{backgroundImage: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 45%, rgba(142, 58, 237, 0.4) 100%), url(' + like?.image + ')' }">
        <div class="content">
            <p class="date">
                <span>{{ like.date.day }}</span>
                <span>{{ like.date.month }}</span>
            </p>
            <h4 class="title">{{ like.name }}</h4>
            <p class="location">{{ like.location }}</p>
        </div>
        <div class="rectangle"></div>
    </div>
</template>
<script lang="ts">
export default {
    props: {
        like: {
            type: Object,
            required: true
        }
    }
}
</script>
<style scoped>
    .bg {
        width: 500px;
        height: 150px;
        position: relative;
        margin: 15px 0;
        color: #F9FAFC;
        border-radius: 8px;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }

    .title {
        position: absolute;
        bottom:25px;
        left: 10px;

        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 100%;
    }

    .location {
        position: absolute;
        height: 13px;
        bottom: 10px;
        left: 10px;

        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 10px;
        line-height: 15px;
    }

    .date {
        position: absolute;
        left: 10px;
        top: 10px;
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .rectangle {
        width: 90%;
        height: 10px;
        background: var(--main-color-dark);
        border-radius: 0 0 8px 8px;
        /* margin: auto; */
        position: absolute;
        bottom: -10px;
        left: 20px;
    }
</style>