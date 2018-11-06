<template>
  <b-jumbotron>
    <template slot="header">
      Connect with People
    </template>
    <template slot="lead">
      Once you decide you want to become more educated, start out by talking
      to your friends and family members.
    </template>
    <hr class="my-4">
    <p>
      Talking to people who are close to you will help you understand what
      issues matter to them. Looking online on political forums is another way
      to gain political perspective. No matter how you decide to communicate
      with others, you will have the opportunity to learn about political issues
      that you otherwise wouldn't know about.
    </p>
    <p>Click the button below to view an online political forum based on a party.</p>
    <b-dropdown id="ddown" text="Choose Your Party" variant="info" class="m-2">
      <b-dropdown-item v-bind:href="'https://www.reddit.com/r/Democrats/'" target="_blank">
        I am a Democrat
      </b-dropdown-item>
      <b-dropdown-item v-bind:href="'https://www.reddit.com/r/Republican/'" target="_blank">
        I am a Republican
      </b-dropdown-item>
      <b-dropdown-item v-bind:href="'https://www.reddit.com/r/Libertarian/'" target="_blank">
        I am a Libertarian
      </b-dropdown-item>
    </b-dropdown>
    <next-page-button go-to='engage-with-people'></next-page-button>
  </b-jumbotron>
</template>

<script>
import NextPageButton from "./NextPageButton.vue";
export default {
  name: "connectWithPeople",
  components: { NextPageButton }
};
</script>
