<template>
  <div>
    <b-card bg-variant="danger" text-variant="light" class="text-center" title="Emergency resources">
      <p class="card-text">
        If you are in immediate danger, contact emergency services as soon as possible by choosing an option below:
      </p>
      <b-button href="tel://911">Call 911</b-button>
      <!--b-button href="https://www.google.com/maps/dir/?api=1&destination=drug+rehab+center" target="_blank">Find the nearest treatment center</b-button -->
    </b-card>
  </div>
</template>

<script>
export default {
  name: "userTreatment",
};
</script>
