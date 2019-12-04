<template>
  <div class="Card">
    <div class="Card-Photo">
      <img :src="`${publicPath}img/${img}`" />
    </div>
    <div class="Card-Content">
      <div class="Card-Wrapper">
        <div class="Card-Title">
          {{ title }}
        </div>
        <div class="Card-Schedule">
          <div v-for="(time, index) in schedule" :key="index">
            {{ time }}
          </div>
        </div>
        <div class="Card-Trainer">Инструктор {{ trainer }}</div>
      </div>
      <Button />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Button from "./Button.vue";

export default Vue.extend({
  props: {
    type: String,
    img: String,
    title: String,
    schedule: Array,
    trainer: String
  },
  data() {
    return {
      publicPath: process.env.BASE_URL
    };
  },
  components: {
    Button
  }
});
</script>

<style lang="scss">
.Card {
  &-Content {
    padding: 20px;
    background-color: var(--color-white);
  }

  &-Title {
    margin-bottom: 10px;
    font-size: 1.2rem;
    font-weight: 700;
  }
}
</style>
