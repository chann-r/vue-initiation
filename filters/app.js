var items = [
  {
    name: '鉛筆',
    price: 300,
    quantity: 0
  },
  {
    name: 'ノート',
    price: 400,
    quantity: 0
  },
  {
    name: '消しゴム',
    price: 100,
    quantity: 0
  }
]

var vm = new Vue({
  el: '#app',
  data: {
    item: items
  },
  // フィルタは、テキストフォーマット処理を適用するオプション
  filters: {
    // 桁区切り文字を追加するフィルタを追加
    numberWidthDlimiter: function (value) {
      // 引数がないとき
      if (!value) {
        return '0'
      }
      return value.toString().replace(/(\d)(?=(\d{3})+$)/g, '$l,')
    }
  }
})
