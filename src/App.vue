<template>
  <main class="app">
    <h1>YanTang Lab</h1>
    <p>我的全栈 + AI 工程师成长实验室</p>

    <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
  </main>
</template>

<script setup lang="ts">
/**
 * App.vue 负责定义项目列表数据。
 * projects 使用 Project[] 类型约束。
 * 页面通过 v-for 遍历 projects，
 * 并把每一个 project 通过 props 传给 ProjectCard。
 */
import ProjectCard from './components/ProjectCard.vue'
import type { Project } from './types/project'

const projects: Project[] = [
  {
    id: 1,
    title: 'YanTang Lab 个人站',
    description: '用于展示我的前端、全栈、AI应用和部署能力。',
    techStack: ['Vue3', 'TypeScript', 'Vite'],
    status: 'planning',
  },
  {
    id: 2,
    title: 'learning Pro',
    description: '学习全栈知识，ai应用开发，部署能力',
    techStack: ['Vue3', 'TypeScript', 'Vite'],
    status: 'building',
    link: 'https://github.com/tjy1994/learning-pro',
  },
  {
    id: 3,
    title: '第三个模块内容',
    description: '用于展示我的前端、全栈、AI应用和部署能力。',
    techStack: ['Vue3', 'TypeScript', 'Vite'],
    status: 'done',
    link: 'https://github.com/tjy1994/yantang-lab',
  },
]
</script>

<style scoped>
.app {
  max-width: 960px;
  margin: 0 auto;
  padding: 40px 20px;
}
</style>
