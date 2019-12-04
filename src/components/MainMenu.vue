<template>
  <div class="MainMenu" :class="className">
    <div class="MainMenu-Hamburger Hamburger">
      <span></span>
    </div>
    <div class="MainMenu-Text">
      Меню
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    className: String
  }
});
</script>

<style lang="scss">
.MainMenu {
  display: flex;
  align-items: center;

  &-Hamburger {
    @media (min-width: $screen-tablet) {
      margin-right: 10px;
    }
  }

  &-Text {
    display: none;

    @media (min-width: $screen-tablet) {
      display: block;
    }
  }
}

.Hamburger {
  position: relative;
  width: 30px;
  height: 12px;
  cursor: pointer;

  span {
    position: absolute;
    top: calc(50% - 1px);
    left: 0;
    display: block;
    width: 100%;
    height: 2px;
    background-color: var(--text-primary);
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 2px;
    background-color: var(--text-primary);
  }

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    display: block;
    width: 70%;
    height: 2px;
    background-color: var(--text-primary);
  }
}</style
>>
