<script setup lang="ts">
import Post from '../components/Post.vue'
import Article from '../components/Article.vue'
</script>

<template>
  <main>
    <h1>Home</h1>
    <Post />
    <Article />
  </main>
</template>

<style scoped>
main {
  width: 100%;
  height: 100%;
  padding: 0;
}
</style>
