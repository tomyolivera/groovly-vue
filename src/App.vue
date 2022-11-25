<template>
  <router-view v-slot="{ Component }">
  <transition name="fade">
    <component :is="Component" />
  </transition>
</router-view>
<splashScreen v-if="loading.state" />
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
const loading = $ref({state: true})

onMounted(() => {
  setTimeout(() => {
    loading.state = false
  }, 2000)
})

</script>

