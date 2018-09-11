import Vue from "vue"
import AppComponent from "./App/index.vue"
Vue.config.devtools = true

const vm = new Vue({
  el: "#app",
  components: {
    app: AppComponent
  },
  render: h => h("app")
})
