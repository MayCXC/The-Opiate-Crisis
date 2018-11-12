<template>
    <b-card no-body bg-variant="dark">
      <b-card-body bg-variant="dark">
        Choose a type of support center to locate below:
      </b-card-body>
    <map-with-markers></map-with-markers>
    </b-card>
</template>

<script>
import MapWithMarkers from '../components/MapWithMarkers.vue'
export default {
  name: 'familyInfo',
  components: {
    MapWithMarkers
  }
};
</script>
