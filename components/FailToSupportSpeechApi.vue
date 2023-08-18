<template>
  <div
    v-if="failToSupportSpeechApi"
    class="alert"
  >
    * このブラウザはWeb Synthesis APIに対応していません。<br>
    * This browser does not support the Web Synthesis API.<br>
    * 該瀏覽器不支援 Web Synthesis API。
  </div>
</template>

<script setup>
const failToSupportSpeechApi = useState('failToSupportSpeechApi')
</script>