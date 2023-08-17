<template>
  <div class="site-header">
    <div class="header-bar">
      <div class="logo-with-sub">
        <NuxtLink
          to="/"
          class="home-link"
        >
          聞き取り<em>ゲーム</em>
        </NuxtLink>

        <span
          v-if="pTitle"
          class="sub-title"
        >
          {{ pTitle }}
        </span>
      </div>

      <NuxtLink
        v-if="pTitle"
        to="/"
        class="back-btn"
      >
        戻る
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const pTitle = useState('pTitle')
</script>

<style lang="scss">
.site-header {
  position: sticky;
  top: 0;
  z-index: 1;
  background: #fff;
  backdrop-filter: blur(20px);
  box-shadow: 0 0 20px #0683;

  &:after {
    content: '';
    display: block;
    height: 3px;
    background-image: linear-gradient(90deg, var(--primary), var(--secondary));
  }

  .header-bar {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    padding: 1rem 1.8rem;

    .home-link {
      font-size: 1.4rem;
      font-style: italic;
      font-weight: bold;
      color: var(--primary);

      em {
        color: var(--secondary);
      }
    }

    .logo-with-sub {
      display: grid;
      grid-template-columns: auto 1fr;
      align-items: center;
    }

    .sub-title {
      display: inline-block;
      margin-left: 1rem;
      padding-left: 1rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      border-left: 1px solid #aaa;
      color: #aaa;
      line-height: 1;
    }
  }

  a {
    text-decoration: none;

    &:hover {
      text-decoration: initial;
    }
  }
}
</style>
