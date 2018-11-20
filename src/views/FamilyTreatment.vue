<template>
  <div>
    <div class="card text-center">
      <div class="card-body">
        <div class="card-title">Get help for a friend or family member</div>
        <p class="card-text">
          Getting help for someone you care about doesn't have to be a mystery.
          We've included some resources for help you get started.
        </p>
      </div>
    </div>
    <br>
    <div class="card text-center">
      <div class="card-body">
        <div class="card-title">Emergency resources</div>
        <p class="card-text">
          If a loved one is in immediate danger, contact emergency services as soon as possible by pressing the button below:
        </p>
        <button class="btn btn-danger" href="tel://911">Call 911</button>
      </div>
    </div>
    <br>
    <div>
      <div> If it isn't urgent and you want to visit a support center, choose one from the map below:
      </div>
      <map-with-markers></map-with-markers>
    </div>
    <br>
  </div>
</template>

<script>
import MapWithMarkers from "../components/MapWithMarkers.vue";
export default {
  name: "familyTreatment",
  components: {
    MapWithMarkers
  }
};
</script>
