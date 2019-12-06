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
        img: "ashatanga.png",
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
    ],
    abonements: [
      {
        id: 1,
        period: 1,
        time: "Утро",
        hours: {
          from: 11,
          till: 16
        },
        price: 1300
      },
      {
        id: 2,
        period: 1,
        time: "all",
        hours: "all",
        price: 2800
      },
      {
        id: 3,
        period: 1,
        time: "Вечер",
        hours: {
          from: 17,
          till: 21
        },
        price: 2000
      },
      {
        id: 4,
        period: 6,
        time: "Утро",
        hours: {
          from: 11,
          till: 16
        },
        price: 5000
      },
      {
        id: 5,
        period: 6,
        time: "all",
        hours: "all",
        price: 10000
      },
      {
        id: 6,
        period: 6,
        time: "Вечер",
        hours: {
          from: 17,
          till: 21
        },
        price: 3000
      },
      {
        id: 7,
        period: 12,
        time: "Утро",
        hours: {
          from: 11,
          till: 16
        },
        price: 9000
      },
      {
        id: 8,
        period: 12,
        time: "all",
        hours: "all",
        price: 18000
      },
      {
        id: 9,
        period: 12,
        time: "Вечер",
        hours: {
          from: 17,
          till: 21
        },
        price: 12000
      }
    ]
  },

  getters: {
    schedule: state => {
      return state.schedule;
    },
    abonements: state => {
      return state.abonements;
    }
  },
  mutations: {},
  actions: {},
  modules: {}
});
