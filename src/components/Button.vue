<template>
  <button class="Button" :class="className"></button>
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
.Button {
  border: none;
  outline: none;
  cursor: pointer;

  &_color_primary {
    background-color: var(--text-primary);
  }

  &_color_secondary {
    background-color: var(--text-secondary);
  }
}

.Button_type_arrow {
  position: relative;
  flex-shrink: 0;
  width: 43px;

  &:before {
    content: "";
    position: absolute;
    display: block;
    left: calc(50% - 3px);
    top: calc(50% - 3px);
    width: 7px;
    height: 1px;
    background-color: var(--color-white);
    transform: rotate(45deg);
  }

  &:after {
    content: "";
    position: absolute;
    left: calc(50% - 3px);
    bottom: calc(50% - 3px);
    display: block;
    width: 7px;
    height: 1px;
    background-color: var(--color-white);
    transform: rotate(-45deg);
  }
}</style
>>
