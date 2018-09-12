import Vue from "vue"
import AppComponent from "./App/index.vue"
import BootstrapVue from "bootstrap-vue"

Vue.config.devtools = true
Vue.use(BootstrapVue)

import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

const vm = new Vue({
  el: "#app",
  components: {
    app: AppComponent
  },
  render: h => h("app")
})
