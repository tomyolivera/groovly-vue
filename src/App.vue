<template>

  

  <router-view v-slot="{ Component }">
  <transition name="fade">
    <component :is="Component" />
  </transition>
</router-view>
<splashScreen v-if="loading" />
</template>

<script>
    import SplashScreen from './components/SplashScreen.vue'

    export default {
        name: "app",
        data: () => ({
            loading: true
        }),
        mounted() {
            setTimeout(() => {
                this.loading = false
            }, 3000)
        }
    }
</script>

