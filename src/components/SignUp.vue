<template>
  <a href="#">
    <div class="SignUp" :class="className">
      <div class="SignUp-Button"></div>
      <div class="SignUp-Text">
        Запишись на бесплатное<br />
        пробное занятие
      </div>
    </div>
  </a>
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
.SignUp {
  display: flex;
  justify-content: center;
  align-items: center;

  &-Button {
    position: relative;
    flex-shrink: 0;
    width: 30px;
    height: 26px;
    margin-right: 13px;
    background-color: var(--text-secondary);

    &:before {
      content: "";
      position: absolute;
      display: block;
      left: calc(50% - 3px);
      top: calc(50% - 3px);
      width: 7px;
      height: 1px;
      background-color: var(--color-bg-primary);
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
      background-color: var(--color-bg-primary);
      transform: rotate(-45deg);
    }
  }

  &-Text {
    font-size: 12px;
    color: var(--text-secondary);
  }
}
</style>
