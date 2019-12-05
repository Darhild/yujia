<template>
  <section class="Section" :class="`Section--${className}`">
    <h2 class="Section-Title">
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
  margin-right: 35px;
  margin-bottom: 70px;
  margin-left: 35px;
  background-repeat: no-repeat;

  &-Title {
    margin-bottom: 40px;
    font-size: 18px;
    text-align: center;
  }

  &--styles {
    background-image: url("./../assets/pattern.png");
    background-position: center center;
  }
}
</style>
