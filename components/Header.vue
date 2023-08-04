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
          <NuxtLink to="add">+</NuxtLink>
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
})
</script>

<style lang="scss">
.site-header {
  display: grid;
  grid-template-columns: auto 1fr;
  padding: 1rem 1.8rem;
  background: #ffffff09;
  border-bottom: 1px solid #fff1;

  .main-menu {
    ul, li {
      display: inline;
    }

    li {
      margin-right: 1rem;
    }
  }
}
</style>