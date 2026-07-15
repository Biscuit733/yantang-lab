<template>
  <section class="page">
    <p class="eyebrow">Fullstack AI Journey</p>
    <h1>YanTang Lab</h1>
    <p class="description">
      我的个人学习型技术站，用来记录从前端开发转向全栈 + AI 应用工程师的过程。
    </p>

    <section class="featured">
      <h2>Featured Projects</h2>

      <div class="featured-list">
        <article
          v-for="project in store.featuredProjects"
          :key="project.id"
          class="featured-card"
        >
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
        </article>
      </div>
    </section>
  </section>
</template>

<script setup lang="ts">
import { usePortfolioStore } from '../stores/usePortfolioStore'

const store = usePortfolioStore()
</script>
