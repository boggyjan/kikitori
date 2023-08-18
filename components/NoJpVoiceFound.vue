<template>
  <div
    v-if="noJpVoiceFound"
    class="alert"
  >
    <div class="title">If you can't hear the sound</div>
    <ol>
      <li>iOS users please go to "Settings -> Accessibility -> Spoken content -> Voices -> Japanese" to download the voice data.</li>
      <li>Android users please go to "Settings -> Accessbility -> Text-to-speech output -> Setting Icon next to "Preferred engine" -> Install voice data" to download Japanese voice data and restart your browser.</li>
    </ol>

    <div class="title">若是無法聽見聲音</div>
    <ol>
      <li>iOS的使用者請至「設定 -> 輔助使用 -> 語音內容 -> 聲音 -> 日文」下載日文語音檔。</li>
      <li>Android的使用者請至「設定 -> 協助工具 -> 文字轉語音輸出 -> 點選偏好的引擎右方的設定按鈕 -> 安裝語音資料」下載日文語音檔，並重新啟動瀏覽器。</li>
    </ol>
  </div>
</template>

<script setup>
const noJpVoiceFound = useState('noJpVoiceFound')
</script>