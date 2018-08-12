import Vue from 'vue'
import App from './App.vue'
import {store} from './store/store'//store를 store.js 밖에서 사용할 수 있다. 위와 같은 방식대로한다.


new Vue({
  el: '#app',
  store, //store: store
  render: h => h(App)
})
