<script setup lang="ts">
import { store } from '../store'
const post = () => {
  const sentence = document.getElementById('postSentence') as HTMLTextAreaElement
  if (!sentence) {
    return alert('テキストエリアのDOMが見つかりません')
  }
  const jsondata = localStorage.getItem('bo-articles')
  const data = jsondata ? JSON.parse(jsondata) : { articles: [] }
  data.articles.unshift(sentence.value)
  localStorage.setItem('bo-articles', JSON.stringify(data))
  store.articles = data.articles
  sentence.value = ''
}
</script>

<template>
  <div class="post">
    <textarea id="postSentence" placeholder="What happened?!" rows="3"></textarea>
    <button class="submit-button" @click="post">サーフする</button>
  </div>
</template>

<style scoped>
.post {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
  margin: 10px;
}
textarea {
  border: none;
  font-size: var(--font-size-main);
  width: 100%;
  padding: 5px;
  resize: none;
}
textarea:focus {
  outline: 2px solid gray;
}
.submit-button {
  display: block;
  background-color: var(--main-blue);
  color: white;
  border: none;
  width: 120px;
  font-size: 16px;
  font-weight: bold;
  line-height: 30px;
  border-radius: 30px;
  cursor: pointer;
}
.submit-button:hover {
  opacity: 0.9;
}
</style>
