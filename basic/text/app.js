// itemsという配列
var items = [
  {
    name: '鉛筆',
    price: '300',
    quantity: 0
  },
  {
    name: 'ノート',
    price: '200',
    quantity: 0
  },
  {
    name: '消しゴム',
    price: '100',
    quantity: 0
  }
]

var vm = new Vue({
  el: '#app',
  data: { // 可読性の向上のために変数itemsを介して渡している
    item: items,
    message: 'a'
  }
})
