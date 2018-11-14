<template>
  <div v-if="locationFound">
    <GmapMap :center="location" :zoom="13" map-type-id="roadmap" style="width: 100%; height: 600px">
      <GmapCluster>
        <GmapMarker :key="index" v-for="(m, index) in markers" :position="m.position" :clickable="true" :draggable="false" @click="openGoogleMaps(index)" />
      </GmapCluster>
    </GmapMap>
    <map-buttons @clicked="showSpecificData"></map-buttons>
  </div>
</template>

<script>
import MapButtons from "./MapButtons.vue";
export default {
  name: "Gmap",
  props: ["type"],
  data: function () {
    return {
      markers: [],
      location: {},
      locationFound: false
    };
  },
  components: {
    MapButtons
  },
  methods: {
    fetchMarkers: function (credentialType) {
      const myInit = {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
        mode: "cors",
        cache: "default"
      };
      let requestURL = credentialType
        ? "http://localhost:4001/api/markers?credentialType=" + credentialType
        : "http://localhost:4001/api/markers?credentialType";
      console.log(requestURL);
      let myRequest = new Request(requestURL, myInit);
      fetch(myRequest)
        .then(response => {
          return response.json();
        })
        .then(data => {
          for (let i = 0; i < data.length; i++) {
            let markerObj = { position: {} };
            markerObj.position.lat = data[i].lat;
            markerObj.position.lng = data[i].lng;
            markerObj.placeid = data[i].placeid;
            this.markers.push(markerObj);
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    showSpecificData: function (dataType) {
      this.markers = [];
      this.fetchMarkers(dataType);
      // console.log(value);
    },
    getLocation: function () {
      let locationObj = {};
      // If geolocation is available, get the current position and store it
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((success, error) => {
          if (error) return console.log(error);
          this.location.lat = success.coords.latitude;
          this.location.lng = success.coords.longitude;
          this.locationFound = true;
        });
      } else {
        // As a default, center on Berlin, the geographic center of CT
        this.location.lat = 41.61389;
        this.location.lng = -72.7725;
        this.locationFound = true;
      }
    },
    openGoogleMaps: function (index) {
      console.log(this.markers[index]);
      let googleMapsURL = `https://www.google.com/maps/search/?api=1&query=${this.markers[index].position.lat},${this.markers[index].position.lng}&query_place_id=${this.markers[index].placeid}`;
      window.open(googleMapsURL);
    }
  },
  beforeMount: function () {
    this.getLocation();
  },
  mounted: function () {
    this.fetchMarkers();
  }
};
</script>
