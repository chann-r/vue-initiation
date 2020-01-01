<!-- 実際に表示される内容のためのファイル App.vue -->

<template>
  <div>
    <h2>タスク一覧</h2>
    <ul>
      <li v-for="task in tasks" v-bind:key="task.id">
        <!-- changeイベントによってtoggleTaskStatusメソッドを呼び出す -->
        <input type="checkbox" v-bind:checked="task.done" v-on:change="toggleTaskStatus(task)">
        {{ task.name }}：
        <span v-for="id in task.labelIds" v-bind:key="id">
          <!-- それぞれのタスクのlabelIdsに格納されているラベルが出力される -->
          {{ getLabelText(id) }}
        </span>
      </li>
    </ul>
    <!-- .preventでフォーム送信後の画面更新を避ける -->
    <form v-on:submit.prevent="addTask">
      <input type="text" v-model="newTaskName" placeholder="新しいタスク">
    </form>

    <h2>ラベル一覧</h2>
     <ul>
      <li v-for="label in labels" v-bind:key="label.id">
        <!-- v-modelでnewTasklabelIdsを指定しているので、
        addTaskするときにチェックされているラベルのidはlabelIdsに格納される。
        その後、getLabelTextでラベルが出力される-->
        <input type="checkbox" v-bind:value="label.id" v-model="newTasklabelIds">
        {{ label.text }}
      </li>
    </ul>
    <form v-on:submit.prevent="addLabel">
      <input type="text" v-model="newLabelText" placeholder="新しいラベル">
    </form>

    <h2>ラベルでフィルター</h2>
    <ul>
      <li v-for="label in labels" v-bind:key="label.id">
        <input type="radio" v-bind:checked="label.id === filter" v-on:changed="changeFilter(label.id)">
        {{ label.text }}
      </li>
      <li>
        <input type="radio" v-bind:checked="filter === null" v-on:changed="changeFilter(null)">
        フィルタしない
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // フォームに入力した新しいタスク名
      newTaskName: '',
      // 新しいタスクのラベル
      newTasklabelIds: [],
      // フォームに入力した新しいラベル名
      newLabelText: ''
    }
  },
  // ストアで定義したステートをテンプレート内で利用できるように
  // 算出プロパティでストアのステートを返すようにする
  computed: {
    tasks () {
      // return this.$store.state.tasks, // ストアを読む
      return this.$store.getters.filteredTasks
    },
    labels () {
      return this.$store.state.labels
    },
    filter () {
      return this.$store.state.filter
    }
  },
  methods: {
    // ミューテーションを呼び出すメソッド
    addTask () {
      // ミューテーションは直接は呼び出せず、
      // store.commitにミューテーション名を与えて呼ぶ出す
      this.$store.commit('addTask', {
        name: this.newTaskName,
        // チェックされているラベルをlabelIdsに格納
        labelIds: this.newTasklabelIds
      })
      // 送信後のフォームを空にする
      this.newTaskName = ''
      this.newTasklabelIds = []
    },
    toggleTaskStatus (task) {
      this.$store.commit('toggleTaskStatus', {
        id: task.id
      })
    },
    addLabel () {
      this.$store.commit('addLabel', {
        text: this.newLabelText
      })
      this.newLabelText = ''
    },
    // ラベルのIDからそのラベルのテキストを返すメソッド
    getLabelText (id) {
      const label = this.labels.filter(label => label.id === id)[0]
      return label ? label.text : ''
    },
    changeFilter (labelId) {
      this.$store.commit('changeFilter', {
        filter: labelId
      })
    }
  }
}
</script>
