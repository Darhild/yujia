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
    <Button :className="['Button_color_primary', 'Abonement-Button']">
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
  display: inline-block;
  width: 250px;
  padding: 30px 50px;
  text-align: center;
  background-color: var(--color-white);

  &-Time {
    margin-bottom: 20px;
    font-size: 1.8rem;
    font-weight: 700;
  }

  &-Hours {
    margin-bottom: 20px;
    font-size: 1.2rem;
    line-height: 1.5;
    color: var(--text-secondary);
  }

  &-Price {
    margin-bottom: 25px;
    font-size: 2rem;
    font-weight: 700;
    text-transform: uppercase;
  }

  &-Button {
    padding: 14px 23px;
  }
}
</style>
