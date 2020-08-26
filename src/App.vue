<template>
  <div>
    <app-header></app-header>
    <!--실제보여지는부분-->
    <router-view></router-view>
  </div>
</template>

<script>
import AppHeader from '@/components/common/AppHeader.vue';

export default {
  components: {
    AppHeader,
  },
};
</script>

<style></style>
