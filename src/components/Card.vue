<template>
  <div class="Card" :class="className">
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
        <div class="Card-Trainer">
          Инструктор<br />
          {{ trainer }}
        </div>
      </div>
      <Button className="Button_color_primary Button_type_arrow" />
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
    trainer: String,
    className: String
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
  display: inline-block;
  width: 250px;

  &-Content {
    display: flex;
    justify-content: space-between;
    background-color: var(--color-white);
  }

  &-Wrapper {
    padding: 20px;
    padding-right: 40px;
  }

  &-Title {
    margin-bottom: 10px;
    font-size: 1.4rem;
    font-weight: 700;
  }

  &-Schedule {
    margin-bottom: 13px;
    font-size: 1.2rem;
  }

  &-Trainer {
    font-size: 1.2rem;
    color: var(--text-secondary);
  }
}
</style>
