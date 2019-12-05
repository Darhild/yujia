<template>
  <a href="#">
    <div class="SignUp" :class="className">
      <Button
        className="SignUp-Button Button_color_secondary Button_type_arrow"
      />
      <div class="SignUp-Text">
        Запишись на бесплатное<br />
        пробное занятие
      </div>
    </div>
  </a>
</template>

<script lang="ts">
import Vue from "vue";
import Button from "./Button.vue";

export default Vue.extend({
  props: {
    className: String
  },
  components: {
    Button
  }
});
</script>

<style lang="scss">
.SignUp {
  display: flex;
  justify-content: center;
  align-items: center;

  &-Button {
    width: 30px;
    height: 26px;
    margin-right: 7px;
  }

  &-Text {
    font-size: 12px;
    color: var(--text-secondary);
  }
}
</style>
