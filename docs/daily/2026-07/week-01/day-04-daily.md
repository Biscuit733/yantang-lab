# Day 04｜Pinia 状态管理 + 个人站全局数据中心

> 全栈 + AI 工程师突击训练｜严格提速版  
> 今日关键词：`Pinia`、`store`、`state`、`getters`、`actions`、筛选、共享状态  
> 建议耗时：2.5 - 3 小时  
> 今日产出：把个人站的数据从“页面 / 静态 data 文件”升级成“全局状态中心 + 可交互筛选”

---

## 0. 今日强度说明

Day 03 你已经完成了 Vue Router，多页面骨架已经起来。Day 04 直接进入状态管理。

今天不是为了“装一个 Pinia”，而是要解决真实项目问题：

> 多个页面都要用的数据，不能一直散落在组件和 data 文件里。

今天你要把项目数据、图片资源数据、筛选条件集中到 Pinia store 中，并让 Projects / Gallery / Home 三个页面都能读取 store 数据。

---

## 1. 为什么今天学 Pinia？

你的个人站后面会越来越复杂：

- Projects 页面要筛选项目
- Gallery 页面要筛选图片资源
- Home 页面要展示精选项目
- Articles 页面要展示文章
- 后面要接 API、loading、error、登录状态、主题偏好

如果每个页面都自己管理数据，就会出现：

```txt
同一份数据到处复制
筛选逻辑散落在页面里
后面接接口时要改很多文件
组件之间传数据越来越乱
```

Pinia 的作用：

```txt
把多个页面都需要用的数据和操作逻辑集中管理。
```

---

## 2. 今日学习目标

完成今天后，你必须能做到：

1. 安装并注册 Pinia。
2. 创建 `src/stores/usePortfolioStore.ts`。
3. 说清楚 `state / getters / actions` 分别是什么。
4. Projects 页面支持项目标签筛选。
5. Gallery 页面支持资源类型筛选。
6. Home 页面读取精选项目。
7. 数据不再全部写死在页面组件中。
8. 完成 Git commit + push。
9. 能用面试语言解释“为什么项目需要状态管理”。

---

## 3. 快速诊断

下面这些如果你已经会，就快速过；不会再重点看代码。

### 3.1 你必须知道的 3 句话

```txt
state：真正保存的数据。
getters：基于 state 计算出来的数据。
actions：修改 state 的方法。
```

### 3.2 和 Vue 组件的关系

```txt
组件负责显示和交互。
store 负责保存数据和业务状态。
```

### 3.3 和 props 的区别

```txt
props：父组件传给子组件的数据。
Pinia：多个页面/组件都能共享的全局状态。
```

---

## 4. 核心概念讲清楚

### 4.1 state

state 就是 store 里的数据。

```ts
state: () => ({
  activeProjectTag: 'All',
  projects: [],
})
```

可以理解成组件里的 `data`，但它属于整个应用，不只属于某一个组件。

### 4.2 getters

getters 是从 state 计算出来的数据。

```ts
filteredProjects(state) {
  if (state.activeProjectTag === 'All') {
    return state.projects
  }

  return state.projects.filter((project) =>
    project.techStack.includes(state.activeProjectTag),
  )
}
```

### 4.3 actions

actions 是修改 state 的方法。

```ts
setActiveProjectTag(tag: string) {
  this.activeProjectTag = tag
}
```

组件里不要直接到处乱改状态，而是通过 action 改。

---

## 5. 今日实战步骤

### 第 1 步：安装 Pinia

```bash
npm install pinia
```

### 第 2 步：在 `main.ts` 注册 Pinia

```ts
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import router from './router'

createApp(App).use(createPinia()).use(router).mount('#app')
```

### 第 3 步：创建 Gallery 类型

新建：

```txt
src/types/gallery.ts
```

写入：

```ts
export type GalleryType = 'xiaohongshu' | 'poster' | 'download'

export type GalleryItem = {
  id: number
  title: string
  type: GalleryType
  description: string
}
```

### 第 4 步：创建 Pinia store

新建：

```txt
src/stores/usePortfolioStore.ts
```

写入：

