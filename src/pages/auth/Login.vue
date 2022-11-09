<template lang="">
    <div>
        <h1>GROOVLY!</h1>

        <form>
            <input placeholder="Username" />
            <input placeholder="Password" />
            <button class="btn">SIGN IN</button>
        </form>

        <div class="other-options">
            <a href="#">CREATE ACCOUNT</a>
            <span>or</span>
            <a href="#">SIGN IN WITH METAMASK</a>
        </div>
    </div>
</template>

<script lang="tsx">
import Form from '../../components/Form.vue'

export default {
    
}
</script>

<style scoped>
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .other-options{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .btn {
        font-family: 'Comfortaa';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        outline: none;
        border: none;
        border-radius: 3px 0px 0px 3px;
        background: #00CCFF;
        width: 320px;
        height: 45px;
        cursor: pointer;
    }
</style>