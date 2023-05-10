<script setup lang="ts">
import Header from './components/Header.vue'
</script>

<template>
  <div id="top">
    <Header />
    <div id="view">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
#top {
  display: flex;
  height: calc(100vh - 10px);
}
#view {
  position: relative;
  height: calc(100vh - 20px);
  width: 100%;
  overflow-y: scroll;
}
</style>
