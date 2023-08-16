<template>
  <client-only>
    <!-- eslint-disable -->
    <component
      :is="'script'"
      async
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8209950884395919"
      crossorigin="anonymous"
    />
    <!-- Google tag (gtag.js) -->
    <component
      :is="'script'"
      async
      src="https://www.googletagmanager.com/gtag/js?id=G-H1S1GGV8WJ"
    />
    <component :is="'script'">
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-H1S1GGV8WJ');
    </component>
    <!-- eslint-enable -->
  </client-only>

  <div class="layout">
    <Header />
    <div class="main">
      <slot />
    </div>
  </div>
</template>

<script setup>
const lsName = 'saved_tests'

if (!process.server) {
  if (!localStorage.getItem(lsName)) {
    /* eslint-disable */
    const sampleData = JSON.stringify([{"title":"家族","questions":["祖父","曽祖父","祖母","曽祖母","父","母","兄","姉","弟","妹","夫","妻","息子","娘","叔母さん","叔父さん"]},{"title":"時刻","questions":["今年","来年","再来年","去年","昨年","前年","今月","来月","再来月","先月","先先月","今週","来週","再来週","先週","先先週","今日","あした","あす","あさって","しあさって","昨日","一昨日","先一昨日"]},])
    /* eslint-enable */
    localStorage.setItem(lsName, sampleData)
  }
}
</script>

<style lang="scss">
:root {
  --primary: #df343a;
  --secondary: #62a0bd;
  --textfield: #654;
  --alert-border: #7899;
  --alert-bg: #5679;
}

html {
  background: #111;
  background-image: linear-gradient(0deg, #111, #123);
  background-position: top center;
  background-repeat: no-repeat;
  color: #f1f1f1;
  font-size: 16px;
  font-family: sans-serif;
}

body {
  margin: 0;
}

a {
  color: currentColor;
}

hr {
  height: 1px;
  margin: 2rem 0;
  border: 0;
  background: #fff2;
}

input, textarea {
  display: block;
  box-sizing: border-box;
  width: 100%;
  padding: 0.8rem 0.4rem;
  outline: none;
  border: 2px solid var(--textfield);
  border-radius: 0.2rem;
  font-size: 1rem;

  &:focus {
    border-color: #fff;
  }
}

button {
  box-sizing: border-box;
  margin: 0.4rem;
  padding: 0.8rem 2.2rem;
  background: var(--primary);
  border: 2px solid var(--primary);
  border-radius: 0.2rem;
  color: currentColor;
  cursor: pointer;
  font-size: 1rem;
  transition: filter 0.3s, box-shadow 0.3s;

  &:hover {
    filter: brightness(1.6);
    box-shadow: 0 0 10px var(--primary);
  }

  &:disabled {
    pointer-events: none;
    filter: grayscale(40%);
  }

  &.secondary {
    background: var(--secondary);
    border: 2px solid var(--secondary);
  }

  &.outline {
    background: transparent;
    color: var(--primary);

    &:hover {
      box-shadow: 0 0 10px var(--primary), 0 0 10px var(--primary) inset;
    }
  }

  &.outline.secondary {
    color: var(--secondary);

    &:hover {
      box-shadow: 0 0 10px var(--secondary), 0 0 10px var(--secondary) inset;
    }
  }

  &.small {
    padding: 0.2rem 1rem;
    font-size: 0.75rem;
  }
}

.alert {
  margin: 1rem 0;
  padding: 0.75rem;
  border: 1px solid var(--alert-border);
  border-radius: 0.4rem;
  background: var(--alert-bg);
}

.layout {
  .main {
    padding: 1rem 1.8rem;
  }
}
</style>
