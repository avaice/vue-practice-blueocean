import { reactive } from 'vue'

export const store = reactive({
  articles: [
    'サーフ（投稿）した文章は、実際にサーバーへ送信されることはありません。LocalStorageを使ってそれっぽく表示しているだけです。'
  ]
})
