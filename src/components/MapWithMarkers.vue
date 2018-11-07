<template>
  <GmapMap :center="{lat:41.6032, lng:-73.0877}" :zoom="8" map-type-id="roadmap" style="width: 500px; height: 300px">
    <GmapMarker :key="index" v-for="(m, index) in markers" :position="m.position" :clickable="true" :draggable="true" @click="center=m.position" />
  </GmapMap>
</template>

<script>
import { gmapApi } from 'vue2-google-maps'

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
  computed: {
    google: gmapApi
  },
  methods: {
    fetchSubstanceAbuseCareFacilities: function () {
      const myInit = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        mode: 'cors',
        cache: 'default'
      };
      let myRequest = new Request('https://data.ct.gov/resource/htz8-fxbk.json', myInit);
      fetch(myRequest)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          // let firstAddress = data[0];
          let geocoder = new google.maps.Geocoder();
          for (let i = 0; i < data.length; i++) {
            geocoder.geocode({ address: `${data[i].address}, ${data[i].city}, ${data[i].state}` }, (results, status) => {
              if (status == 'OK') {
                let markerObj = { position: {} };
                markerObj.position.lat = results[0].geometry.location.lat();
                markerObj.position.lng = results[0].geometry.location.lng();
                this.markers.push(markerObj);
              } else {
                console.log(status);
                i = 400;
              }
            });
          }
          // setTimeout(() => {

          //   console.log(`Valids: ${valids} Invalids: ${invalids}`);
          // }, 1000)
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },
  mounted: function () {
    setTimeout(() => {
      this.fetchSubstanceAbuseCareFacilities();
    }, 1000);
  }
};
</script>
