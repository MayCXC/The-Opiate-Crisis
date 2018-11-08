<template>
  <GmapMap :center="{lat:41.6032, lng:-73.0877}" :zoom="7" map-type-id="roadmap" style="width: 1000px; height: 600px">
    <GmapCluster>
      <GmapMarker :key="index" v-for="(m, index) in markers" :position="m.position" :clickable="true" :draggable="true" @click="center=m.position" />
    </GmapCluster>
  </GmapMap>
</template>

<script>
export default {
  name: "Gmap",
  props: ['type'],
  data: function () {
    return {
      markers: []
    }
  },
  components: {
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
      let myRequest = new Request(`http://localhost:4000/api/markers?credentialType`, myInit);
      fetch(myRequest)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          for (let i = 0; i < 20; i++) {
            // (function (index, markers) {
            //   setTimeout(() => {
            let markerObj = { position: {} };
            markerObj.position.lat = data[i].lat;
            markerObj.position.lng = data[i].lng;
            this.markers.push(markerObj);
            //   }, 200 * i)
            // })(i, this.markers);

          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },
  mounted: function () {
    this.fetchMarkers();
  }
};
</script>