<template>
  <p class="message">{{ msg }}</p>
</template>

<script>
export default {
  data () {
    return { msg: 'こんにちは！'}
  }
}
</script>

<!-- scoped属性を付与して、
この単一ファイルコンポーネント内の要素にのみ適用するカプセル化を実現 -->
<style scoped>
.message {
  color: #42b983
}
</style>
