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
      <Abonements />
    </Section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Promo from "./../src/components/Promo.vue";
import Section from "./../src/components/Section.vue";
import YogaStyles from "./../src/components/YogaStyles.vue";
import Abonements from "./../src/components/Abonements.vue";

export default Vue.extend({
  components: {
    Promo,
    Section,
    YogaStyles,
    Abonements
  }
});
</script>

<style lang="scss">
:root {
  --text-primary: #8b7eac;
  --text-secondary: #e65c7b;

  --color-white: #fff;

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

html {
  font-size: 10px;
}

body {
  min-width: $screen-mobile;
  max-width: $screen-desktop;
  margin-right: auto;
  margin-left: auto;
  font-family: "Geometria", sans-serif;
  color: var(--text-primary);
  background-color: var(--color-bg-primary);
}

img {
  display: block;
  max-width: 100%;
}

a {
  text-decoration: none;
}

h2 {
  font-size: 30px;
  font-weight: 700;
}
</style>
