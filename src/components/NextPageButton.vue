<template>
  <div>
    <b-button class="next-page-button" v-on:click="goToNextPage" disabled>Continue in 5</b-button>
  </div>
</template>
<script>

export default {
  name: "nextPage",
  props: ['goTo'],
  methods: {
    goToNextPage: function () {
      this.$router.push(this.$props.goTo)
    }
  },
  created: function () {
    let self = this;
    let time = 5000
    var progress = time;
    var id = setInterval(function () {
      progress -= 1000
      self.$el.firstChild.textContent = "Continue in " + progress / 1000
    }, 1000)
    setTimeout(function () {
      self.$el.firstChild.textContent = 'Continue'
      self.$el.firstChild.disabled = false
      self.$el.firstChild.classList.remove('disabled')
      clearInterval(id)
    }, time);
  }
};
</script>

<style>
.next-page-button {
  margin-top: 1em;
}
</style>
