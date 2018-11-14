<template>
  <div>
      <b-button v-on:click="onClickShowAll">Show All</b-button>
      <b-button v-on:click="onClickSubstance">Subtance Abuse Facilities</b-button>
      <b-button v-on:click="onClickNaloxone">Naloxone Pharmacies</b-button>
      <b-button v-on:click="onClickAlcoholDrug">Alcohol and Drug Counselors</b-button>
  </div>
</template>

<script>
export default {
    name: "MapButtons",
    methods: { // google maps navigation API filters
        onClickSubstance: function () {
            this.$emit('clicked', "SAF");
        },
        onClickNaloxone: function () {
            this.$emit('clicked', "NPHAR");
        },
        onClickAlcoholDrug: function () {
            this.$emit('clicked', "ADC");
        },
        onClickShowAll: function(){
            this.$emit('clicked', "");
        }
    }
}
</script>
