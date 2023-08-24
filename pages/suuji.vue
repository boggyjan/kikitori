<template>
  <NuxtLayout name="default">
    <div class="main _test _suuji">
      <FailToSupportSpeechApi />
      <NoJpVoiceFound />

      <div v-if="gameStatus !== 'playing'">
        <template v-if="gameStatus === 'end'">
          <h2>
            数字 レベル{{ level }}の 練習結果
          </h2>
          <table>
            <thead>
              <tr>
                <th>問題</th>
                <th>答え</th>
                <th>結果</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(q, idx) in questionHistory"
                :key="`question_history_${idx}`"
              >
                <td>
                  <a
                    href="#"
                    @click.prevent="speak(q.question, 1)"
                  >
                    {{ q.question }}
                  </a>
                </td>
                <td>
                  <a
                    href="#"
                    @click.prevent="speak(q.answer, 1)"
                  >
                    {{ q.answer }}
                  </a>
                </td>
                <td>{{ q.question === q.answer ? '⭕️' : '❌' }}</td>
              </tr>
            </tbody>
          </table>
          <div class="result">
            正解率
            {{ rightPercent }}
            %

            <template v-if="rightPercent > 98">
              素晴らしい！👍
            </template>
            <template v-else-if="rightPercent > 80">
              上手になったね！
            </template>
            <template v-else-if="rightPercent > 70">
              よくできたね！
            </template>
            <template v-else-if="rightPercent > 60">
              だんだんできたね！
            </template>
            <template v-else>
              もっと頑張ってね。
            </template>
          </div>
        </template>
        <template v-else>
          <h2>
            注意すべきところ
          </h2>
          <ul class="notice-list">
            <li>「300」は「さんびゃく」</li>
            <li>「600」は「ろっぴゃく」</li>
            <li>「800」は「はっぴゃく」</li>
            <li>「1000」は「せん」</li>
            <li>「3000」は「さんぜん」</li>
            <li>「8000」は「はっせん」</li>
          </ul>
        </template>

        <hr>

        <div class="actions">
          <h2>
            <template v-if="gameStatus === null">
              始めましょう！
            </template>
            <template v-else>
              もう一度しましょう！
            </template>
          </h2>

          <button
            type="button"
            @click="start(1)"
          >
            レベル一
          </button>
          <button
            type="button"
            @click="start(2)"
          >
            レベル二
          </button>
          <button
            type="button"
            @click="start(3)"
          >
            レベル三
          </button>
        </div>
      </div>

      <div v-else-if="gameStatus === 'playing'">
        <div class="answers">
          <h3 class="answer-head">
            正しい答えを選んでください
          </h3>
          <button
            v-for="(ans, idx) in answers"
            :key="`ans_${idx}`"
            type="button"
            class="tertiary ans"
            :class="{ outline: answer !== ans }"
            @click="setAns(ans)"
          >
            {{ ans }}
          </button>
        </div>

        <hr>

        <div class="actions">
          <button
            type="button"
            class="secondary outline"
            @click="replay()"
          >
            もう一度聞く
          </button>
          <button
            type="button"
            :disabled="!answer"
            @click="next()"
          >
            次へ
          </button>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
definePageMeta({
  layout: false
})

const pTitle = useState('pTitle')
pTitle.value = '数字'
const title = '数字 - 聞き取りゲーム'
const description = '数字に関する聞き取りゲームをやりましょう'
useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  twitterTitle: title,
  twitterDescription: description,
})

const gameStatus = ref(null)
const level = ref(1)
const count = ref(1)
// 題目
const question = ref(null)
// 答案選擇項目
const answers = ref([])
// 使用者選擇的答案
const answer = ref(null)
// 紀錄每一題的作答
const questionHistory = ref([])
const maxQuestionCount = 6

const rightPercent = computed(() => Math.floor(questionHistory.value.filter(q => q.question === q.answer).length / questionHistory.value.length * 100))

function start (lv) {
  count.value = 0
  level.value = lv
  questionHistory.value = []
  answer.value = null
  gameStatus.value = 'playing'

  next()
}

function setAns (ans) {
  answer.value = ans
}

function next () {
  if (answer.value) {
    questionHistory.value.push({
      question: question.value,
      answer: answer.value
    })
  }

  if (count.value >= maxQuestionCount + (level.value - 1) * 2) {
    gameStatus.value = 'end'
  } else {
    count.value++

    const num = genNumber()
    question.value = num.toString()

    const newAnswers = []
    newAnswers.push(num.toString())

    for (let i = 0; i < 3; i++) {
      const diff = Math.floor(num / 10 * (Math.random() - 0.5))
      newAnswers.push(num + diff)
    }
    newAnswers.sort(() => Math.random() - 0.5)

    answers.value = newAnswers
    answer.value = null
    speak(question.value, level.value)
  }
}

function replay () {
  speak(question.value, level.value)
}

function genNumber () {
  return Math.floor(Math.random() * 1000 * Math.pow(10, level.value))
}

function speak (text, lv) {
  const voices = speechSynthesis.getVoices().filter(item => item.lang === 'ja_JP' || item.lang === 'ja-JP' || item.lang === 'ja')

  if (!voices.length) {
    alert('Japanese voice data not found.')
    const noJpVoiceFound = useState('noJpVoiceFound')
    noJpVoiceFound.value = true
    window.scrollTo(0, 0)
  }

  const utterance = new SpeechSynthesisUtterance(text)
  // 0.1~1 適合 // 0.1-10 max
  const rate = lv === 1
    ? 0.7
    : lv === 2
      ? Math.random() * 0.25 + 0.8
      : lv === 3
        ? Math.random() * 0.5 + 1
        : 0.1
  // 0~1.5 適合// 0~2 max
  const pitch = Math.random() * 1 + 0.5
  utterance.lang = 'ja-JP'
  utterance.rate = rate
  utterance.pitch = pitch
  // utterance.volume = 100
  utterance.voice = voices[Math.floor(Math.random() * voices.length)]

  speechSynthesis.cancel()
  speechSynthesis.speak(utterance)
}
</script>
