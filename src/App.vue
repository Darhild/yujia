<template>
  <div id="app">
    <Header />
    <Section className="styles">
      <template #title>
        Направления
      </template>
      <YogaStyles />
    </Section>
    <Section className="abonements">
      <template #title>
        Абонементы
      </template>
      <YogaStyles />
    </Section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Header from "./../src/components/Header.vue";
import Section from "./../src/components/Section.vue";
import YogaStyles from "./../src/components/YogaStyles.vue";

export default Vue.extend({
  components: {
    Header,
    Section,
    YogaStyles
  }
});
</script>

<style lang="scss">
:root {
  --color-bg-primary: #fcf8fe;
}

body {
  background-color: var(--color-bg-primary);
}
</style>
