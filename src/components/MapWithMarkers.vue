<template>
  <div>
    <GmapMap :center="{lat:41.6032, lng:-73.0877}" :zoom="9" map-type-id="roadmap" style="width: 100%; height: 600px">
      <GmapCluster>
        <GmapMarker :key="index" v-for="(m, index) in markers" :position="m.position" :clickable="true" :draggable="true" @click="center=m.position" />
      </GmapCluster>
    </GmapMap>
    <map-buttons @clicked="showSpecificData"></map-buttons>
  </div>
</template>

<script>
import MapButtons from './MapButtons.vue'
export default {
  name: "Gmap",
  props: ['type'],
  data: function () {
    return {
      markers: []
    }
  },
  components: {
    MapButtons
    // add the three buttons as one component here to render under the map
  },
  methods: {
    fetchMarkers: function (credentialType) {
      const myInit = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        mode: 'cors',
        cache: 'default'
      };
      let requestURL = credentialType
        ? "http://localhost:4000/api/markers?credentialType=" + credentialType
        : "http://localhost:4000/api/markers?credentialType";
      console.log(requestURL);
      let myRequest = new Request(requestURL, myInit);
      fetch(myRequest)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          for (let i = 0; i < data.length; i++) {
            let markerObj = { position: {} };
            markerObj.position.lat = data[i].lat;
            markerObj.position.lng = data[i].lng;
            this.markers.push(markerObj);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    showSpecificData: function (dataType) {
      this.markers = [];
      this.fetchMarkers(dataType);
      // console.log(value);
    },
  },
  mounted: function () {
    this.fetchMarkers();
  }
};
</script>
