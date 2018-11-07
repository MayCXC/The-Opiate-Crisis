<template>
  <div>
    <div id="app">
      <nav-bar class="mb-3"></nav-bar>
      <b-container>
        <transition name="fade">
          <router-view></router-view>
        </transition>
      </b-container>
    </div>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
export default {
  name: "app",
  created: function () {
    if (window.location.pathname === '/') {
      this.$router.push("/landing");
    }
  },
  components: {
    NavBar
  }
};
</script>

<style>
body {
  background-color: #eeeeee;
  background-image: url(https://i.imgur.com/2mv6J4C.jpg);
}
.fade-enter-to, .fade-leave {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>

// https://www.theodysseyonline.com/six-steps-to-becoming-politically-aware