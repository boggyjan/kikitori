<template>
  <div class="_add">
    <h2>
      新しいテストを作ろう！
    </h2>
    <hr>
    <div class="grid">
      <div class="list">
        <h3>
          保存したテーマ
        </h3>
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
            class="small outline"
            @click.stop="remove(idx)"
          >
            削除
          </button>
        </div>

        <hr>

        <div class="actions">
          <button
            v-if="selectedIdx !== null"
            type="button"
            @click="addNew()"
          >
            新しいのを作る
          </button>
        </div>
      </div>
      <div class="content">
        <form @submit.prevent="save()">
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

function getSavedData () {
  const data = localStorage.getItem(lsName)
  tests.value = data ? JSON.parse(data) : []
}

function setSavedData () {
  localStorage.setItem(lsName, JSON.stringify(tests.value))
}

function setSelected (i) {
  selectedIdx.value = i
  title.value = tests.value[i].title
  questions.value = tests.value[i].questions.join('\r')
}

function addNew () {
  selectedIdx.value = null
  title.value = null
  questions.value = null
}

function save () {
  const saveTitle = title.value.replace(/^\s+|\s+$/g, '')
  const saveQuestions = questions.value.split(/\r|\n/g)
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
  }

  setSavedData()
}

function remove (idx) {
  if (confirm('Are you sure')) {
    tests.value.splice(idx, 1)
    setSavedData()
  }
}

onMounted(() => {
  getSavedData()
})
</script>

<style lang="scss">
._add {
  .grid {
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: 200px 1fr;

    @media (max-width: 575px) {
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

      input,
      textarea {
        display: block;
        width: 100%;
      }

      textarea {
        height: 200px;
      }

      .actions {
        text-align: right;
      }
    }
  }
}
</style>
