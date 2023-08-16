<template>
  <div class="_add">
    <h2>
      新しい練習を作ろう！
    </h2>
    <hr>
    <div class="grid">
      <div class="list">
        <h3>
          保存したテーマ
        </h3>
        <div
          v-if="!tests.length"
          class="alert"
        >
          データがありません
        </div>
        <div
          v-for="(test, idx) in tests"
          :key="`test_${idx}`"
          class="item"
          :class="{ active: idx === selectedIdx }"
          @click="setSelected(idx)"
        >
          {{ test.title }}
          <button
            type="button"
            class="small outline secondary"
            @click.stop="remove(idx)"
          >
            削除
          </button>
        </div>
        <hr>
      </div>
      <div
        ref="content"
        class="content"
      >
        <form @submit.prevent="save()">
          <h3 v-if="selectedIdx !== null">
            テーマ「{{ title }}」を編集
          </h3>
          <h3 v-else>
            新しいテーマを編集
          </h3>
          <div class="item">
            <label>テーマ</label>
            <input
              v-model="title"
              required
            >
          </div>
          <div class="item">
            <label>単語（改行で単語を区切ってください）</label>
            <textarea
              v-model="questions"
              required
            />
          </div>
          <div class="actions">
            <button
              v-if="selectedIdx !== null"
              type="button"
              class="outline"
              @click="addNew()"
            >
              新しいのを作る
            </button>
            <button>
              保存
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
const tests = ref([])
const selectedIdx = ref(null)
const title = ref(null)
const questions = ref(null)
const lsName = 'saved_tests'
const content = ref(null) // same as vue2 this.$refs.content

function getSavedData () {
  const data = localStorage.getItem(lsName)
  tests.value = data ? JSON.parse(data) : []
}

function setSavedData () {
  localStorage.setItem(lsName, JSON.stringify(tests.value))
  window.dispatchEvent(new Event('saved_test_updated'))
}

function setSelected (i) {
  selectedIdx.value = i
  title.value = tests.value[i].title
  questions.value = tests.value[i].questions.join('\r')
  const scroll = window.scrollY + content.value.getBoundingClientRect().y - 100
  window.scrollTo(0, scroll)
}

function addNew () {
  selectedIdx.value = null
  title.value = null
  questions.value = null
}

function save () {
  const saveTitle = title.value.replace(/^\s+|\s+$/g, '')

  console.log(selectedIdx.value)

  if (
    selectedIdx.value === null &&
    tests.value.find(item => item.title === saveTitle)
  ) {
    alert('保存に失敗しました。すでに同じテーマがあります。')
    return
  }

  // 用換行分隔，濾掉空的
  const saveQuestions = [...new Set(questions.value.split(/\r|\n/g).filter(item => !!item))]

  if (saveQuestions.length < 4) {
    alert('保存に失敗しました。少なくとも4つ異なる単語が必要です。')
    return
  }

  saveQuestions.forEach((item, idx) => {
    saveQuestions[idx] = saveQuestions[idx].replace(/^\s+|\s+$/g, '')
  })

  if (!isNaN(selectedIdx.value) && selectedIdx.value !== null) {
    tests.value[selectedIdx.value] = {
      title: saveTitle,
      questions: saveQuestions
    }
  } else {
    tests.value.push({
      title: saveTitle,
      questions: saveQuestions
    })
    selectedIdx.value = tests.value.length - 1
  }

  setSavedData()

  alert('保存しました')
}

function remove (idx) {
  if (confirm('Are you sure')) {
    tests.value.splice(idx, 1)
    setSavedData()
  }
}

useHead({
  title: '編集 - 聞き取りゲーム',
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' },
    { name: 'description', content: '自分のテーマを編集' }
  ]
})

onMounted(() => {
  getSavedData()
})
</script>

<style lang="scss">
._add {
  .grid {
    display: grid;
    grid-gap: 4rem;
    grid-template-columns: 200px 1fr;

    @media (max-width: 575px) {
      grid-gap: 0;
      grid-template-columns: 1fr;
    }

    .list {
      .item {
        display: grid;
        grid-template-columns: 1fr auto;
        align-items: center;
        padding-left: 0.4rem;
      }

      .active {
        background: #fff2;
      }

      .actions {
        text-align: center;
      }
    }

    .content {
      .item {
        margin: 1rem 0;
      }

      label {
        display: block;
        margin-bottom: 1rem;
      }

      textarea {
        height: 10rem;
      }

      .actions {
        text-align: right;
      }
    }
  }
}
</style>
