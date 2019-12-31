<!-- 実際に表示される内容のためのファイル App.vue -->

<template>
  <div>
    <h2>タスク一覧</h2>
    <ul>
      <li v-for="task in tasks" v-bind:key="task.id">
        <input type="checkbox" v-bind:checked="task.done">
        {{ task.name }}
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  // テンプレート内でストアで定義したステートを利用できるように
  // 算出プロパティでストアのステートを返すようにする
  computed: {
    tasks () {
      return this.$store.state.tasks // ストアを読む
    }
  }
}
</script>

<style lang="css" scoped>
</style>
