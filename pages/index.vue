<template>
  <div class="_index">
    <div class="banners">
      <Carousel
        :items="1"
        :dots="true"
        :nav="false"
        :autoplay="4000"
        :responsive="{ 991: { items: 2 } }"
      >
        <img
          v-for="i in 4"
          :key="`index_banner_${i}`"
          alt="Kikitori"
          class="banner"
          :src="`/images/index_banner_${i}.jpg`"
        >
      </Carousel>
    </div>

    <div class="main">
      <FailToSupportSpeechApi />
      <NoJpVoiceFound />

      <h2>
        練習テーマ
      </h2>
      <nav class="main-menu">
        <NuxtLink
          to="/hiduke"
          class="btn"
        >
          日付
        </NuxtLink>
        <NuxtLink
          to="/youbi"
          class="btn"
        >
          曜日
        </NuxtLink>
        <NuxtLink
          to="/jikoku"
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
          class="btn add-btn"
        >
          + テーマ
        </NuxtLink>
      </nav>

      <div class="google-ad">
        <!-- eslint-disable -->
        <component :is="'script'" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8209950884395919" crossorigin="anonymous"></component>
        <!-- Kikitori 首頁廣告 -->
        <ins class="adsbygoogle"
          style="display:block"
          data-ad-client="ca-pub-8209950884395919"
          data-ad-slot="4250291761"
          data-ad-format="auto"
          data-full-width-responsive="true"></ins>
        <component :is="'script'">
          (adsbygoogle = window.adsbygoogle || []).push({});
        </component>
        <!-- eslint-enable -->
      </div>

      <hr>

      <h2>
        「聞き取りゲーム」について
      </h2>
      <p>
        聞き取りゲームは「Web Synthesis API」という音声技術を活用したWebアプリケーションです。昼夜を問わず、日本語の練習をしたいときに練習できます。
      </p>
      <p>
        上記の「時間」や「数字」などが練習のテーマです。まずは一つリンクをクリックして練習しましょう。他のテーマを練習したい場合、「+ テーマ」をクリックして、自分のテーマを作ってください。
      </p>
      <p>
        それでは、早速練習を始めましょう！
      </p>

      <hr>

      <h2>FAQ</h2>
      <h3>If you can't hear the sound</h3>
      <ol>
        <li>iOS users please go to "Settings -> Accessibility -> Spoken content -> Voices -> Japanese" to download the voice data.</li>
        <li>Android users please go to "Settings -> Accessbility -> Text-to-speech output -> Setting Icon next to "Preferred engine" -> Install voice data" to download Japanese voice data and restart your browser.</li>
      </ol>

      <h3>若是無法聽見聲音</h3>
      <ol>
        <li>iOS的使用者請至「設定 -> 輔助使用 -> 語音內容 -> 聲音 -> 日文」下載日文語音檔。</li>
        <li>Android的使用者請至「設定 -> 協助工具 -> 文字轉語音輸出 -> 點選偏好的引擎右方的設定按鈕 -> 安裝語音資料」下載日文語音檔，並重新啟動瀏覽器。</li>
      </ol>
    </div>
  </div>
</template>

<script setup>
const pTitle = useState('pTitle')
pTitle.value = ''
const title = '聞き取りゲーム'
const description = '聞き取りゲームは「Web Synthesis API」という音声技術を活用したWebアプリケーションです。じゃ、すぐ一緒に遊びましょう！'
useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  twitterTitle: title,
  twitterDescription: description,
})

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
._index {
  a {
    text-decoration: none;

    &:hover {
      text-decoration: initial;
    }
  }

  .banners {
    img {
      display: block;
      width: 100%;
      height: auto;
      aspect-ratio: 1024 / 700;
    }
  }

  .main-menu {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 0.8rem;
    word-break: break-all;

    .btn {
      margin: 0;
      padding: 0.8rem 0rem;
      font-size: 1.2rem;
    }
  }
}
</style>