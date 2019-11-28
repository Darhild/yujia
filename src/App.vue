<template>
  <div id="app">
    <Section>
      <template #title>
        Направления
      </template>
      <YogaStyles />
    </Section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Section from "./../src/components/Section.vue";
import YogaStyles from "./../src/components/YogaStyles.vue";

export default Vue.extend({
  components: {
    Section,
    YogaStyles
  }
});
</script>

<style lang="scss"></style>
