<template>
  <div>
    <b-card bg-variant="danger" text-variant="light" class="text-center" title="Emergency resources">
      <p class="card-text">
        If you are in immediate danger, contact emergency services as soon as possible by choosing an option below:
      </p>
      <b-button v-on:click="call911">Call 911</b-button>
      <b-button href="https://www.google.com/maps/dir/?api=1&destination=drug+rehab+center" target="_blank">Find the nearest treatment center</b-button>
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
      //window.location.href = "https://findtreatment.samhsa.gov/locator?sAddr=" + lat + "," + long;
      //window.location.href = "https://www.google.com/maps/dir/?api=1&destination=drug+rehab+center"
    },
    getLocation: function () {
      if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.getHelp);
      } else {
        alert("Sorry, this browser does not support geolocation.");
      }
    },
    call911: function () {
      // 911 calling functionality intentionally omitted
      alert("Call 911 using 'tel://911'");
    }
  }
}
</script>
