<template>
  <div class="btn-group">
    <button class="btn btn-secondary" type="button" v-on:click="onClickShowAll">Show All</button>
    <button class="btn btn-secondary" type="button" v-on:click="onClickSubstance">Subtance Abuse Facilities</button>
    <button class="btn btn-secondary" type="button" v-on:click="onClickNaloxone">Naloxone Pharmacies</button>
    <button class="btn btn-secondary" type="button" v-on:click="onClickAlcoholDrug">Alcohol and Drug Counselors</button>
  </div>
</template>

<script>
export default {
  name: "MapButtons",
  methods: {
    // google maps navigation API filters
    onClickSubstance: function() {
      this.$emit("clicked", "SAF");
    },
    onClickNaloxone: function() {
      this.$emit("clicked", "NPHAR");
    },
    onClickAlcoholDrug: function() {
      this.$emit("clicked", "ADC");
    },
    onClickShowAll: function() {
      this.$emit("clicked", "");
    }
  }
};
</script>

<style>
.btn-secondary {
  margin: 5px;
}
</style>