```ts
import { defineStore } from 'pinia'
import type { Project } from '../types/project'
import type { GalleryItem, GalleryType } from '../types/gallery'

export type ProjectFilter = 'All' | string
export type GalleryFilter = 'all' | GalleryType

export const usePortfolioStore = defineStore('portfolio', {
  state: () => ({
    activeProjectTag: 'All' as ProjectFilter,
    activeGalleryType: 'all' as GalleryFilter,

    projects: [
      {
        id: 1,
        title: 'YanTang Lab 个人站',
        description: '用于记录我的前端、全栈、AI 应用和部署能力成长过程。',
        techStack: ['Vue 3', 'TypeScript', 'Vite'],
        link: 'https://github.com/Biscuit733/yantang-lab',
        status: 'building',
      },
      {
        id: 2,
        title: 'AI Content Hub',
        description: '后续用于沉淀 AI 文案、图片资源和内容管理能力。',
        techStack: ['AI', 'Node.js', 'API'],
        status: 'planning',
      },
      {
        id: 3,
        title: 'MES Lite',
        description: '面向制造业业务场景的轻量级管理系统练习项目。',
        techStack: ['Vue 3', 'NestJS', 'Database'],
        status: 'planning',
      },
    ] as Project[],

    gallery: [
      {
        id: 1,
        title: '小红书封面模板',
        type: 'xiaohongshu',
        description: '后续用于沉淀可复用封面资源。',
      },
      {
        id: 2,
        title: 'AI 海报资源',
        type: 'poster',
        description: '用于展示视觉资源和下载入口。',
      },
      {
        id: 3,
        title: '学习资料下载',
        type: 'download',
        description: '后续放 PDF、Markdown、图片素材。',
      },
    ] as GalleryItem[],
  }),

  getters: {
    projectTags(state) {
      const tags = state.projects.flatMap((project) => project.techStack)
      return ['All', ...new Set(tags)]
    },

    filteredProjects(state) {
      if (state.activeProjectTag === 'All') {
        return state.projects
      }

      return state.projects.filter((project) =>
        project.techStack.includes(state.activeProjectTag),
      )
    },

    galleryTypes(state) {
      const types = state.gallery.map((item) => item.type)
      return ['all', ...new Set(types)]
    },

    filteredGallery(state) {
      if (state.activeGalleryType === 'all') {
        return state.gallery
      }

      return state.gallery.filter((item) => item.type === state.activeGalleryType)
    },

    featuredProjects(state) {
      return state.projects.slice(0, 2)
    },
  },

  actions: {
    setActiveProjectTag(tag: ProjectFilter) {
      this.activeProjectTag = tag
    },

    resetProjectFilter() {
      this.activeProjectTag = 'All'
    },

    setActiveGalleryType(type: GalleryFilter) {
      this.activeGalleryType = type
    },

    resetGalleryFilter() {
      this.activeGalleryType = 'all'
    },
  },
})
```

### 第 5 步：修改 ProjectsView.vue

目标：从 store 读取项目，并支持标签筛选。

```vue
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
```

### 第 6 步：修改 GalleryView.vue

目标：从 store 读取 gallery，并支持类型筛选。

```vue
<template>
  <section class="page">
    <h1>Gallery</h1>
    <p>这里后续会放小红书图片资源、可下载素材和视觉作品。</p>

    <div class="filter-list">
      <button
        v-for="type in store.galleryTypes"
        :key="type"
        type="button"
        :class="{ active: store.activeGalleryType === type }"
        @click="store.setActiveGalleryType(type)"
      >
        {{ type }}
      </button>
    </div>

    <p>当前筛选结果：{{ store.filteredGallery.length }} 个资源</p>

    <div class="gallery-list">
      <article
        v-for="item in store.filteredGallery"
        :key="item.id"
        class="gallery-card"
      >
        <p class="type">{{ item.type }}</p>
        <h2>{{ item.title }}</h2>
        <p>{{ item.description }}</p>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import { usePortfolioStore } from '../stores/usePortfolioStore'

const store = usePortfolioStore()
</script>
```

### 第 7 步：修改 HomeView.vue

目标：首页读取 store 的精选项目。

```vue
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
```

---

## 6. 今日实战任务

### 基础必做

- 安装 `pinia`
- `main.ts` 注册 `createPinia()`
- 创建 `src/stores/usePortfolioStore.ts`
- 创建 `src/types/gallery.ts`
- Projects 页面使用 store 数据
- Projects 页面支持标签筛选
- Gallery 页面使用 store 数据
- Gallery 页面支持类型筛选
- Home 页面展示 `featuredProjects`
- 执行 `npm run build`
- Git commit + push

