<template>
  <div>
    <div class="card text-center">
      <div class="card-body">
        <h4 class="card-title">Are they an opioid user?</h4>
        <p class="card-text">
          Some physical side effects of opioid use include contracted pupils,
          vomiting, and, in some cases, needle marks on arms or feet.
          There are also some behavioral effects, including loss of appetite, excessive sleeping, and twitching.
        </p>
      </div>
    </div>
    <br>
    <div class="card text-center">
      <div class="card-body">
        <h4 class="card-title"> What's the best way to help?</h4>
        <p class="card-text">
          Keep in mind that the person you are talking to might not be ready to admit or accept that they need help. It is normal for them to be angry or in denial. The person you are helping is likely going to be emotional, and you must be sensitive of their emotional needs. Let them know that they can be open with you, while you keep your wording from being too negative. This will allow you to establish a dialog that will ultimately let you lead them to agreeing to get help. There are plenty of different places they can go for professional support once they decide they are ready.
        </p>
      </div>
    </div>
    <br>
    <div>
      <div>Choose a type of support center to locate below:</div>
      <map-with-markers></map-with-markers>
    </div>
  </div>
</template>

<script>
import MapWithMarkers from "../components/MapWithMarkers.vue";
export default {
  name: "familyInfo",
  components: {
    MapWithMarkers
  }
};
</script>
