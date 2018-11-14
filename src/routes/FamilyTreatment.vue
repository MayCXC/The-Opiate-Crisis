<template>
  <div>
    <b-card bg-variant="light" text-variant="dark" class="text-center" title="Get help for a friend or family member">
        <p class="card-text">
          Getting help for someone you care about doesn't have to be a mystery.
          We've included some resources for help you get started.
        </p>
    </b-card>
    <br>
    <b-card bg-variant="danger" text-variant="light" class="text-center" title="Emergency resources">
        <p class="card-text">
          If a loved one is in immediate danger, contact emergency services as soon as possible by pressing the button below:
        </p>
        <b-button href="tel://911">Call 911</b-button>
    </b-card>
    <br>
    <b-card no-body>
      <b-card-body>
        If it isn't urgent and you want to visit a support center, choose one from the map below:
      </b-card-body>
    <map-with-markers></map-with-markers>
    </b-card>
    <br>
  </div>
</template>

<script>
import MapWithMarkers from '../components/MapWithMarkers.vue'
export default {
  name: 'familyTreatment',
  components: {
    MapWithMarkers
  }
};
</script>
