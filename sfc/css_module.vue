<!-- スタイルのモジュール化 -->

<template>
  <!-- class属性の指定にv-bindを使う -->
  <!-- クラス名は、算出プロパティ$styleによってJavaScriptで
  参照可能なスタイル識別子オブジェクトに変換 -->
  <p v-bind:class="$style.message">こんにちは！</p>
</template>

<script>
export default {
}
</script>

<!-- スタイルのモジュール化 -->
<style module>
.message {
  color: #42b983;
}
</style>
