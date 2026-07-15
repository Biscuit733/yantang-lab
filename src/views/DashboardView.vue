<template>
  <section class="page dashboard-page">
    <div class="page-heading">
      <div>
        <h1>Dashboard</h1>
        <p>Week 01 周测返工统计面板。</p>
      </div>

      <RouterLink class="back-link" to="/projects">返回 Projects</RouterLink>
    </div>

    <div class="stat-grid">
      <StatCard label="项目总数" :value="totalProjects" />
      <StatCard label="building 项目数量" :value="buildingProjects" />
      <StatCard label="planning 项目数量" :value="planningProjects" />
      <StatCard label="去重技术栈数量" :value="uniqueTechStackCount" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import StatCard from '../components/StatCard.vue'
import { usePortfolioStore } from '../stores/usePortfolioStore'

const store = usePortfolioStore()

const totalProjects = computed(() => store.projects.length)

const buildingProjects = computed(
  () => store.projects.filter((project) => project.status === 'building').length,
)

const planningProjects = computed(
  () => store.projects.filter((project) => project.status === 'planning').length,
)

const uniqueTechStackCount = computed(() => {
  const techStacks = store.projects.flatMap((project) => project.techStack)
  return new Set(techStacks).size
})
</script>

<style scoped>
.dashboard-page {
  display: grid;
  gap: 24px;
}

.page-heading {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
}

.page-heading h1 {
  margin-bottom: 8px;
}

.page-heading p {
  margin: 0;
  color: #6b7280;
}

.back-link {
  color: #2563eb;
  text-decoration: none;
}

.stat-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 16px;
}
</style>
