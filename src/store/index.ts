import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    schedule: [
      {
        id: 1,
        img: "hatha.png",
        style: "Хатха-йога",
        time: ["Пн, Ср, Пт - с 12:00 до 15:00", "Вт, Чт - с 18:00 до 21:00"],
        trainer: "Полина Емельянова"
      },
      {
        id: 2,
        img: "ashtanga.png",
        style: "Ашатанга-йога",
        time: ["Пн, Ср, Пт - с 11:00 до 14:00", "Вт, Чт - с 19:00 до 21:00"],
        trainer: "Полина Емельянова"
      },
      {
        id: 3,
        img: "cundalini.png",
        style: "Кундалини-йога",
        time: ["Пн, Ср, Пт - с 12:00 до 15:00", "Вт, Чт - с 18:00 до 21:00"],
        trainer: "Полина Емельянова"
      },
      {
        id: 4,
        img: "cundalini.png",
        style: "Кундалини-йога",
        time: ["Пн, Ср, Пт - с 12:00 до 15:00", "Вт, Чт - с 18:00 до 21:00"],
        trainer: "Полина Емельянова"
      },
      {
        id: 5,
        img: "cundalini.png",
        style: "Кундалини-йога",
        time: ["Пн, Ср, Пт - с 12:00 до 15:00", "Вт, Чт - с 18:00 до 21:00"],
        trainer: "Полина Емельянова"
      }
    ]
  },
  getters: {
    schedule: state => {
      return state.schedule;
    }
  },
  mutations: {},
  actions: {},
  modules: {}
});
