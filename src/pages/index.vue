<template lang="">
  
  <div class="background">
    <defaultText text="Register with metamask" style="position: absolute;top: 24%;"/>
      <img src="../../assets/img/MetaMask_Fox.png" style="position: absolute;top: 35%;" />
      <defaultBtn text="Connect Metamask" to="/auth/register" style="position: absolute;top: 60%;"/>
      
  </div>
</template>

<script setup lang="ts">

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
</style>