<template>
  <div id="app">
    <b-container >
      <b-row>
        <b-col>
          <b-jumbotron text-variant="dark">
            <template slot="header">
              Connect CT
            </template>
            <template slot="lead">
              Opiate abuse is a widespread and unfortunate reality that all Connecticut residents face.
              <hr class="bg-light">
              For information on opiate usage and treatment in your area, choose your role below:
            </template>
            <b-form inline>
              <label>&nbsp;I am a&nbsp;</label>
              <b-select v-model="selected.who" class="m-md-2 bg-dark text-light">
                <option value="user">current user of opioids</option>
                <option value="family">friend or family member</option>
              </b-select>
              <label>&nbsp;seeking&nbsp;</label>
              <b-select v-model="selected.what" class="m-md-2 bg-dark text-light">
                <option value="treatment">emergency treatment</option>
                <option value="info">helpful information</option>
              </b-select>
              <label>&nbsp;for opiate use.&nbsp;</label>
            </b-form>
          </b-jumbotron>
          <!--
          <router-link v-bind:to="'/' + selected.who + '/' + selected.what">
            {{ "/" + selected.who + "/" + selected.what }}
          </router-link>
          -->
          <transition name="fade" mode="out-in">
            <router-view></router-view>
          </transition>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue);
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'app',
  data: function () {
    return {
      selected: { who: null, what: null }
    }
  },
  watch: {
    'selected.who': function (newSelection) {
      if (this.selected.what != null)
        this.$router.push('/' + this.selected.who + '/' + this.selected.what)
    },
    'selected.what': function (newSelection) {
      if (this.selected.who != null)
        this.$router.push('/' + this.selected.who + '/' + this.selected.what)
    }
  }
}
</script>

<style>
body {
  background-color: white;
}

#app {
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #343a40;
  margin-top: 20px;
  margin-bottom: 20px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

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
