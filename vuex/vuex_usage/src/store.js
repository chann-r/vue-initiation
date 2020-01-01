import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  // アプリケーション全体で使用されるデータの状態を管理するためのステート
  state: {
    // タスクの初期ステート
    // {}はオブジェクトの生成、[]は配列の生成
    tasks: [
      {
        id: 1,
        name: '牛乳を買う',
        labelIds: [1, 2],
        done: false
      },
      {
        id: 2,
        name: 'Vue.jsの本を買う',
        labelIds: [1, 3],
        done: true
      }
    ],
    nextTaskId: 3,
    labels: [
      {
        id: 1,
        text: '買い物',
        done: false
      },
      {
        id: 2,
        text: '食料',
        done: false
      },
      {
        id: 3,
        text: '本',
        done: false
      }
    ],
    nextLabelId: 4
  },
  // mutationsは、ステートを更新するためのもの
  mutations: {
    // 第一引数に渡されたステートを更新する
    // 第二引数には中身に渡すものを入れる
    // 第二引数にnameオブジェクトを渡す（{}は、オブジェクトの作成）
    // タスクを追加するミューテーション
    addTask (state, { name }) {
      state.tasks.push({
        id: state.nextTaskId,
        name,
        done: false
      })
      state.nextTaskId++
    },
    // タスクの完了状態を更新するミューテーション
    toggleTaskStatus (state, { id }) {
      // filterメソッドにアロー関数を渡す
      const filtered = state.tasks.filter(task => {
        return task.id === id
      })
      filtered.forEach(task => {
        task.done = !task.done
      })
    },
    addLabel (state, { text }) {
      state.labels.push({
        id: state.nextLabelId,
        text,
        done: false
      })
      state.nextLabelId++
    }
  }
})

// ストアをエクスポート
export default store
