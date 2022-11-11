<template lang="">
    <div class="background">
        <img src="../../../assets/img/Wordmark.png" style="position: absolute;top: 10%;" />

        <defaultText text="Create your account" style="position: absolute;top: 30%;"/>
        <form>
            <defaultInput placeholder="Name..." />
            <defaultInput placeholder="Email..." />
            <defaultBtn text="Next" to="/music-form" />
        </form>
        <defaultLink text="ALREADY HAVE AN ACCOUNT? LOGIN" style="position: absolute;top: 80%;"/>
    </div>
</template>

<script lang="tsx">
import Form from '../../components/Form.vue'

export default {
    
}
</script>

<style scoped>
    form {
        height:25%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }
    .other-options{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>