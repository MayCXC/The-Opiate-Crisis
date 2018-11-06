<template>
  <b-jumbotron>
    <template slot="header">
      Engage with People
    </template>
    <template slot="lead">
      While listening to the opinions of others is helpful, actively engaging
      them and even having a casual debate will help you solidify your political
      opinions.
    </template>
    <b-img fluid src="https://gdb.voanews.com/9719877F-3659-404D-B9A5-C207D643E75E_cx4_cy9_cw91_w1023_n_r1_s.jpg" alt="" />
    <hr class="my-4">
    <p>
      Don't be afraid to debate with others. You won't always agree with the people 
      you talk to, but that's ok! Many times, having respectful disagreements will
      give you a chance to reflect on your views. In some cases, you might change 
      your mind, but other situations might reinforce your beliefs.
    </p>
    <next-page-button go-to='analyze-bias'></next-page-button>
  </b-jumbotron>
</template>

<script>
import NextPageButton from "./NextPageButton.vue";
export default {
  name: "engageWithPeople",
  components: { NextPageButton }
};
</script>
