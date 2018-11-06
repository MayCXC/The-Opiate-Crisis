<template>
  <b-jumbotron>
    <template slot="header">
      Welcome to <strong> Politify </strong>
    </template>
    <template slot="lead">
      A guide to becoming more politically aware
    </template>
    <hr>
    <p>
      <b-link target="_blank" href="http://www.journalism.org/2015/06/01/political-interest-and-awareness-lower-among-millennials/">
      A study by Pew Research Center</b-link> found that millenials are significantly less interested in politics than the 
      generations before them. This has led to a decline in our society's political awareness. This website aims to help
      everyone become more informed and aware about politics.
    </p>
    <p>This website will help guide you through a series of steps that will help you become more politically aware.</p>
    <p>Click the button below to get started.</p>
    <next-page-button go-to='educate-yourself'></next-page-button>
  </b-jumbotron>
</template>

<script>
import NextPageButton from "./NextPageButton.vue";
export default {
  name: "landingPage",
  data: function() {
    return {

    }
  },
  components: {
    NextPageButton
  }
}
</script>
