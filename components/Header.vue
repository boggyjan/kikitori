<template>
  <div class="site-header">
    <NuxtLink to="/">
      聞き取りゲーム
    </NuxtLink>
  </div>
</template>

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
}
</style>