### 进阶加分

- 把 `filter-list` 样式抽成通用 class
- 新增 `resetProjectFilter`
- 新增 `resetGalleryFilter`
- 在 Projects 页面显示当前筛选结果数量
- 在 Gallery 页面显示当前资源数量

### 30K 挑战

在 answer.md 写一段“状态管理设计说明”：

```txt
本项目使用 Pinia 管理个人站中的共享状态。projects、gallery、activeProjectTag 和 activeGalleryType 被集中放在 usePortfolioStore 中。页面组件只负责触发 action 和渲染 getter 结果，例如 ProjectsView 通过 filteredProjects 获取筛选后的项目列表。这样可以避免多个页面重复维护数据，也方便后续把本地 mock 数据替换成 API 数据。
```

---

## 7. 今日习题

### A. 理论题

1. Pinia 解决了什么问题？
2. state / getters / actions 分别是什么？
3. 为什么项目数据不应该长期写死在页面组件里？
4. Pinia 和 props 的区别是什么？
5. 什么场景适合用全局状态？

### B. 代码理解题

1. `filteredProjects` 是怎么工作的？
2. `projectTags` 为什么要用 `new Set()`？
3. `activeProjectTag` 改变后，页面为什么会更新？
4. `resetProjectFilter` 的作用是什么？
5. HomeView 为什么可以直接读取 `featuredProjects`？

---

## 8. 严格验收标准

### 算通过

- `npm install pinia` 已完成。
- `package.json` 出现 `pinia`。
- `main.ts` 注册 `createPinia()`。
- `src/stores/usePortfolioStore.ts` 存在。
- store 中有 state / getters / actions。
- Projects 页面能点击标签筛选。
- Gallery 页面能点击类型筛选。
- Home 页面展示 featuredProjects。
- `npm run build` 通过。
- GitHub 有 commit。
- 能解释 Pinia 和 props 的区别。

### 必须返工

- 只安装 Pinia，但页面没用。
- store 里只有 state，没有 getters/actions。
- Projects 仍然直接 import `src/data/projects.ts`。
- Gallery 数据写死在页面模板里。
- 组件能显示但筛选无效。
- 没有执行 build。
- answer.md 没解释 `filteredProjects`。
- 你讲不清 state/getters/actions。

---

## 9. 今日面试表达

你今天必须能说出：

```txt
我在项目中使用 Pinia 管理个人站的共享状态。项目列表、图片资源、当前项目筛选标签和当前图片资源类型都放在 usePortfolioStore 中。state 用来保存原始数据和当前筛选条件，getters 用来根据筛选条件计算页面需要展示的数据，actions 用来修改当前筛选条件。这样页面组件只负责渲染和触发操作，数据逻辑集中在 store 中，后续接 API 时也更容易维护。
```

---

## 10. 技术英语 15 分钟

### 今日目标

能用英文解释 Pinia 的作用。

### 今日词汇

- state：状态
- store：状态仓库
- getter：计算状态
- action：操作方法
- filter：筛选
- shared state：共享状态
- derive：派生
- update：更新

### 今日句型

```txt
I use Pinia to manage shared state.
```

```txt
Getters are used to derive data from state.
```

```txt
Actions are used to update the store.
```

### 今日练习

翻译：

1. 我使用 Pinia 管理项目列表和筛选条件。
2. filteredProjects 是从 projects 和 activeProjectTag 计算出来的。
3. Actions 用来修改全局状态。

---

## 11. 今日 Git 提交

```bash
git add .
git commit -m "feat: add pinia portfolio store"
git push
```

---

## 12. 完成后发给 ChatGPT

请发：

1. `src/main.ts`
2. `src/stores/usePortfolioStore.ts`
3. `src/views/ProjectsView.vue`
4. `src/views/GalleryView.vue`
5. `src/views/HomeView.vue`
6. 页面截图：Projects 筛选前后、Gallery 筛选前后
7. `docs/answers/week-01/day-04-answer.md`
8. `npm run build` 是否通过
9. Git commit 信息
10. 你最不确定的 1-3 个问题
