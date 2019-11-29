<template>
  <section class="Section" :class="`Section--${className}`">
    <h2>
      <slot name="title"></slot>
    </h2>
    <slot></slot>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    className: String
  }
});
</script>

<style lang="scss">
.Section {
  background-repeat: no-repeat;

  &--styles {
    background-image: url("./../assets/pattern.png");
    background-position: center center;
  }
}
</style>
