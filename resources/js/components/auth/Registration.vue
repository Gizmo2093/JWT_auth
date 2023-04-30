<template>
  <div class="layout">
    <form @submit.prevent="submit">
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input
          type="email"
          class="form-control"
          id="email"
          v-model="email"
          aria-describedby="emailHelp"
          placeholder="Введите email"
        />
      </div>
      <div class="mb-3">
        <label for="login" class="form-label">Логин</label>
        <input
          type="text"
          class="form-control"
          id="login"
          v-model="login"
          aria-describedby="emailHelp"
          placeholder="Введите логин"
        />
      </div>
      <div class="mb-3">
        <label for="pwd" class="form-label">Пароль</label>
        <input
          type="password"
          class="form-control"
          id="pwd"
          v-model="pwd"
          placeholder="Введите пароль"
        />
      </div>
      <div class="mb-3">
        <label for="confirm_pwd" class="form-label">Подтверждение пароля</label>
        <input
          type="password"
          class="form-control"
          id="confirm_pwd"
          v-model="confirm_pwd"
          placeholder="Подтвердите пароль"
        />
      </div>
      <div class="btn-section">
        <button type="submit" class="btn btn-primary">
          Зарегистрироваться
        </button>
        <router-link to="/">Войти</router-link>
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
  name: "Registration",
  data() {
    return {
      login: null,
      pwd: null,
      email: null,
      confirm_pwd: null,
    };
  },
  computed: {
    ...mapState(useAuthStore, { err: "err" }),
  },
  methods: {
    ...mapActions(useAuthStore, ["loginReg"]),
    submit() {
      this.loginReg("/api/users", {
        name: this.login,
        email: this.email,
        password: this.pwd,
        password_confirmation: this.confirm_pwd,
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
