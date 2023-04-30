<template>
  <div v-if="doctors">
    <ul>
      <div v-for="(doctor, idx) in doctors" :key="idx">
        <h4>{{ doctor.fio }}</h4>
      </div>
    </ul>
  </div>
</template>
<script>
import { mapActions, mapState } from "pinia";
import { useDoctorsStore } from "../state/doctors";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(useDoctorsStore, {
      doctors: "doctors",
    }),
  },
  methods: {
    ...mapActions(useDoctorsStore, ["getDoctors"]),
  },
  updated() {
    this.getDoctors();
  },
  mounted() {
    this.getDoctors();
  },
};
</script>
