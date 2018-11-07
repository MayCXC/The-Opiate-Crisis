<template>
  <GmapMap :center="{lat:41.6032, lng:-73.0877}" :zoom="8" map-type-id="roadmap" style="width: 100%; height: 300px">
    <GmapMarker :key="index" v-for="(m, index) in markers" :position="m.position" :clickable="true" :draggable="true" @click="center=m.position" />
  </GmapMap>
</template>

<script>
// make request here to data.ct.gov api to get a list of the pharmacies addresses, use the geocode(https://www.npmjs.com/package/geocoder) to populate markers with proper lat and long,
// use the pharamacy name for the infoText
export default {
  name: "Gmap",
  props: ['type'],
  data: function () {
    return {
      markers: [{ "position": { "lat": 41.5556838, "lng": -73.03858980000001 }, "infoText": "Marker 1" }, { "position": { "lat": 41.1489593, "lng": -73.26271429999997 }, "infoText": "Marker 2" }, { "position": { "lat": 41.3830322, "lng": -72.90443679999998 }, "infoText": "Marker 3" }]
    }
  },
  components: {
    // add the three buttons as one component here to render under the map
  }
};
</script>
