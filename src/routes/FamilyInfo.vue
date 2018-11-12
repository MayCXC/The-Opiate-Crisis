<template>
    <b-card no-body>
      <b-card-body>
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
