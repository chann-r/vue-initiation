var items = [
  {
    name: '鉛筆',
    price: 50,
    quantity: 1
  }
  {
    name: 'ノート',
    price: 90,
    quantity: 2
  }
  {
    name: '消しゴム',
    price: 100,
    quantity: 1
]

var vm = new Vue({
  el: '#app',
  datta: {
    item: items
  }
})
