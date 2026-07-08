<template>
  <section class="page">
    <p class="code">404</p>
    <h1>Page Not Found</h1>
    <p>你访问的页面不存在。</p>

    <RouterLink to="/">
      Back Home
    </RouterLink>
  </section>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.code {
  color: #dc2626;
  font-weight: 700;
}
</style>