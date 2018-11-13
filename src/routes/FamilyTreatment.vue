<template>
  <div>
    <b-card bg-variant="light" text-variant="dark" class="text-center" title="Get help for a friend or family member">
        <p class="card-text">
          Getting help for someone you care about doesn't have to be a mystery.
          We've included some resources for help you get started.
        </p>
    </b-card>
    <br>
    <b-card bg-variant="danger" text-variant="light" class="text-center" title="Emergency resources">
        <p class="card-text">
          If a loved one is in immediate danger, contact emergency services as soon as possible by choosing an option below:
        </p>
        <b-button v-on:click="call911">Call 911</b-button>
        <b-button href="https://www.google.com/maps/dir/?api=1&destination=drug+rehab+center" target="_blank">Find the nearest treatment center</b-button>
    </b-card>
    <br>
    <b-card bg-variant="primary" text-variant="light" class="text-center" title="Are they an opioid user?">
        <p class="card-text">
        Some helpful information on identifying opioid users
        </p>
    </b-card>
    <br>
    <b-card bg-variant="primary" text-variant="light" class="text-center" title="What's the best way to help?">
      <p class="card-text">
      Some helpful information on how to help opioid users
      </p>
    </b-card>
    <br>
  </div>
</template>

<script>
export default {
  name: 'familyTreatment'
};
</script>
