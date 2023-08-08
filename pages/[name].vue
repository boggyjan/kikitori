<template>
  <div class="_custom">
    <div v-if="gameStatus !== 'playing'">
      <template v-if="gameStatus === 'end'">
        <h2>
          練習結果
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
            たくさん聞けますね！
          </template>
          <template v-else>
            もっと頑張ってください。
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
        <div class="action-head">
          <template v-if="gameStatus === null">
            始めましょう！
          </template>
          <template v-else>
            もう一度しましょう！
          </template>
        </div>

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
        <div class="answer-head">
          正しい答えを選んでください
        </div>
        <button
          v-for="(ans, idx) in answers"
          :key="`ans_${idx}`"
          type="button"
          class="ans"
          :class="{ active: answer === ans }"
          @click="setAns(ans)"
        >
          {{ ans }}
        </button>
      </div>

      <hr>

      <div class="actions">
        <button
          type="button"
          class="outline"
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
const route = useRoute()
const router = useRouter()

function backToHome () {
  alert('Not Found')
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
  } else {
    backToHome()
  }
}
onMounted(() => {
  getSavedData()
})

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

    question.value = genText()

    const newAnswers = []
    newAnswers.push(question.value)
    newAnswers.push(genText())
    newAnswers.push(genText())
    newAnswers.push(genText())
    newAnswers.sort(() => Math.random() - 0.5)

    answers.value = newAnswers
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
  const pitch = Math.random() * 1.5
  utterance.lang = 'ja-JP'
  utterance.rate = rate
  utterance.pitch = pitch
  utterance.volume = 1
  speechSynthesis.speak(utterance)
}
</script>

<style lang="scss">
._custom {
  .voc-list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;

    @media (max-width: 991px) {
      grid-template-columns: 1fr 1fr 1fr;
    }

    @media (max-width: 767px) {
      grid-template-columns: 1fr 1fr;
    }

    a {
      padding: 1rem;
      border: 1px solid #fff2;
      border-collapse: collapse;
    }
  }

  .actions {
    text-align: center;

    .action-head {
      margin-bottom: 2rem;
      font-weight: bold;
    }

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

  .ans {
    &.active {
      border-color: #fff;
    }
  }

  table {
    width: 100%;
    border-collapse: collapse;
    border: 1px solid var(--primary);
    text-align: center;

    th {
      background: var(--primary);
    }

    th, td {
      padding: 0.4rem 1rem;
      border: 1px solid var(--primary);
    }
  }

  .result {
    margin-top: 2rem;
    color: var(--primary);
    font-size: 2rem;
    text-align: center;
  }
}
</style>
