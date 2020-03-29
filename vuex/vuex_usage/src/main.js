// エントリポイントとなるファイルmain.js

import Vue from 'vue'
import App from './App.vue' // App.vueの読み込み
import store from './store' // store.jsの読み込み

new Vue({
  el: '#app',
  // コンポーネントからストアを利用できるようにする
  store,
  // 描画関数
  render: h => h(App)
})
