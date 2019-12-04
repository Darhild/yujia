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
    />
    <button class="" @click="showMoreCards">
      Смотреть больше
    </button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Card from "./Card.vue";

export default Vue.extend({
  components: {
    Card
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
