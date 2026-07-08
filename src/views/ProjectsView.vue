<template>
  <section class="page">
    <h1>Projects</h1>
    <p>这里展示我的项目、实验和 AI 应用 Demo。</p>

    <div class="project-list">
      <ProjectCard
        v-for="project in projects"
        :key="project.id"
        :project="project"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import ProjectCard from '../components/ProjectCard.vue'
import { projects } from '../data/projects'
</script>

<style scoped>
.project-list {
  display: grid;
  gap: 16px;
  margin-top: 24px;
}
</style>