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
useHead({
  title: '聞き取りゲーム',
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' },
    { name: 'description', content: '「聞き取りゲーム」について' }
  ]
})
</script>