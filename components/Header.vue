<template>
  <div class="site-header">
    <NuxtLink to="/">聞き取りゲーム</NuxtLink>

    <nav class="main-menu">
      <ul>
        <li>
          <NuxtLink to="jikan">時間</NuxtLink>
        </li>
        <li>
          <NuxtLink to="suuji">数字</NuxtLink>
        </li>
        <li
          v-for="(test, idx) in tests"
          :key="`nav_test_${idx}`"
        >
          <NuxtLink :to="test.title">
            {{ test.title }}
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="add">+テスト</NuxtLink>
        </li>
      </ul>
    </nav>
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
</script>

<style lang="scss">
.site-header {
  position: sticky;
  top: 0;
  display: grid;
  grid-template-columns: auto 1fr;
  padding: 1rem 1.8rem;
  background: #ffffff09;
  backdrop-filter: blur(20px);
  border-bottom: 1px solid #fff1;

  a {
    text-decoration: none;

    &:hover {
      text-decoration: initial;
    }
  }

  .main-menu {
    padding-left: 3rem;

    ul, li {
      display: inline-block;
    }

    ul {
      margin: 0;
      padding: 0;
    }

    li {
      margin-right: 1rem;
    }
  }
}
</style>