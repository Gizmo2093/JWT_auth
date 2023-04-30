<template>
  <div>
    <div class="nav">
      <router-link v-if="accessToken" to="/doctors">
        Наши специалисты</router-link
      >
      <router-link v-if="!accessToken" to="/auth/login">Войти</router-link>
      <router-link v-if="!accessToken" to="/auth/registration"
        >Зарегистрироваться</router-link
      >
      <a v-if="accessToken" href="#" @click.prevent="logout">Выйти</a>
    </div>
    <div class="index">
      <router-view :key="$route.fullPath"></router-view>
    </div>
  </div>
</template>
<script>
import API from "../api";
export default {
  name: "Index",
  data() {
    return {
      accessToken: null,
    };
  },
  mounted() {
    this.getToken();
  },
  beforeUpdate() {
    this.getToken();
  },
  methods: {
    getToken() {
      this.accessToken = localStorage.getItem("access_token");
    },
    logout() {
      API.post("/api/auth/logout").then((res) => {
        localStorage.removeItem("access_token");
        this.$router.push({ name: "auth.login" });
      });
    },
  },
};
</script>

<style>
.nav {
  display: flex;
  justify-content: space-evenly;
}
.index {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 95%;
}
</style>
