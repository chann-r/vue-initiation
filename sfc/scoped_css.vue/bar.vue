<template>
  <div class="bar">
    <h1 class="header">Barコンポーネント</h1>
    <p>これはBarコンポーネントです。</p>
    <!-- インポートして登録したFooコンポーネントを利用 -->
    <foo></foo>

  </div>
</template>

<script>
// foo.vueのコンポーネントをインポート（インポートしてFooコンポーネントと名付ける）
import Foo from './foo'
export default {
  // Fooコンポーネントをこのファイルのコンポーネントに登録
  components: { Foo }
}
</script>

<style scoped>
.bar {
  border: 1px solid red;
  margin: 4px;
  padding: 4px;
}

.header {
  font-size: 125%;
}
</style>
