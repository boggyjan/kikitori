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
      </ul>
    </nav>
  </div>
</template>

<style lang="scss">
.site-header {
  display: grid;
  grid-template-columns: auto 1fr;
  padding: 1rem 1.8rem;
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