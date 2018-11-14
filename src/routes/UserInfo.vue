<template>
  <div>

    
    <b-card bg-variant="light" text-variant="dark" class="text-center" title="How would you like to get help?"></b-card>
    <br>
   <b-card bg-variant="primary" text-variant="light" class="text-center" title="Make a call">
      <p class="card-text">
      Press the button below to make a call to SAMHSA's National Helpline. It's free, available 24/7, and they'll speak to you in English or Spanish.
      </p>
      <b-button href="tel://18006624357">SAMHSA’s National Helpline</b-button>
    </b-card>
    <br>
    <b-card bg-variant="primary" text-variant="light" class="text-center" title="Schedule a visit">
      <b-card-body>
        Choose a type of support center to locate below:
      </b-card-body>
    <map-with-markers></map-with-markers>
    </b-card>
    </div>
</template>

<script>
import MapWithMarkers from '../components/MapWithMarkers.vue'
export default {
  name: 'userInfo',
  components: {
    MapWithMarkers
  }
};
</script>
