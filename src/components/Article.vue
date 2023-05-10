<script setup lang="ts">
import { store } from '../store'
const getArticles = async () => {
  const data = localStorage.getItem('bo-articles')
  if (!data) {
    return
  }
  store.articles = JSON.parse(data).articles
}

getArticles()
</script>

<template>
  <li v-for="sentence in store.articles">
    <article>
      <div>
        <img class="usericon" src="https://cataas.com/cat?width=100&height=100" />
      </div>
      <div>
        <p class="username">noname <span class="userid">@guest</span></p>
        <p class="sentence">{{ sentence }}</p>
      </div>
    </article>
  </li>
</template>

<style scoped>
li {
  list-style: none;
}
article {
  display: flex;
  gap: 0 10px;
  margin: 10px;
  padding: 15px 5px;
}
article:hover {
  background-color: var(--color-hover);
}
.usericon {
  display: block;
  width: 55px;
  height: 55px;
  border-radius: 100%;
  background-color: gray;
}
.username {
  font-size: var(--font-size-main);
  line-height: var(--font-size-main);
  font-weight: bold;
}
.userid {
  font-size: 14px;
  color: gray;
}
.sentence {
  font-size: 16px;
}
</style>
