import axios from "axios";
import { defineStore } from "pinia";
import router from "../router";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    err: false,
  }),
  getters: {},
  actions: {
    loginReg(api, payload) {
      axios
        .post(api, payload)
        .then((res) => {
          localStorage.setItem("access_token", res.data.access_token);
          router.push({ name: "listdoctors" });
        })
        .catch((err) => {
          this.err = err.response.data.error;
        });
    },
  },
});
