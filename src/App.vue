<template>
  <div class="app-shell">
    <AppHeader />
    <main class="page-shell">
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
/**
 * App.vue 负责定义项目列表数据。
 * projects 使用 Project[] 类型约束。
 * 页面通过 v-for 遍历 projects，
 * 并把每一个 project 通过 props 传给 ProjectCard。
 */
import { RouterView } from 'vue-router';
import AppHeader from './components/AppHeader.vue';
</script>

<style scoped>
.app-shell {
  min-height: 100vh;
}

.page-shell {
  max-width: 1080px;
  margin: 0 auto;
  padding: 40px 24px;
}
</style>
