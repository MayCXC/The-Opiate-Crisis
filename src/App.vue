<template>
  <div id="app">
    <b-container >
      <b-row>
        <b-col>
          <b-jumbotron id="jumbotron-1" class="pt-2">
            <template slot="header">
              Connect <wbr>CT
            </template>
            <template slot="lead">
              Opiate abuse is a widespread and unfortunate reality that affects all Connecticut residents in some way.
              <br>
              For information on opiate usage and treatment in your area, choose your role below:
              <hr>
            </template>
            <b-form inline>
              <label for="whoInlineSelect" class="mr-sm-2">I am a</label>
              <b-form-select id="whoInlineSelect"
                size="sm"
                v-model="selected.who"
                v-bind:class="'mb-2 mr-sm-2 mb-sm-0 ' + (selected.who == null ? 'text-muted' : 'text-dark')">
                <option disabled value="null"> please select one... </option>
                <option value="user" class="text-dark">current user of opioids</option>
                <option value="family" class="text-dark">friend or family member</option>
              </b-form-select>
              <wbr>&nbsp;
              <label for="whatInlineSelect" class="mr-sm-2">seeking</label>
              <b-form-select id="whatInlineSelect"
                size="sm"
                v-model="selected.what"
                v-bind:class="'mb-2 mr-sm-2 mb-sm-0 ' + (selected.what == null ? 'text-muted' : 'text-dark')">
                <option disabled value="null"> please select one... </option>
                <option value="treatment" class="text-dark">emergency treatment</option>
                <option value="info" class="text-dark">helpful information</option>
              </b-form-select>
              <label>&nbsp;for opiate users.&nbsp;</label>
            </b-form>
            <br><br>
            <br><br>
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
  background-color: #f7f7f7;
}

#app {
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #343a40;
  margin-top: 20px;
  margin-bottom: 20px;
}

#jumbotron-1 {
  background-image: linear-gradient(rgba(255, 255 , 255, 90%), rgba(255, 255 , 255, 90%)),
    url("https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/1877%2C_Harvey%2C_Sarah_E.%2C_Winsted%2C_Connecticut.jpg/512px-1877%2C_Harvey%2C_Sarah_E.%2C_Winsted%2C_Connecticut.jpg");
  background-repeat: no-repeat;
  background-size: cover;
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
