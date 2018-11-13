<template>
    <b-container id="app"> <!-- Bootstrap layout grid container, https://bootstrap-vue.js.org/docs/components/layout/ -->
      <b-row>
        <b-col>
          <b-jumbotron id="jumbotron-1" class="pt-2"> <!-- Bootstrap jumbotron, https://bootstrap-vue.js.org/docs/components/jumbotron -->
            <template slot="header">
              Connect <wbr> CT <!-- iPhone screen is too narrow for the full title, wbr breaks the middle so it fits -->
            </template>
            <template slot="lead">
              Opiate abuse is a widespread and unfortunate reality that affects all Connecticut residents in some way.
              <br>
              For information on opiate usage and treatment in your area, choose your role below:
              <hr>
            </template>
            <b-form inline> <!-- Bootstrap inline form, https://bootstrap-vue.js.org/docs/components/form and https://bootstrap-vue.js.org/docs/components/form-select -->
              <label for="whoInlineSelect" class="mr-sm-2">I am a</label>
              <b-form-select id="whoInlineSelect"
                size="sm"
                v-model="selected.who"
                v-bind:class="'mb-2 mr-sm-2 mb-sm-0 ' + (selected.who == null ? 'text-muted' : 'text-dark')">  <!-- disabled style when selection is null -->
                <option disabled value="null"> please select one... </option>
                <option value="user" class="text-dark">current user of opioids</option>
                <option value="family" class="text-dark">friend or family member</option>
              </b-form-select>
              <wbr>&nbsp; <!-- break form on narrow screens -->
              <label for="whatInlineSelect" class="mr-sm-2">seeking</label>
              <b-form-select id="whatInlineSelect"
                size="sm"
                v-model="selected.what"
                v-bind:class="'mb-2 mr-sm-2 mb-sm-0 ' + (selected.what == null ? 'text-muted' : 'text-dark')"> <!-- disabled style when selection is null -->
                <option disabled value="null"> please select one... </option>
                <option value="treatment" class="text-dark">emergency treatment</option>
                <option value="info" class="text-dark">helpful information</option>
              </b-form-select>
              <label>&nbsp;for opiate users.&nbsp;</label>
            </b-form>
            <br><br> <!-- show background image -->
            <br><br>
          </b-jumbotron>
          <!--
          <router-link v-bind:to="'/' + selected.who + '/' + selected.what">
            {{ "/" + selected.who + "/" + selected.what }}
          </router-link>
          -->
          <transition name="fade" mode="out-in"> <!-- fade router pages out and in, https://vuejs.org/v2/guide/transitions.html -->
            <router-view></router-view>
          </transition>
        </b-col>
      </b-row>
    </b-container>
</template>

<script>
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue);
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'app',
  data: function () { // instance data must be a function, https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function
    return {
      selected: { who: null, what: null } // form select options are instanced
    }
  },
  watch: {
    'selected.who': function (newSelection) { // load router page when both options are selected
      if (this.selected.what != null)
        this.$router.push('/' + this.selected.who + '/' + this.selected.what)
    },
    'selected.what': function (newSelection) { // load router page when both options are selected
      if (this.selected.who != null)
        this.$router.push('/' + this.selected.who + '/' + this.selected.what)
    }
  }
}
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

#jumbotron-1 {
  background-image: linear-gradient(rgba(255, 255 , 255, 90%), rgba(255, 255 , 255, 90%)), /* fade background image opacity without affecting header and lead */
    url("https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/1877%2C_Harvey%2C_Sarah_E.%2C_Winsted%2C_Connecticut.jpg/512px-1877%2C_Harvey%2C_Sarah_E.%2C_Winsted%2C_Connecticut.jpg");
    /* Winstead, Connecticut by Sarah E. Harvey */
    /* TODO: use vue-loader for image assets */
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

/* default styles */
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

</style>
