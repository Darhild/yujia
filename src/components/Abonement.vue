<template>
  <div :class="className" class="Abonement">
    <div class="Abonement-Time">
      {{ dayTime }}
    </div>
    <div class="Abonement-Hours">
      <template v-if="hours !== 'all'">
        Посещение<br />
        c {{ hours.from }}:00 до {{ hours.till }}:00
      </template>
      <template v-else>
        Посещение<br />
        по времени не ограничено
      </template>
    </div>
    <div class="Abonement-Price">{{ price }} р</div>
    <Button :className="['Button_color_primary', 'Abonements-Button']">
      Заказать абонемент
    </Button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Button from "./Button";

export default Vue.extend({
  props: {
    time: String,
    hours: Object,
    price: Number,
    className: String
  },
  components: {
    Button
  },
  computed: {
    dayTime() {
      return this.time === "all" ? "Безлимит" : this.time;
    }
  }
});
</script>

<style lang="scss">
.Abonement {
  padding: 30px 50px;
  background-color: var(--color-white);
}
</style>
