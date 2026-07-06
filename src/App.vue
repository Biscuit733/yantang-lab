
<template>
  <main class="app">
    <h1>YanTang Lab</h1>
    <p>我的全栈 + AI 工程师成长实验室</p>

    <ProjectCard :project="firstProject" />
  </main>
</template>

<script setup lang="ts">
/**
 *  import ProjectCard 引入组件
 *  import type { Project } 引入项目类型
 *  const firstProject:Project 声明firstProject 必须符合 Project类型
 *  <ProjectCard :project="firstProject" /> 渲染组件并传递firstProject
 *  :project 是v-bind简写，将firstProject 作为属性传递给组件
 */
  import ProjectCard from './components/ProjectCard.vue'
  import type { Project } from './types/project'

  const firstProject : Project = {
    id:1,
    title: 'YanTang Lab 个人站',
    description: '用于展示我的前端、全栈、AI应用和部署能力。',
    techStack: ['Vue3', 'TypeScript', 'Vite'],
    status: "planning"
  }
</script>

<style scoped>
.app {
  max-width: 960px;
  margin: 0 auto;
  padding: 40px 20px;
}
</style>