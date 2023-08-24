<template>
  <NuxtLayout name="default">
    <div class="main _test _custom">
      <FailToSupportSpeechApi />
      <NoJpVoiceFound />

      <div v-if="gameStatus !== 'playing'">
        <template v-if="gameStatus === 'end'">
          <h2>
            {{ title }} レベル{{ level }}の 練習結果
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
            下記はこのテーマ「{{ title }}」に入れた単語
          </h2>
          <div class="voc-list">
            <a
              v-for="(item, idx) in questions"
              :key="`custom_test_question_${idx}`"
              href="#"
              @click.prevent="speak(item, 1)"
            >
              {{ item }}
            </a>
          </div>
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

        <div class="google-ad">
          <!-- eslint-disable -->
          <component :is="'script'" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8209950884395919" crossorigin="anonymous"></component>
          <!-- Kikitori 測驗頁廣告 -->
          <ins class="adsbygoogle"
            style="display:block"
            data-ad-client="ca-pub-8209950884395919"
            data-ad-slot="8597565030"
            data-ad-format="auto"
            data-full-width-responsive="true"></ins>
          <component :is="'script'">
            (adsbygoogle = window.adsbygoogle || []).push({});
          </component>
          <!-- eslint-enable -->
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
const route = useRoute()
definePageMeta({
  layout: false
})

const pTitle = useState('pTitle')
pTitle.value = route.params.name
const wTitle = route.params.name + ' - 聞き取りゲーム'
const description = route.params.name + 'に関する聞き取りゲームをやりましょう'
useSeoMeta({
  title: wTitle,
  description,
  ogTitle: wTitle,
  ogDescription: description,
  twitterTitle: wTitle,
  twitterDescription: description,
})

const router = useRouter()
const gameStatus = ref(null)
const level = ref(1)
const count = ref(1)
const title = ref(null)
const questions = ref([])
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

function backToHome (showMsg = true) {
  if (showMsg) {
    alert('Not Found')
  }
  router.push('/')
}

function getSavedData () {
  if (route.params.name) {
    const lsName = 'saved_tests'
    const data = localStorage.getItem(lsName)

    if (!data) {
      backToHome()
      return
    }

    const tests = data ? JSON.parse(data) : []
    const current = tests.find(item => item.title === route.params.name)

    if (!current) {
      backToHome()
      return
    }

    title.value = current.title
    questions.value = current.questions

    if (questions.value.length < 4) {
      alert('少なくとも4つ異なる単語が必要です。')
      backToHome(false)
    }
  } else {
    backToHome()
  }
}

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

    const newAnswers = JSON.parse(JSON.stringify(questions.value))
      .sort(() => .5 - Math.random())
      .slice(0, 4)

    question.value = newAnswers[0]

    answers.value = newAnswers.sort(() => .5 - Math.random())
    answer.value = null
    speak(question.value, level.value)
  }
}

function replay () {
  speak(question.value, level.value)
}

function genText () {
  return questions.value[Math.floor(Math.random() * questions.value.length)]
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

onMounted(() => {
  getSavedData()
})
</script>
