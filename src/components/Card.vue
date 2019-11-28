<template>
  <div class="Card">
    <div class="Card-Photo"></div>
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
    title: String,
    schedule: Array,
    trainer: String
  },
  components: {
    Button
  }
});
</script>
