<!-- スタイルのモジュール化で同名のスタイル名がある際に、
スタイルの上書きを防ぐための名前付きスタイル識別子の算出プロパティ -->

<!-- クラス名に算出プロパティを指定し、
算出プロパティではスタイルのモジュールの中のプロパティを返すことで、
クラスと算出プロパティ経由でスタイルを指定 -->

<template>
  <!-- novalidate属性は、フォームの入力内容の検証を無効にする -->
  <form novalidate>
    <!-- クラス名に算出プロパティを指定 -->
    <p v-bind:class="alertValidation">{{ validMessage }}</p>
    <!-- inputイベントによって、onInputメソッドを呼ぶ -->
    <textarea v-bind:class="textboxValidation" v-on:input="onInput"></textarea>
  </form>
</template>

<script>
export default {
  data () {
    return {
      valid: false
    }
  },
  // 算出プロパティ
  computed: {
    validMessage () {
      // this.validがtrueなら前者、falseなら後者を返す
      return this.valid ? '入力されています' : '入力されていません'
    },
    // 算出プロパティの返り値をスタイルのモジュールの中のプロパティにする
    alertValidation () {
      return this.valid ? this.alert.success : this.alert.error
    },
    textboxValidation () {
      return this.valid ? this.textbox.success : this.textbox.error
    }
  },
  methods: {
    // 引数の文字数が0より大きいかどうかで論理値を返すメソッド
    isRequired (value) {
      return value.length > 0
    },
    // フォームの文字数が0より大きいときにvalidをtrueにするメソッド
    onInput (e) {
      // フォーム名.targetでフォームを設定できる
      this.valid = this.isRequired(e.target.value)
    }
  }
}
</script>

<!-- スタイルのモジュール名 -->
<style module="alert">
.success {
  color: green;
}

.error {
  color: red;
  font-weight: bold;
}
</style>

<style module="textbox">
.success {
  border: solid 2px green;
}

.error {
  border: solid 2px red;
}
</style>
