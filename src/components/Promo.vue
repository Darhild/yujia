<template>
  <section class="Promo">
    <div class="Promo-Row Promo-Header">
      <MainMenu className="Promo-Item" />
      <div class="Promo-Item">
        8 (812) 690-10-10
      </div>
    </div>
    <div class="Promo-MainTitle">
      <div class="Promo-Subtitle">
        Почувствуй расслабление в своем теле
      </div>
      <div class="Promo-Title">
        Yoga
      </div>
    </div>
    <SignUp className="Promo-SignUp" />
    <div class="Promo-Row Promo-Footer">
      <Social />
      <div class="Promo-Item">
        Санкт-Петербург
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import MainMenu from "./MainMenu";
import SignUp from "./SignUp";
import Social from "./Social";

export default Vue.extend({
  components: {
    MainMenu,
    SignUp,
    Social
  }
});
</script>

<style lang="scss">
.Promo {
  position: relative;
  padding-top: 20px;
  padding-right: 15px;
  padding-bottom: 25%;
  padding-left: 15px;
  font-size: 12px;
  font-weight: 500;
  background-image: url("./../assets/clouds.png");
  background-repeat: no-repeat;
  background-size: cover;

  @media (min-width: $screen-tablet) {
    padding-bottom: 15%;
  }

  @media (min-width: $screen-tablet) {
    padding-top: 40px;
    padding-right: 80px;
    padding-left: 80px;
  }

  &-Row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 700;
  }

  &-MainTitle {
    margin-top: 68px;
    margin-bottom: 25px;
    text-align: center;

    @media (min-width: $screen-tablet) {
      margin-top: 60px;
      margin-bottom: 20px;
    }
  }

  &-Subtitle {
    margin-bottom: 15px;
    font-family: "Caveat", cursive;
    font-size: 20px;
    line-height: 1;

    @media (min-width: $screen-tablet) {
      margin-left: -84px;
      font-size: 26px;
    }
  }

  &-Title {
    font-size: 67px;
    line-height: 1;
    letter-spacing: 0.26em;
    text-transform: uppercase;
    text-shadow: 0px 4px 50px rgba(131, 115, 161, 0.6);
    color: var(--text-white);

    @media (min-width: $screen-tablet) {
      font-size: 144px;
      letter-spacing: 0.34em;
    }
  }

  &-SignUp {
    margin-right: auto;
    margin-left: auto;

    @media (min-width: $screen-tablet) {
      margin-bottom: 50px;
    }
  }

  &-Footer {
    display: none;

    @media (min-width: $screen-tablet) {
      display: flex;
      align-items: center;
    }
  }
}
</style>
