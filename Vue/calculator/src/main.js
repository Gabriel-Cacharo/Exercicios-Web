import Vue from 'vue'
import App from './App'

new Vue({
  render: h => h(App)
}).$mount("#app")

// el: '#app',
// render(createElement) {
//   return createElement(App)
// }