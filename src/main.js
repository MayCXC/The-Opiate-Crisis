import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import * as VueGoogleMaps from "vue2-google-maps"; // google maps API integration
import GmapCluster from "vue2-google-maps/dist/components/cluster";
Vue.config.productionTip = false;

Vue.use(VueGoogleMaps, {
  load: {
    // key: "AIzaSyDgHvNq8FAubhXF4lXOeHTCDnMEklu-0G8",
    key: process.env.VUE_APP_API_KEY,
    libraries: "places"
  }
});
Vue.component("GmapCluster", GmapCluster);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
