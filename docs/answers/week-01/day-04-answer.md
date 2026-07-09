# Day 04 作业答案｜Pinia 状态管理 + 个人站全局数据中心

> 保存路径建议：`docs/answers/week-01/day-04-answer.md`

---

## 1. 基本信息

- 日期：
- 周次：Week 01
- Day：Day 04
- 今日主题：Pinia 状态管理 + 个人站全局数据中心
- 当前状态：未完成 / 部分完成 / 已完成

---

## 2. 今日完成内容

请勾选：

- [√] 安装 `pinia`
- [√] `main.ts` 注册 `createPinia()`
- [√] 创建 `src/types/gallery.ts`
- [√] 创建 `src/stores/usePortfolioStore.ts`
- [√] store 中有 state
- [√] store 中有 getters
- [√] store 中有 actions
- [√] Projects 页面使用 store 数据
- [√] Projects 页面支持标签筛选
- [√] Gallery 页面使用 store 数据
- [√] Gallery 页面支持类型筛选
- [√] Home 页面展示 `featuredProjects`
- [√] 执行 `npm run build`
- [√] 完成 Git commit
- [√] 推送到 GitHub
- [√] 完成英语练习

补充说明：概念方面我懂，他就是vue2 的vuex。 具体用起来也能看得懂，但是很多代码我都是照着课件里面写的。

```txt

```

---

# 3. 今日习题答案

## A. 理论题

### 题目 1：Pinia 解决了什么问题？

我的答案：我的理解，pinia是一个状态管理工具。他可以存储很多全局的状态（值，比如登录信息，用户信息，便于全局调用），同时也封装了很多全局的方法，这些都是便于全局调用的，方便管理维护信息内容。而且也为每个页面减少了代码量，页面只需要调用栏位，或者触发action和渲染getter即可。

```txt

```

---

### 题目 2：state / getters / actions 分别是什么？

我的答案：state是用来存放全局状态的，getters是用来计算状态的，actions是用来修改状态的。

```txt

```

---

### 题目 3：为什么项目数据不应该长期写死在页面组件里？

我的答案：1.我觉得是要看数据的使用率，以及重复率。比如用户信息，如果我多个页面都需要使用，那么我重复的再每个页面去获取存放，相当浪费资源和时间。这时候 我在登录的时候就一次性的将用户信息存放在全局状态中。这样就相当方便了。2.便于后期的维护，一个数据的值，可能会在许多页面被渲染使用，如果这时候他的获取方式，或者他的栏位发生变更，那我只需要在全局的pinia对应ts下面修改对应的那个值就行了。

```txt

```

---

### 题目 4：Pinia 和 props 的区别是什么？

我的答案：1.pinia是全局状态管理工具，props 是组件之间数据传递的方式。2.pinia 不限于两个两个父子组件，他可以是许许多多没有关联的组件中共用的。3.pinia 还可以提供方法，用来修改全局状态。

```txt

```

---

### 题目 5：什么场景适合用全局状态？

我的答案：1.登录的时候将一些用户信息，登录信息，菜单信息，系统信息一次性的存起来。2.多个页面都会用到的参数，比如筛选条件，排序条件，分页条件等。

```txt

```

---

## B. 代码理解题

### 题目 1：`filteredProjects` 是怎么工作的？

我的答案：1.首先会将state的值作为入参传入，然后第一步是比较state.activeProjectTag,也就是电机选中的项目tag是哪个，如果是all 就是全部，那会直接返回整个state.projects数组。2.如果不是all 则会过滤state.projects数组，只返回数组techStack

```txt

```

---

### 题目 2：`projectTags` 为什么要用 `new Set()`？

我的答案：new Set() 可以去重，返回一个数组，数组中的元素都是唯一的。

```txt

```

---

### 题目 3：`activeProjectTag` 改变后，页面为什么会更新？

我的答案：首先，用户点击Projects下面的那些按钮，会触发setActiveProjectTag方法，从而会使得activeProjectTag的值发生变化，然后pinia里面的getters会重新计算，使得filteredProjects值发生变化。从而页面上面的Projects列表会更新。

```txt

```

---

### 题目 4：`resetProjectFilter` 的作用是什么？

我的答案：目前代码里没有用到，作用就是重置activeProjectTag的值为All。

```txt

```

---

### 题目 5：HomeView 为什么可以直接读取 `featuredProjects`？

我的答案：正确的引入之后，featuredProjects就是一个计算值，当然可以直接读取。

```txt

```

---

# 4. 今日核心代码提交

## 4.1 `src/main.ts`

```ts
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import router from './router'

createApp(App).use(createPinia()).use(router).mount('#app')

```

---

## 4.2 `src/types/gallery.ts`

```ts
export type GalleryType = 'xiaohongshu' | 'poster' | 'download'

export type GalleryItem = {
  id: number
  title: string
  type: GalleryType
  description: string
}
```

---

## 4.3 `src/stores/usePortfolioStore.ts`

```ts
import { defineStore } from 'pinia'
import type { GalleryType, GalleryItem } from '../types/gallery'
import type { Project } from '../types/project'

export type ProjectFilter = 'All' | string
export type GalleryFilter = 'all' | GalleryType

export const usePortfolioStore = defineStore('portfolio', {
    state: () => ({
        activeProjectTag : 'All' as ProjectFilter,
        activeGalleryType : 'all' as GalleryFilter,

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
          ] as GalleryItem[]
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
          return ['all', ...new Set(types)] as GalleryType[]
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
    }
})
```

