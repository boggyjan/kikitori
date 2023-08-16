<template>
  <div class="_index">
    <h2>
      練習テーマ
    </h2>
    <nav class="main-menu">
      <NuxtLink
        to="/jikan"
        class="btn"
      >
        時刻
      </NuxtLink>
      <NuxtLink
        to="/suuji"
        class="btn"
      >
        数字
      </NuxtLink>
      <NuxtLink
        v-for="(test, idx) in tests"
        :key="`nav_test_${idx}`"
        class="btn"
        :to="'/' + test.title"
      >
        {{ test.title }}
      </NuxtLink>
      <NuxtLink
        to="/add"
        class="btn"
      >
        +
      </NuxtLink>
    </nav>
    <h2>
      「聞き取りゲーム」について
    </h2>
    <p>
      聞き取りゲームは「Web Speech API」という技術を活用したWebアプリケーションです。上の「時間」や「数字」などが練習のテーマです。まずは一つリンクをクリックして、練習しましょう。他のテーマを練習したい場合、「＋」をクリックして、自分のテーマを作ってください。
    </p>
  </div>
</template>

<script setup>
const lsName = 'saved_tests'
const tests = ref([])

function getSavedData () {
  const data = localStorage.getItem(lsName)
  tests.value = data ? JSON.parse(data) : []
}

onMounted(() => {
  getSavedData()
  window.addEventListener('saved_test_updated', getSavedData)
})

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

<style lang="scss">
._index {
  a {
    text-decoration: none;

    &:hover {
      text-decoration: initial;
    }
  }

  .main-menu {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 0.4rem;
    word-break: break-all;
  }
}
</style>