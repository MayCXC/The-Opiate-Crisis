<template>
  <div class="btn-group">
    <button class="btn btn-primary" type="button" v-bind:class="{active: active_el == 0}" v-on:click="onClickShowAll(0)">Show All</button>
    <button class="btn btn-primary" type="button" v-bind:class="{active: active_el == 1}" v-on:click="onClickSubstance(1)">Subtance Abuse Facilities</button>
    <button class="btn btn-primary" type="button" v-bind:class="{active: active_el == 2}" v-on:click="onClickNaloxone(2)">Naloxone Pharmacies</button>
    <button class="btn btn-primary" type="button" v-bind:class="{active: active_el == 3}" v-on:click="onClickAlcoholDrug(3)">Alcohol and Drug Counselors</button>
  </div>
</template>

<script>
export default {
  name: "MapButtons",
  data: function() {
    return {
      active_el: 0
    };
  },
  methods: {
    // google maps navigation API filters
    onClickSubstance: function(el) {
      this.active_el = el;
      this.$emit("clicked", "SAF");
    },
    onClickNaloxone: function(el) {
      this.active_el = el;
      this.$emit("clicked", "NPHAR");
    },
    onClickAlcoholDrug: function(el) {
      this.active_el = el;
      this.$emit("clicked", "ADC");
    },
    onClickShowAll: function(el) {
      this.active_el = el;
      this.$emit("clicked", "");
    }
  }
};
</script>

<style>
.btn-primary {
  margin: 5px;
}
</style>
