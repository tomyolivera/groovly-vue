<template lang="">
    <div class="background">
        <img src="../../../assets/img/Wordmark.png" style="position: absolute;top: 10%;" />

        <defaultText text="Create your account" style="position: absolute;top: 30%;"/>
        <form>
            <defaultInput placeholder="Name..." />
            <defaultInput placeholder="Email..." />
            <defaultBtn text="Next" to="/auth/login" />
        </form>
    </div>
</template>

<script lang="tsx">
import Form from '../../components/Form.vue'
import defaultBtn from '../../components/defaultBtn.vue'
import defaultText from '../../components/defaultText.vue'
import defaultInput from '../../components/defaultInput.vue'

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