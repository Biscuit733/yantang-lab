<template>
  <div class="app-shell">
    <AppHeader />
    <main class="page-shell">
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
/**
 * App.vue 是应用的全局布局入口。
 * 它负责渲染 AppHeader 和 RouterView。
 * 具体页面内容由 Vue Router 根据当前路径匹配到对应的 views 页面组件。
 * 这样可以避免把所有页面内容堆在 App.vue 中。
 */
import { RouterView } from 'vue-router'
import AppHeader from './components/AppHeader.vue'
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
