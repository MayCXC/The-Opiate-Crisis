<template>
  <div>
    <h1> Hello World! </h1>
    <b-card class="text-center" title="Emergency resources">
      <b-button>Call 911</b-button>
      <b-button v-on:click="getLocation" >Nearest treatment center</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'userTreatment',
  methods: {
    getHelp: function (position) {
      let lat = position.coords.latitude;
      let long = position.coords.longitude;
      window.location.href = "https://findtreatment.samhsa.gov/locator?sAddr=" + lat + "," + long;
    },
    getLocation: function () {
      if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.getHelp);
      } else {
        alert("Sorry, this browser does not support geolocation.");
      }
    },
  }
}
</script>
