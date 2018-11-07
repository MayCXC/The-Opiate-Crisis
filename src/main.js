import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from "bootstrap-vue"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import * as VueGoogleMaps from 'vue2-google-maps'
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyBUx2kl5YNFZVeNWUMReLoSmGVgK5v8gWo",
    libraries: 'places',
  }
})
Vue.use(BootstrapVue)

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
