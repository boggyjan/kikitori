<template>
  <NuxtLayout name="default">
    <div class="main _test _jikan">
      <FailToSupportSpeechApi />
      <NoJpVoiceFound />

      <div v-if="gameStatus !== 'playing'">
        <template v-if="gameStatus === 'end'">
          <h2>
            時刻 レベル{{ level }}の 練習結果
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
            <li>「1分」は「いっぷん」</li>
            <li>「3分」は「さんぷん、さんふん」</li>
            <li>「4分」は「よんぷん、よんふん」</li>
            <li>「4時」は「よじ」</li>
            <li>「6分」は「ろっぷん」</li>
            <li>「7分」は「ななふん」</li>
            <li>「8分」は「はっぷん、はちふん」</li>
            <li>「10分」は「じゅっぷん」</li>
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
pTitle.value = '時刻'
const title = '時刻 - 聞き取りゲーム'
const description = '時刻に関する聞き取りゲームをやりましょう'
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

    const time = genTime()

    question.value = time

    const newAnswers = []
    newAnswers.push(question.value)

    for (let i = 0; i < 3; i++) {
      const data = time.split(/時|分/g).map(item => parseInt(item))
      const changeHour = Math.random() > 0.7
      const hours = changeHour ? randomBut(24, data[0]) : data[0]
      const minutes = changeHour ? data[1] : randomBut(60, data[1])
      newAnswers.push(hours + '時' + minutes + '分')
    }

    newAnswers.sort(() => Math.random() - 0.5)

    answers.value = newAnswers
    answer.value = null
    speak(question.value, level.value)
  }
}

function randomBut (r, b) {
  let num = b

  while (num === b) {
    num = Math.floor(Math.random() * r)
  }

  return num
}

function replay () {
  speak(question.value, level.value)
}

function genTime () {
  const hours = Math.floor(Math.random() * 24)
  const minutes = Math.floor(Math.random() * 60)
  return hours + '時' + minutes + '分'
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
