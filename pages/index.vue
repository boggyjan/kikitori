<template>
  <div>
    <h2>
      「聞き取りゲーム」について
    </h2>
    <p>
      聞き取りゲームは「Web Speech API」という技術を活用したWebアプリケーションです。上の「時間」や「数字」などが練習のテーマです。まずは一つリンクをクリックして、練習しましょう。他のテーマを練習したい場合、「＋」をクリックして、自分のテーマを作ってください。
    </p>
  </div>
</template>

<script setup>
const title = '聞き取りゲーム'
const desc = '「聞き取りゲーム」について'
const url = 'https://kikitori.boggy.tw'
const image = 'https://kikitori.boggy.tw/images/share.jpg'

useHead({
  title,
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' },
    { name: 'description', content: desc },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', desc },
    { name: 'twitter:image', content: image },
    { name: 'og:type', content: 'website' },
    { name: 'og:title', content: title },
    { name: 'og:description', content: desc },
    { name: 'og:image', content: image },
    { name: 'og:url', content: url },
    { name: 'og:site_name', content: 'iDrip' }
  ]
})
</script>