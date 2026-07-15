<template>
  <section class="page">
    <h1>Projects</h1>
    <p>这里展示我的项目、实验和 AI 应用 Demo。</p>

    <div class="filter-list">
      <button
        v-for="tag in store.projectTags"
        :key="tag"
        type="button"
        :class="{ active: store.activeProjectTag === tag }"
        @click="store.setActiveProjectTag(tag)"
      >
        {{ tag }}
      </button>
    </div>

    <div class="filter-list">
      <button
        v-for="status in store.projectStatusTags"
        :key="status"
        type="button"
        :class="{ active: store.activeProjectStatus === status }"
        @click="store.setActiveProjectStatus(status)"
      >
        {{ status }}
      </button>
    </div>

    <p>当前筛选结果：{{ store.filteredProjects.length }} 个项目</p>

    <div class="project-list">
      <ProjectCard
        v-for="project in store.filteredProjects"
        :key="project.id"
        :project="project"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import ProjectCard from '../components/ProjectCard.vue'
import { usePortfolioStore } from '../stores/usePortfolioStore'

const store = usePortfolioStore()
</script>

<style scoped>
.project-list {
  display: grid;
  gap: 16px;
  margin-top: 24px;
}

.page button.active {
  background-color: #f0f0f0;
}
</style>
