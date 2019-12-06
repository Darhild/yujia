<template>
  <div class="Tabs" :class="className">
    <div
      :class="[
        isActive === item ? 'Tabs-Item Tabs-Item_state_active' : 'Tabs-Item'
      ]"
      v-for="item in content"
      :key="item"
      @click="onTabClick(item)"
    >
      {{ item }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    content: Array,
    setTabValue: Function,
    className: String
  },
  data() {
    return {
      isActive: 1
    };
  },
  methods: {
    onTabClick(value) {
      this.isActive = value;
      this.setTabValue(value);
    }
  }
});
</script>

<style lang="scss">
.Tabs {
  display: flex;
  font-size: 1.4rem;
  color: var(--text-secondary);

  &-Item {
    margin-right: 25px;
    padding-bottom: 3px;
    cursor: pointer;

    &:last-child {
      margin-right: 0;
    }

    &_state_active {
      border-bottom: 1px solid var(--text-secondary);
    }
  }
}
</style>
