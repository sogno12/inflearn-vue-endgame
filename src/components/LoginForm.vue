<template>
  <div>
    <form @submit.prevent="submitForm">
      <div>
        <label for="username">ID: </label>
        <input
          id="username"
          type="text"
          v-model="username"
          placeholder="이메일 형식으로 입력"
        />
      </div>
      <div>
        <label for="password">PW: </label>
        <input id="password" type="text" v-model="password" />
      </div>
      <button :disabled="!isUsernameValid || !password" type="submit">
        로그인
      </button>
      <p>{{ logMessage }}</p>
    </form>
  </div>
</template>

<script>
import { loginUser } from '@/api/index';
import { validateEmail } from '@/utils/validataion.js';

export default {
  data() {
    return {
      username: '',
      password: '',
      logMessage: '',
    };
  },
  computed: {
    isUsernameValid() {
      return validateEmail(this.username);
    },
  },
  methods: {
    async submitForm() {
      try {
        // 비즈니스 로직
        const userData = {
          username: this.username,
          password: this.password,
        };
        const { data } = await loginUser(userData);
        this.logMessage = `${data.user.username} 님 환영합니다.`;
        console.log(data.user.username);
      } catch (error) {
        // 에러 핸들링할 코드
        // console.log(error.response);
        this.logMessage = `${error.response.data}`;
      } finally {
        this.innitForm();
      }
    },
    innitForm() {
      this.username = '';
      this.password = '';
    },
  },
};
</script>

<style></style>
