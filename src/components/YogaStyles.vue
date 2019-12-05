<template>
  <div class="YogaStyles">
    <Card
      v-for="(item, index) in schedule"
      :type="index === 0 ? 'vertical' : 'horizontal'"
      :key="item.id"
      :img="item.img"
      :title="item.style"
      :trainer="item.trainer"
      :schedule="item.time"
      className="YogaStyles-Card"
    />

    <Button
      className="YogaStyles-Button Button_color_light"
      @click="showMoreCards"
    >
      Смотреть больше
    </Button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Card from "./Card.vue";
import Button from "./Button.vue";

export default Vue.extend({
  components: {
    Card,
    Button
  },
  data() {
    return {
      shownCards: 3
    };
  },
  computed: {
    storeSchedule() {
      return this.$store.getters.schedule.slice(0, this.shownCards);
    },

    schedule() {
      return this.storeSchedule;
    }
  },
  methods: {
    showMoreCards() {
      this.shownCards += 3;
    }
  }
});
</script>

<style lang="scss">
.YogaStyles {
  text-align: center;

  &-Card {
    margin-right: 30px;
    margin-bottom: 30px;
    text-align: left;

    &:last-of-type {
      margin-bottom: 0;
    }
  }

  &-Button {
    display: none;
  }
}
</style>
