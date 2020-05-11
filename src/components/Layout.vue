<template>
  <b-container fluid :class="$style.layout">
    <h1>
      <b-icon-people />
      Negotiation App
    </h1>
    <Container />
  </b-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Container from "@/components/Container.vue";

@Component({
    components: { Container },
})
export default class Layout extends Vue {}
</script>

<style module lang="scss">
.layout {
  background-color: whitesmoke;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
