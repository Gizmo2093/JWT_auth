<template>
  <div class="layout">
    <form @submit.prevent="submit">
      <div class="mb-3">
        <label for="login" class="form-label">Логин</label>
        <input
          type="text"
          class="form-control"
          id="login"
          aria-describedby="emailHelp"
          placeholder="Введите логин"
          v-model="login"
        />
      </div>
      <div class="mb-3">
        <label for="pwd" class="form-label">Пароль</label>
        <input
          type="password"
          class="form-control"
          id="pwd"
          placeholder="Введите пароль"
          v-model="pwd"
        />
      </div>
      <div class="btn-section">
        <button type="submit" class="btn btn-primary">Войти</button>
        <router-link to="/auth/registration">Регистрация</router-link>
      </div>
    </form>
    <div v-if="err" class="errmsg">{{ err }}</div>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useAuthStore } from "../../state/auth";
export default {
  name: "Login",
  data() {
    return {
      login: "",
      pwd: "",
    };
  },
  computed: {
    ...mapState(useAuthStore, { err: "err" }),
  },
  methods: {
    ...mapActions(useAuthStore, ["loginReg"]),
    submit() {
      this.loginReg("/api/auth/login", {
        email: this.login,
        password: this.pwd,
      });
    },
  },
};
</script>
<style scoped>
.layout {
  width: 50vh;
}
.btn-section {
  display: flex;
  justify-content: space-between;
}
.errmsg {
  color: red;
}
</style>
