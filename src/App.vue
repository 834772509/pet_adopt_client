<template>
  <div class="wrapper">
    <RouterLink to="/">主页</RouterLink>
    <RouterLink to="/mine">我的</RouterLink>
  </div>

  <RouterView />
</template>

<script lang="ts" setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<style scoped></style>
