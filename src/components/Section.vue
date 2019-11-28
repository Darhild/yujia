<template>
  <section>
    <h2>
      <slot name="title"></slot>
    </h2>
    <slot></slot>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({});
</script>
