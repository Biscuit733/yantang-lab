<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { navItems } from '../data/nav'
</script>

<template>
  <header class="app-header">
    <RouterLink class="logo" to="/">YanTang Lab</RouterLink>

    <nav class="nav-list">
      <RouterLink
        v-for="navItem in navItems"
        :key="navItem.path"
        class="nav-link"
        :to="navItem.path"
        active-class="nav-link-active"
      >
        {{ navItem.label }}
      </RouterLink>
    </nav>
  </header>
</template>

<style scoped>
.app-header {
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 16px 24px;
  border-bottom: 1px solid #e5e7eb;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(12px);
}

.logo {
  font-weight: 700;
  color: #111827;
  text-decoration: none;
}

.nav-list {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.nav-link {
  color: #4b5563;
  text-decoration: none;
}

.nav-link-active {
  color: #111827;
  font-weight: 700;
}
</style>
