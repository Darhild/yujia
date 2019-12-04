<template>
  <div id="app">
    <Promo />
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
import Promo from "./../src/components/Promo.vue";
import Section from "./../src/components/Section.vue";
import YogaStyles from "./../src/components/YogaStyles.vue";

export default Vue.extend({
  components: {
    Promo,
    Section,
    YogaStyles
  }
});
</script>

<style lang="scss">
:root {
  --text-primary: #8b7eac;
  --text-secondary: #e65c7b;
  --text-white: #fff;

  --color-bg-primary: #fcf8fe;
}

@font-face {
  font-family: "Geometria";
  src: url("assets/fonts/Geometria.woff") format("font-woff");
  font-weight: 200;
  font-style: normal;
}

@font-face {
  font-family: "Geometria";
  src: url("assets/fonts/Geometria-Medium.woff") format("font-woff");
  font-weight: 500;
  font-style: normal;
}

body {
  min-width: $screen-mobile;
  max-width: $screen-desktop;
  margin-right: auto;
  margin-left: auto;
  font-family: "Geometria", sans-serif;
  font-size: 12px;
  color: var(--text-primary);
  background-color: var(--color-bg-primary);
}

a {
  text-decoration: none;
}

h2 {
  font-size: 30px;
  font-weight: 700;
}
</style>
