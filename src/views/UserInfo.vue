<template>
  <div>
    <div class="text-center">How would you like to get help?</div>
    <br>
    <div class="text-center">
      <div class="card-body">
        <div class="card-title">Make a call</div>
        <p class="card-text">
          Press the button below to make a call to SAMHSA's National Helpline. It's free, available 24/7, and they'll speak to you in English or Spanish.
        </p>
        <button class="btn btn-primary" href="tel://18006624357">SAMHSA’s National Helpline</button>
      </div>
    </div>
    <br>
    <div class="card text-center">
      <div class="card-body">
        <div class="card-title">Schedule a visit</div>
        <p class="card-text">
          Choose a type of support center to locate below:
        </p>
      </div>
      <map-with-markers></map-with-markers>
    </div>
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
