<!-- 実際に表示される内容のためのファイル App.vue -->

<template>
  <div>
    <h2>タスク一覧</h2>
    <ul>
      <li v-for="task in tasks" v-bind:key="task.id">
        <!-- changeイベントによってtoggleTaskStatusミューテーションを呼び出す -->
        <input type="checkbox" v-bind:checked="task.done" v-on:change="toggleTaskStatus(task)">
        {{ task.name }}
      </li>
    </ul>
    <form v-on:submit.prevent="addTask">
      <input type="text" v-model="newTaskName" placeholder="新しいタスク">

    </form>
  </div>
</template>


<script>
export default {
  data () {
    return {
      newTaskName: ''
    }
  },
  // テンプレート内でストアで定義したステートを利用できるように
  // 算出プロパティでストアのステートを返すようにする
  computed: {
    tasks () {
      return this.$store.state.tasks // ストアを読む
    }
  },
  methods: {
    addTask () {
      this.$store.commit('addTask', {
        name: this.newTaskName
      })
      this.newTaskName = ''
    },
    toggleTaskStatus (task) {
      this.$store.commit('toggleTaskStatus', {
        id: task.id
      })
    }
  }
}
</script>
