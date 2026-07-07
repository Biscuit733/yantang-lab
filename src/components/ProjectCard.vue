<template>
    <article class="project-card">
        <h3>{{ project.title }}</h3>
        <p>{{ project.description }}</p>
        <p>状态：{{ project.status }}</p>
        <div class="tech-list">
            <p>技术栈：</p>
            <span v-for="(tech,index) in project.techStack" :key="tech">{{ tech }}
                <span v-if="index !== project.techStack.length - 1">/</span>
            </span>
        </div>
        <p v-if="project.link">
            <a v-if="project.link" :href="project.link" target="_blank">查看项目</a>
        </p>
    </article>
</template>

<script setup lang="ts">
// import type 只导入类型
import type { Project } from '../types/project'

// defineProps 声明这个组件需要外部传入project
defineProps<{
    project: Project;
}>()
</script>

<style scoped>
.project-card {
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.tech-list {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
}
</style>