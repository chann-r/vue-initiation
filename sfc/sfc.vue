<!-- 単一ファイルコンポーネント（1つのファイルに1つのコンポーネント） -->

<!-- テンプレートを書き込むブロック -->
<template>
  <p class="message">メッセージ：{{ msg }}</p>
</template>

<!-- 動的なUIを実装するためのブロック -->
<script>
// ライブラリや他のコンポーネントのインポートは import A from B

export default {
  data () {
    return { msg: 'こんにちは！' }
  }
}
</script>

<!-- スタイルを書くためのブロック -->
<style>
.message {
  color: #42b983;
}
</style>
