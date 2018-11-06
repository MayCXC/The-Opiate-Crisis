<template>
  <div>
    <b-jumbotron>
      <template slot="header">
        Register to Vote
      </template>
      <template slot="lead">
        Once you have a clear idea of your political beliefs, do some research
        about the candidates. Once you feel you have a good understanding, participate
        in elections. This is one of the easiest, most impactful ways to contribute.
      </template>
      <hr class="my-4">
      <p>
        You've already learned some easy ways to recognize bias in the media. Now it's
        time to apply those skills to find out as much as you can about any candidates
        in local and federal elections. Look up their stances on the issues that matter
        to you. Then make sure you're ready to vote.
      </p>
      <p>
        The first step is to register to vote. Once you do that, you will be given a
        location to visit on election day to cast your vote. Each state has a slightly
        different registration process, but many let you register online. The federal
        government has a website with voting instructions for every state. Select your
        state to view your state's instructions.
        <div>
          <b-dropdown id="ddown" text="Choose Your State" variant="info" class="m-2">
            <b-dropdown-item v-for="(name,abbreviation) in statesArray" v-bind:key="abbreviation" v-bind:value="name" v-bind:href="'https://vote.gov/register/' + abbreviation.toLowerCase() + '/'" target="_blank">
              {{ name }}
            </b-dropdown-item>
          </b-dropdown>
          <hr>
          <h5>Three polling stations found in CT: </h5>
          <map-with-markers></map-with-markers>
        </div>
        <next-page-button go-to="congratulations"></next-page-button>
    </b-jumbotron>
  </div>

</template>

<script>
import states from '../assets/states.json'
import NextPageButton from "./NextPageButton.vue";
import MapWithMarkers from './MapWithMarkers.vue'
navigator.geolocation.getCurrentPosition(function (location) {
  console.log(location.coords.latitude);
  console.log(location.coords.longitude);
  console.log(location.coords.accuracy);
});
export default {
  name: "registerToVote",
  components: { NextPageButton, MapWithMarkers },
  data: function () {
    return {
      statesArray: states
    }
  }
};
</script>
