<template>
  <div class="main _test _jikan">
    <FailToSupportSpeechApi />
    <NoJpVoiceFound />

    <div v-if="gameStatus !== 'playing'">
      <template v-if="gameStatus === 'end'">
        <h2>
          曜日 レベル{{ level }}の 練習結果
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
                  @click.prevent="speak(q.fullQuestion, 1)"
                >
                  {{ q.fullQuestion }}
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
          <li>「月曜日」は「げつようび」</li>
          <li>「火曜日」は「かようび」</li>
          <li>「水曜日」は「すいようび」</li>
          <li>「木曜日」は「もくようび」</li>
          <li>「金曜日」は「きんようび」</li>
          <li>「土曜日」は「どようび」</li>
          <li>「日曜日」は「にちようび」</li>
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
</template>

<script setup>
const gameStatus = ref(null)
const level = ref(1)
const count = ref(1)
// 題目
const fullQuestion = ref(null)
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
      fullQuestion: fullQuestion.value,
      question: question.value,
      answer: answer.value
    })
  }

  if (count.value >= maxQuestionCount + (level.value - 1) * 2) {
    gameStatus.value = 'end'
  } else {
    count.value++

    const jikann = ['先一昨日', 'おととい', '昨日', '今日', '明日', 'あさって', 'しあさって']
    const day = ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日']

    const begin = Math.floor(Math.random() * 7)
    const realBegin = begin - 3
    let goal = begin

    while(goal === begin) {
      goal = Math.floor(Math.random() * 7)
    }

    const realGoal = goal - 3

    // 組成：[今日(begin)]は[日曜日(beginDay)]です。では、[明日(goal)]は何曜日ですか？

    const beginDay = Math.floor(Math.random() * 7)
    const fullText = `${jikann[begin]}は${day[beginDay]}です。では、${jikann[goal]}は何曜日ですか？`
    const goalDay = (beginDay + realGoal - realBegin + 14) % 7
    // console.log(fullText, goalDay, day[goalDay])

    fullQuestion.value = fullText
    question.value = day[goalDay]

    const newAnswers = []
    newAnswers.push(question.value)

    const days = day.filter(item => item !== day[goalDay])
    days.sort(() => Math.random() - 0.5)
    newAnswers.push(days[0])
    newAnswers.push(days[1])
    newAnswers.push(days[2])
    newAnswers.sort(() => Math.random() - 0.5)
    // console.log(days)

    answers.value = newAnswers
    answer.value = null
    speak(fullQuestion.value, level.value)
  }
}

function replay () {
  speak(fullQuestion.value, level.value)
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

const pTitle = useState('pTitle')
pTitle.value = '曜日'
const title = '曜日 - 聞き取りゲーム'
const desc = '曜日に関する聞き取りゲームをやりましょう'
const url = 'https://kikitori.boggy.tw'
const image = 'https://kikitori.boggy.tw/images/share.jpg'
useHead({
  title,
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' },
    { name: 'description', content: desc },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', desc },
    { name: 'twitter:image', content: image },
    { name: 'og:type', content: 'website' },
    { name: 'og:title', content: title },
    { name: 'og:description', content: desc },
    { name: 'og:image', content: image },
    { name: 'og:url', content: url },
    { name: 'og:site_name', content: 'iDrip' }
  ]
})
</script>
