<template>
  <div class="counterBox">
    <p class="counter">22h : 10m : 2s</p>
  </div>
</template>

<script setup lang="ts">

</script>

<style>
  .counterBox {
    background: rgba(87, 87, 87, 0.5);
    filter: blur(0.5px);
    border-radius: 3px;
    padding: 3px 2px;
  }

  .counter {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 275;
    font-size: 8px;
    line-height: 12px;
    text-align: center;

    color: #F9FAFC;
  }
</style>