---

## 4.4 `src/views/ProjectsView.vue`

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

<style scoped>
.project-list {
  display: grid;
  gap: 16px;
  margin-top: 24px;
}
.page button.active{
  background-color: #f0f0f0;
}
</style>

```

---

## 4.5 `src/views/GalleryView.vue`

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

<style scoped>
.page button.active{
  background-color: #f0f0f0;
}
</style>
```

---

## 4.6 `src/views/HomeView.vue`

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

# 5. 今日面试表达

## 题目：我在这个项目里是如何使用 Pinia 管理共享状态的？

我的回答：首先在usePortfolioStore中定义了state、getters、actions。state中定义了projects、gallery、activeProjectTag、activeGalleryType、featuredProjects，全局状态，然后在getters中定义了projectTags、galleryTypes、filteredProjects、filteredGallery，计算属性，最后在actions中定义了setActiveProjectTag、setActiveGalleryType，resetProjectFilter、resetGalleryFilter，修改全局状态。在ProjectsViews里面，通过用户触发按钮从而触发筛选状态，页面从而刷新。Gallery也同样。
后续API只需要操作pinia里面的值，所有对应页面的值都能获取到了。

```txt

```

要求：

- 必须提到 `usePortfolioStore`
- 必须提到 `state`
- 必须提到 `getters`
- 必须提到 `actions`
- 必须提到 Projects 筛选
- 必须提到 Gallery 筛选
- 必须提到为什么后续接 API 更好维护

---

# 6. 今日英语练习

## 6.1 翻译题

### 题目 1：我使用 Pinia 管理项目列表和筛选条件。

我的翻译：I use pinia to manage the project list and filter conditions.

```txt

```

---

### 题目 2：filteredProjects 是从 projects 和 activeProjectTag 计算出来的。

我的翻译：FilteredProjects is computed from projects and activeProjectTag.

```txt

```

---

### 题目 3：Actions 用来修改全局状态。

我的翻译：Actions are used to modify the global state.

```txt

```

---

# 7. 今日遇到的问题

## 问题 1

问题描述：1.你页面思路的设计我没有get到，完全是照着你的方案 什么页面写什么东西， 但是一下子也没想到 在pinia里面需要写哪些东西，这块东西是缺失的。2.我了解vue3里的pinia的机制，因为之前也写vuex,但是让我重头全部自己写，又感觉会卡壳。3. 定义类型的时候 我才知道 可以写成  'All' | string 这个代表 All 这个值 或者别的string类型是吧，4.我一开始不知道flatMap是干嘛用的了

```txt

```

报错信息：

```txt

```

我是怎么尝试解决的：
flatMap() 方法 我去查了一下文档， 相当于map().flat()
```txt

```

当前状态：未解决

```txt
已解决 / 未解决 / 还不确定
```

---

# 8. 今日 Git 记录

执行过的命令：git status git add . git commit -m "add pinia" git push

```bash

```

commit 信息：

```txt

```

GitHub 链接：

```txt

```

`npm run build` 是否通过：一开始没通过有个类型报错了@click="store.setActiveGalleryType(type)"  然后我修改了
galleryTypes(state) {
          const types = state.gallery.map((item) => item.type)
          return ['all', ...new Set(types)] as GalleryType[]
        },

```txt

```

---

# 9. 今日复盘

## 9.1 今天真正学会了什么？

```txt
重新学习了一遍pinia 包括怎么定义 怎么引用 怎么修改。

```

---

## 9.2 今天只是照着做但还没完全懂的地方？

```txt
照着做的  算是会了 也不是很会
```

---

## 9.3 今天最大的错误或卡点是什么？

```txt

```

---

## 9.4 我能不能不用看代码解释 state / getters / actions？

```txt
可以
```

---

## 9.5 明天最需要补什么？

```txt
明天不知道要啥 但是周末考试的时候 多出点基础题我需要基础考试，包括一些js基础 ts基础的考题
```

---

# 10. 严格自检

请如实勾选：

- [√] 我能解释 Pinia 解决了什么问题
- [√] 我能解释 state
- [√] 我能解释 getters
- [√] 我能解释 actions
- [√] 我能解释 Pinia 和 props 的区别
- [√] 我完成了 Projects 标签筛选
- [√] 我完成了 Gallery 类型筛选
- [√] 我完成了 Home featuredProjects
- [√] 我执行了 `npm run build`
- [√] 我完成了 Git commit 和 push
- [√] 我没有只让 AI 改代码，自己也理解了

如果有没勾选的，请写原因：

```txt

```

---

# 11. 小红书素材笔记，暂不发布

## 今日可分享主题

```txt
前端转全栈 Day 4：我终于知道为什么项目需要状态管理了
```

## 今日学到的 3 个点

```txt
1.
2.
3.
```

## 今日踩坑记录

```txt

```

## 可截图素材建议

```txt
1. main.ts 注册 Pinia
2. usePortfolioStore.ts
3. Projects 标签筛选效果
4. Gallery 类型筛选效果
5. Home featuredProjects
```

---

# 12. 等待 ChatGPT 批改

完成后，请把以下内容发给 ChatGPT：

- `src/main.ts`
- `src/stores/usePortfolioStore.ts`
- `src/views/ProjectsView.vue`
- `src/views/GalleryView.vue`
- `src/views/HomeView.vue`
- Projects 筛选截图
- Gallery 筛选截图
- 本文件内容
- `npm run build` 是否通过
- Git commit 信息
- 你最不确定的 1-3 个问题
