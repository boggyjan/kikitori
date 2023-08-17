<template>
  <client-only>
    <!-- eslint-disable -->
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
    <slot />
    <Footer />
  </div>
</template>

<script setup>
const lsName = 'saved_tests'

if (!process.server) {
  const tests = JSON.parse(localStorage.getItem(lsName) || '[]')

  if (!tests.length) {
    /* eslint-disable */
    const sampleData = [{"title":"家族","questions":["祖父","そう祖父","祖母","そう祖母","父","母","兄","姉","弟","妹","夫","妻","息子","娘","叔母さん","叔父さん"]},{"title":"時間","questions":["今年","来年","再来年","去年","昨年","前年","今月","来月","再来月","先月","先先月","今週","来週","再来週","先週","先先週","今日","あした","あす","あさって","しあさって","昨日","一昨日","先一昨日"]}]
    /* eslint-enable */
    localStorage.setItem(lsName, JSON.stringify(sampleData))
  }

  // 原本有錯的資料，可以拿來開發測試用
  // [{"title":"家族","questions":["祖父","曽祖父","祖母","曽祖母","父","母","兄","姉","弟","妹","夫","妻","息子","娘","叔母さん","叔父さん"]},{"title":"時刻","questions":["今年","来年","再来年","去年","昨年","前年","今月","来月","再来月","先月","先先月","今週","来週","再来週","先週","先先週","今日","あした","あす","あさって","しあさって","昨日","一昨日","先一昨日"]}]

  // 為了要把時刻改成時間，之前已經打開過的人以存到localstorage了，只好在這邊改
  const findWrongData = tests.find(item => item.title === '時刻' && JSON.stringify(item.questions) === '["今年","来年","再来年","去年","昨年","前年","今月","来月","再来月","先月","先先月","今週","来週","再来週","先週","先先週","今日","あした","あす","あさって","しあさって","昨日","一昨日","先一昨日"]')

  if (tests.length && findWrongData) {
    findWrongData.title = '時間'
    localStorage.setItem(lsName, JSON.stringify(tests))
  }

  // 把曾祖父曾祖母改正，因為發音是錯的，只好拿掉漢字
  const findWrongData2 = tests.find(item => item.title === '家族' && JSON.stringify(item.questions) === '["祖父","曽祖父","祖母","曽祖母","父","母","兄","姉","弟","妹","夫","妻","息子","娘","叔母さん","叔父さん"]')

  if (tests.length && findWrongData2) {
    findWrongData2.questions = ["祖父","そう祖父","祖母","そう祖母","父","母","兄","姉","弟","妹","夫","妻","息子","娘","叔母さん","叔父さん"]
    localStorage.setItem(lsName, JSON.stringify(tests))
  }
}
</script>

<style lang="scss">
:root {
  --primary: #f7b530;
  --secondary: #1ec6dd;
  --tertiary: #78ba2a;
  --white: #fcfcfc;
  --black: #111111;
  --red: #f84c47;
  --green: #93cb5c;
  --blue: #29b0c3;
  --textfield-border-color: #654;
  --textfield-focus-border-color: #789;
  --alert-border: #7899;
  --alert-bg: #5679;
  --carousel-pagination: var(--green);
}

html {
  background: #fff;
  background-image: url('/images/dot_bg.png');
  background-size: 300px 300px;
  // background-image: linear-gradient(0deg, #f1f1f1, #ffffff);
  // background-position: top center;
  // background-repeat: no-repeat;
  color: #222;
  font-size: 16px;
  font-family: sans-serif;
}

body {
  margin: 0;
}

a {
  color: currentColor;
}

h2 {
  width: fit-content;
  background-image: linear-gradient(90deg, #29b0c3, #abc329);
  background-clip: text;
  color: transparent;
}

hr {
  height: 2px;
  margin: 2rem 0;
  border: 0;
  border-radius: 100px;
  border: 3px solid #eee;
  background: #fff;
}

input, textarea {
  display: block;
  box-sizing: border-box;
  width: 100%;
  padding: 0.8rem 0.4rem;
  outline: none;
  border: 2px solid var(--textfield-border-color);
  border-radius: 0.2rem;
  font-size: 1rem;

  &:focus {
    border-color: var(--textfield-focus-border-color);
  }
}

.btn,
button {
  display: inline-block;
  box-sizing: border-box;
  margin: 0.4rem;
  padding: 0.8rem 2.2rem;
  background: var(--primary);
  border: 2px solid var(--primary);
  border-radius: 0.4rem;
  color: currentColor;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  transition: filter 0.3s, box-shadow 0.3s;
  text-align: center;

  &.active,
  &:hover {
    filter: brightness(1.1);
    // box-shadow: 0 0 10px var(--primary);
  }

  &.active {
    border-color: #0004;
  }

  &:disabled {
    pointer-events: none;
    filter: grayscale(80%) brightness(1.2);
  }

  &.outline {
    background: var(--white);
    color: var(--primary);

    &.active,
    &:hover {
      background: var(--primary);
      color: currentColor;
    }
  }

  &.secondary {
    background: var(--secondary);
    border: 2px solid var(--secondary);
  }

  &.outline.secondary {
    background: var(--white);
    color: var(--secondary);

    &.active,
    &:hover {
      background: var(--secondary);
      color: currentColor;
    }
  }

  &.tertiary {
    background: var(--tertiary);
    border: 2px solid var(--tertiary);
  }

  &.outline.tertiary {
    background: var(--white);
    color: var(--tertiary);

    &.active,
    &:hover {
      background: var(--tertiary);
      color: currentColor;
    }
  }

  &.small {
    padding: 0.2rem 1rem;
    font-size: 0.75rem;
  }
}

table {
  width: 100%;
  background: var(--white);
  border-collapse: separate;
  border-spacing: 0;
  text-align: center;

  th {
    background: var(--green);

    &:first-child {
      border-top-left-radius: 1rem;
    }

    &:last-child {
      border-top-right-radius: 1rem;
    }
  }

  th, td {
    padding: 0.8rem 1rem;
    border-right: 1px solid var(--green);
    border-bottom: 1px solid var(--green);
  }

  th:first-child,
  td:first-child {
    border-left: 1px solid var(--green);
  }

  tbody tr:last-child {
    td {
      &:first-child {
        border-bottom-left-radius: 1rem;
      }

      &:last-child {
        border-bottom-right-radius: 1rem;
      }
    }
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

.google-ad {
  margin: 2rem 0;
  
  // 隱藏沒顯示的google廣告
  ins[data-ad-status='unfilled'] {
    display: none !important;
  }
}

._test {
  .actions {
    text-align: center;

    @media (max-width: 767px) {
      button {
        display: block;
        width: 100%;
        margin: 0.4rem 0;
      }
    }
  }

  .answers {
    text-align: center;

    .answer-head {
      margin-bottom: 2rem;
      font-weight: bold;
    }
  }

  .result {
    margin-top: 2rem;
    color: var(--primary);
    font-size: 2rem;
    text-align: center;
  }

  .notice-list {
    padding: 1rem 0 1rem 2.4rem;
    background: var(--green);
    border-radius: 1rem;
    color: var(--white);
    font-weight: bold;
    line-height: 2;
  }

  .voc-list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;

    padding: 1rem 1.4rem;
    background: var(--green);
    border-radius: 1rem;
    color: var(--white);
    font-weight: bold;
    line-height: 2;

    @media (max-width: 991px) {
      grid-template-columns: 1fr 1fr 1fr;
    }

    @media (max-width: 767px) {
      grid-template-columns: 1fr 1fr;
    }
  }
}
</style>
