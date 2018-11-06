<template>
  <b-jumbotron>
    <template slot="header">Analyze Bias</template>
    <template slot="lead">
      Some news sources are biased. These sites lean toward one side of an argument, often conveying a group
      or individual's opinion as fact. 
    </template>
    <p>
      It's important to recognize when a news source is biased to get an
      objective understanding of an issue. Here are a few ways to recognize bias:
    </p>
    <ol>
      <li>Consider the writer's tone</li>
      <li>Think about the intended audience</li>
      <li>Think about the author's goal</li>
      <li>Look at the way people or ideas are portrayed</li>
    </ol>
    <next-page-button go-to='register-to-vote'></next-page-button>
  </b-jumbotron>
</template>

<script>
import NextPageButton from "./NextPageButton.vue";
export default {
  name: "analyzeBias",
  components: { NextPageButton }
};
</script>
