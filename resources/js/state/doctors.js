import axios from "axios";
import { defineStore } from "pinia";
import API from "../api";

export const useDoctorsStore = defineStore("doctors", {
  state: () => ({
    doctors: false,
    err: false,
  }),
  getters: {},
  actions: {
    getDoctors() {
      if (!this.doctors) {
        API.get("/api/auth/doctors", {
          headers: {
            authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }).then((res) => {
          if (res.data.data) this.doctors = res.data.data;
        });
      }
    },
  },
});
