<template>
  <div class="_jikan">
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
            <tr v-for="(q, idx) in questionHistory">
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
          注意すべきところ
        </h2>
        <ul>
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

const rightPercent = computed(() => Math.floor(questionHistory.value.filter(q => q.question == q.answer).length / questionHistory.value.length * 100))

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
    newAnswers.push(genText(question.value))
    newAnswers.push(genText(question.value))
    newAnswers.push(genText(question.value))
    newAnswers.sort(() => Math.random() - 0.5)

    answers.value = newAnswers
    answer.value = null
    speak(question.value, level.value)
  }
}

function replay () {
  speak(question.value, level.value)
}

function getTrickNum (by, isDiff) {
  const trickNums = {
    0: [0, 2, 5],
    1: [1, 7, 8],
    2: [2, 4, 6],
    3: [3, 7, 8],
    4: [1, 4, 7],
    5: [5, 6, 9],
    6: [5, 6, 9],
    7: [1, 7, 8],
    8: [1, 7, 8],
    9: [5, 6, 9]
  }

  const trickHs = trickNums[by]
  let trickH = trickHs[Math.floor(Math.random() * trickHs.length)]

  if (isDiff) {
    while (trickH === by) {
      trickH = trickHs[Math.floor(Math.random() * trickHs.length)]
    }
  }

  return trickH
}


function getTrickHours (...hours) {
  const h = hours[hours.length > 1 ? 1 : 0]

  hours[hours.length > 1 ? 1 : 0] = getTrickNum(h)

  while (parseInt(hours.join('')) > 23) {
    hours[hours.length > 1 ? 1 : 0] = getTrickNum(h)
  }

  return hours.join('')
}

function getTrickMinutes (...minutes) {
  const m = minutes[minutes.length > 1 ? 1 : 0]
  minutes[minutes.length > 1 ? 1 : 0] = getTrickNum(m, true)
  return minutes.join('')
}

function genText (near) {
  if (near) {
    const date = near.split(/時|分/g)
    const hours = getTrickHours(...date[0].split('').map(i => parseInt(i)))
    const minutes = getTrickMinutes(...date[1].split('').map(i => parseInt(i)))
    return hours + '時' + minutes + '分'
  } else {
    const hours = Math.floor(Math.random() * 24)
    const minutes = Math.floor(Math.random() * 60)
    return hours + '時' + minutes + '分'
  }
}

function speak (text, lv) {
  const utterance = new SpeechSynthesisUtterance(text)
  // 0.1~1 適合 // 0.1-10 max
  const rate = lv === 1 ? 0.7
    : lv === 2 ? Math.random() * 0.25 + 0.8
    : lv === 3 ? Math.random() * 0.5 + 1
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
._jikan {
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
