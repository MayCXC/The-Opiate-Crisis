import Vue from 'vue'
import App from './App.vue'
import router from './routes/router'; // dynamic page loading, https://router.vuejs.org/
import BootstrapVue from "bootstrap-vue"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
Vue.use(BootstrapVue) // Bootstrap components and directives, https://bootstrap-vue.js.org/
import * as VueGoogleMaps from 'vue2-google-maps' // google maps API integration
import GmapCluster from 'vue2-google-maps/dist/components/cluster'

/* load google maps API key from dotenv */
Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.API_KEY,
    libraries: 'places',
  }
})
Vue.component('GmapCluster', GmapCluster)

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
