<template>
  <b-jumbotron>
    <template slot="header">
      Educate Yourself
    </template>
    <template slot="lead">
      The first step in becoming more politically aware is to learn as much
      as possible about today's political climate.
    </template>
    <hr class="my-4">
    <b-img fluid src="https://upload.wikimedia.org/wikipedia/commons/d/d1/Sanzio_01_cropped.png" alt="" />
    <p>
      Talking to others with political opinions and finding good news sources
      are a few great ways to become more educated about politics. The best
      way to become more aware is to get information from a wide variety of
      sources. Communicating with your peers will give you an idea of what the
      people around you believe, while listening to the news will give you an
      understanding to the media's perspective.
    </p>
    <next-page-button go-to='connect-with-people'></next-page-button>
  </b-jumbotron>
</template>

<script>
import NextPageButton from "./NextPageButton.vue";
export default {
  name: "educateYourself",
  components: {
    NextPageButton
  }
};
</script>
