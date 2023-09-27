<template>
  
    <!-- Header -->
    <app-header></app-header>
    <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>
    <AppPLayer />
    <!-- Auth Modal -->
  <app-auth></app-auth>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppAuth from './components/AppAuth.vue'
import { mapWritableState } from 'pinia'
import useUserStore from './stores/user'
import { auth } from './includes/firbase'
import AppPLayer from './components/AppPLayer.vue'
export default {
  name: 'App',
  components: {
    AppHeader,
    AppAuth,
    AppPLayer
  },
  computed: {
    ...mapWritableState(useUserStore, ['userLoggedIn'])
  },
  created() {
    if (auth.currentUser) {
      this.userLoggedIn = true
    }
  }
}
</script>

<style>

.fade-enter-from {
  opacity: 0;
}

.fade-enter-active {
  transition: all 0.5s linear;
}

.fade-leave-to {
  transition: all 0s lienar;
  opacity: 0;
}
</style>
