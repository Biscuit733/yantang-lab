<template>
  <article class="stat-card">
    <p class="stat-label">{{ label }}</p>
    <strong class="stat-value">{{ value }}</strong>
  </article>
</template>

<script setup lang="ts">
defineProps<{
  label: string
  value: string | number
}>()
</script>

<style scoped>
.stat-card {
  padding: 16px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  background: #ffffff;
}

.stat-label {
  margin: 0 0 8px;
  color: #6b7280;
  font-size: 14px;
}

.stat-value {
  color: #111827;
  font-size: 28px;
}
</style>
