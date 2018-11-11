<template>
    <div>
        <button v-on:click="onClickSubstance">Subtance Abuse</button>
        <button v-on:click="onClickNaloxone">Naloxone Pharmacies</button>
        <button v-on:click="onClickAlcoholDrug">Alcohol and Drug Counselors</button>
    </div>
</template>

<script>
export default {
    name: "MapButtons",
    methods: {
        onClickSubstance: function () {
            this.$emit('clicked', "SAF");
        },
        onClickNaloxone: function () {
            this.$emit('clicked', "NPHAR");
        },
        onClickAlcoholDrug: function () {
            this.$emit('clicked', "ADC");
        }
    }
}
</script>
