import Vue from 'vue'
import App from './App.vue'
import router from './routes/router';
import BootstrapVue from "bootstrap-vue"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
Vue.use(BootstrapVue)
import * as VueGoogleMaps from 'vue2-google-maps'
Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.API_KEY,
    libraries: 'places',
  }
})

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})