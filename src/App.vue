<template>
  <div id="app" class="container">
    <!-- Bootstrap layout grid container, https://getbootstrap.com/docs/4.1/layout/overview/#containers -->
    <div class="row">
      <div class="col-lg-12">
        <div class="jumbotron pt-2 h-100">
          <!-- Bootstrap jumbotron, https://getbootstrap.com/docs/4.1/components/jumbotron/ -->
          <h1 class="display-3">Connect CT</h1>
          <p class="lead">
            Opiate abuse is a widespread and unfortunate reality that affects all Connecticut residents in some way.
            <br>
            For information on opiate usage and treatment in your area, choose
            your role below:
          </p>
          <hr class="my-4">
          <form class="form-inline">
            <!-- Bootstrap inline form, https://getbootstrap.com/docs/4.1/components/forms/ -->
            <label for="whoInlineSelect" class="mr-2">I am a</label>
            <select id="whoInlineSelect" class="form-control form-control-sm mb-2 mr-sm-2 mb-sm-0" v-model="selected.who" v-bind:class="(selected.who
            == '' ? 'text-muted' : 'text-dark')">
              <option disabled value="">please select one...</option>
              <option value="user" class="text-dark">current user of opioids</option>
              <option value="family" class="text-dark">friend or family member</option>
            </select>
            <label for="whatInlineSelect" class="mr-2">seeking</label>
            <select id="whatInlineSelect" class="form-control form-control-sm mb-2 mr-sm-2 mb-sm-0" v-model="selected.what" v-bind:class="(selected.what
            == '' ? 'text-muted' : 'text-dark')">
              <option disabled value=""> please select one... </option>
              <option value="treatment" class="text-dark">emergency treatment</option>
              <option value="info" class="text-dark">helpful information</option>
            </select>
            <label>for opiate users.</label>
          </form>
        </div>
        <transition name="fade" mode="out-in">
          <!-- fade router pages out and in, https://vuejs.org/v2/guide/transitions.html -->
          <router-view></router-view>
        </transition>
        <br>
        <div class="card text-center bg-light">
          <div class="card-body">
            <h4 class="card-title">Accidental drug deaths are on the rise in Connecticut</h4>
            <p class="card-text">
              If you or someone you know uses opiates, know the risks and how you can get help.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import "bootstrap/dist/css/bootstrap.min.css";
import * as VueGoogleMaps from "vue2-google-maps"; // google maps API integration
import GmapCluster from "vue2-google-maps/dist/components/cluster";

Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.VUE_APP_API_KEY,
    libraries: "places"
  }
});
Vue.component("GmapCluster", GmapCluster);
export default {
  name: "app",
  data: function() {
    // instance data must be a function, https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function
    return {
      selected: { who: "", what: "" } // form select options are instanced
    };
  },
  beforeMount: function() {
    [this.selected.who, this.selected.what] = this.$route.path
      .split("/")
      .reverse()
      .slice(0, 2)
      .reverse();
  },
  watch: {
    "selected.who": function() {
      // load router page when both options are selected
      if (this.selected.what != "")
        this.$router.push("/" + this.selected.who + "/" + this.selected.what);
    },
    "selected.what": function() {
      // load router page when both options are selected
      if (this.selected.who != "")
        this.$router.push("/" + this.selected.who + "/" + this.selected.what);
    }
  }
};
</script>

<style>
body {
  background-color: #f7f7f7; /* matches jumbotron background */
}

#app {
  font-family: sans-serif; /* TODO: pick prettier fonts */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #343a40;
  margin-top: 20px;
  margin-bottom: 20px;
}

.display-3 {
  font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
}

.jumbotron {
  background-image: linear-gradient(
      rgba(255, 255, 255, 100%),
      rgba(255, 255, 255, 90%)
    ),
    /* fade background image opacity without affecting header and lead */
      url("./assets/winstead.jpg");
  /* Winstead, Connecticut by Sarah E. Harvey */
  background-repeat: no-repeat;
  background-size: cover;
}

/* vue transition classes, https://vuejs.org/v2/guide/transitions.html#Transition-Classes */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
