<template>
  <div>
    <header>
      <router-link to="/login">로그인</router-link> |
      <router-link to="/signup">회원가입</router-link>
    </header>
    <!--실제보여지는부분-->
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
