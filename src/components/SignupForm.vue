<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="username">id: </label>
      <input
        id="username"
        type="text"
        v-model="username"
        placeholder="이메일 형식으로 입력"
      />
    </div>
    <div>
      <label for="password">pw: </label>
      <input id="password" type="text" v-model="password" />
    </div>
    <div>
      <label for="nickname">nickname: </label>
      <input id="nickname" type="text" v-model="nickname" />
    </div>
    <button :disabled="!isUsernameValid || !password || !nickname">
      Sign Up
    </button>
    <p>{{ logMessage }}</p>
  </form>
</template>

<script>
import { registerUser } from '@/api/index';
import { validateEmail } from '@/utils/validataion.js';

export default {
  data() {
    return {
      username: '',
      password: '',
      nickname: '',
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
        // console.log('form 제출');
        const userData = {
          username: this.username,
          password: this.password,
          nickname: this.nickname,
        };
        const { data } = await registerUser(userData);
        console.log(data.username);
        this.logMessage = `${data.username} 님이 가입되었습니다.`;
      } catch (error) {
        console.log(error);
        this.logMessage = '회원가입 실패';
      } finally {
        this.initForm();
      }
    },
    initForm() {
      this.username = '';
      this.password = '';
      this.nickname = '';
    },
  },
};
</script>

<style></style>
