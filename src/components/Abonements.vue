<template>
  <div class="Abonements">
    <Tabs
      :content="tabs"
      :setTabValue="setTabValue"
      :className="'Abonements-Tabs'"
    />
    <Abonement
      v-for="item in abonements"
      :key="item.id"
      :time="item.time"
      :hours="item.hours"
      :price="item.price"
      :className="'Abonements-Item'"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Tabs from "./Tabs.vue";
import Abonement from "./Abonement.vue";

export default Vue.extend({
  components: {
    Tabs,
    Abonement
  },
  data() {
    return {
      tabs: [1, 6, 12],
      period: 1
    };
  },
  computed: {
    abonements() {
      return this.$store.getters.abonements.filter(
        item => item.period === this.period
      );
    }
  },
  methods: {
    setTabValue(value) {
      this.period = value;
    }
  }
});
</script>

<style lang="scss">
.Abonements {
  &-Tabs {
    margin-bottom: 30px;
  }

  &-Item {
    margin-bottom: 30px;
  }
}
</style>
