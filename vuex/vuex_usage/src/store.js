import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  // アプリケーション全体で使用されるデータの状態を管理するためのステート
  state: {
    // タスクの初期ステート
    // {} ではなく、[]
    tasks: [
      {
        id: 1,
        name: '牛乳を買う',
        done: false
      },
      {
        id: 2,
        name: 'Vue.jsの本を買う',
        done: true
      }
    ],
    nextTaskId: 3
  },
  // mutationsは、ステートを更新するためのもの
  mutations: {
    // addTaskミューテーションを定義
    // 第一引数に渡されたステートを更新する
    // 第二引数に
    // ミューテーションは直接は呼び出せず、store.commitにミューテーション名を与えて呼ぶ出す
    addTask (state, { name }) {
      state.tasks.push({
        id: state.nextTaskId,
        name,
        done: false
      })
      state.nextTaskId++
    },
    toggleTaskStatus (state, { id }) {
      const filtered = state.tasks.filter(task => {
        return task.id === id
      })
      filterd.forEach(task => {
        task.done = !task.done
      })
    }
  }
})

// ストアをエクスポート
export default store
