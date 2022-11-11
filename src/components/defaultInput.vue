<template lang="">
    <input class="input" :placeholder="placeholder" />
</template>

<script lang="tsx">
export default {
    name: 'defaultInput',
    props: {
        placeholder: {
            type: String,
            default: 'button'
        }
    }
}
</script>

<style scoped>
.input {
    width: 237px;
height: 43px;
  border: double 2px transparent;
  border-radius: 5px;
  background-image: linear-gradient(#121212, #121212), 
                    linear-gradient(to right, #B149F1, #8E3AED);
  background-origin: border-box;
  background-clip: content-box, border-box;
  text-decoration: none;


}
::placeholder{
    color: #C2C2C2;
    font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 21px;
padding:20px;
}
</style>

    







border-radius: 20px !important;