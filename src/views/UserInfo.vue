<template>
  <div>
    <h2 class="text-center">How would you like to get help?</h2>
    <br>
    <div class="card text-center bg-primary text-light">
      <div class="card-body">
        <h4 class="card-title">Make a call</h4>
        <p class="card-text">
          Press the button below to make a call to SAMHSA's National Helpline. It's free, available 24/7, and they'll speak to you in English or Spanish.
        </p>
        <button class="btn btn-secondary" href="tel://18006624357">SAMHSA’s National Helpline</button>
      </div>
    </div>
    <br>
    <div class="card text-center bg-primary text-light">
      <div class="card-body">
        <h4 class="card-title">Schedule a visit</h4>
        <p class="card-text">
          Choose a type of support center to locate below:
        </p>
      </div>
    </div>
    <map-with-markers></map-with-markers>
  </div>
</template>

<script>
import MapWithMarkers from "../components/MapWithMarkers.vue";
export default {
  name: "userInfo",
  components: {
    MapWithMarkers
  }
};
</script>
