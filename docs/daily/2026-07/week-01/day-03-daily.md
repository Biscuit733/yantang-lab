# Day 03｜Vue Router + 个人站页面骨架

> 全栈 + AI 工程师突击训练｜严格提速版  
> 今日关键词：`vue-router`、`createRouter`、`routes`、`RouterLink`、`RouterView`、Layout、404 页面  
> 建议耗时：2.5 - 3 小时  
> 今日产出：把个人站从“单页项目列表”升级为“多页面站点骨架”

---

## 0. 今日强度说明

从 Day 03 开始，不再用一整天讲基础语法。

今天你要直接完成一个真实个人站必须有的页面结构：

- 首页
- 文章页
- 图片资源页
- 作品集页
- 关于页
- 404 页面
- 顶部导航
- 基础布局
- 路由配置

今天重点不是“知道 Vue Router 是什么”，而是：

> 你能不能把个人站拆成多个页面，并让用户通过导航切换页面。

---

## 1. 为什么今天学 Vue Router？

你现在的个人站如果只有一个 `App.vue`，它只是一个页面 Demo。

真正的个人站至少会有：

```txt
/               首页
/articles       文章列表
/gallery        图片资源
/projects       作品集
/about          关于我
```

这就需要路由。

路由的本质是：

```txt
不同 URL 地址
↓
对应不同页面组件
↓
用户不用刷新整个网页，也能切换页面
```

这就是单页应用 SPA 的核心能力之一。

---

## 2. 今日学习目标

完成今天后，你必须能做到：

1. 安装并配置 `vue-router`。
2. 创建 `router/index.ts`。
3. 创建多个 `views` 页面。
4. 使用 `RouterLink` 做导航。
5. 使用 `RouterView` 渲染当前页面。
6. 创建 404 页面。
7. 能解释 `App.vue`、`router/index.ts`、`views` 三者关系。
8. 能用面试语言解释“前端路由解决了什么问题”。

---

## 3. 核心概念快速讲清楚

## 3.1 什么是前端路由？

以前传统网站切换页面时，浏览器会向服务器请求一个新的 HTML 页面。

现在 Vue 这种单页应用中，页面切换很多时候不需要刷新整个网页，而是由前端根据 URL 决定显示哪个组件。

比如：

```txt
访问 /projects
↓
Vue Router 找到 /projects 对应的组件
↓
渲染 ProjectsView.vue
```

---

## 3.2 `routes` 是什么？

`routes` 是一张“路径和页面组件的映射表”。

```ts
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/projects',
    name: 'projects',
    component: ProjectsView,
  },
]
```

你可以理解成：

```txt
path = 浏览器地址
component = 这个地址对应显示哪个页面
```

---

## 3.3 `RouterLink` 是什么？

`RouterLink` 是 Vue Router 提供的跳转组件。

```vue
<RouterLink to="/projects">Projects</RouterLink>
```

它的作用类似 `<a>`，但更适合单页应用，因为它不会让整个页面刷新。

---

## 3.4 `RouterView` 是什么？

`RouterView` 是路由页面的出口。

你在 `App.vue` 写：

```vue
<RouterView />
```

当访问 `/projects` 时，这里显示 `ProjectsView.vue`。

当访问 `/gallery` 时，这里显示 `GalleryView.vue`。

所以你要记住：

```txt
RouterLink 负责跳转
RouterView 负责显示当前路由对应的页面
```

---

## 3.5 404 页面是什么？

当用户访问不存在的路径，比如：

```txt
/abc
/not-exist
/test/123
```

你不能让页面空白，应该显示 404 页面。

Vue Router 中可以这样写：

```ts
{
  path: '/:pathMatch(.*)*',
  name: 'not-found',
  component: NotFoundView,
}
```

这表示：所有没有匹配到的路径，都交给 `NotFoundView`。

---

## 4. 今日实战步骤

## 第 1 步：安装 Vue Router

在项目根目录执行：

```bash
npm install vue-router@4
```

如果你的项目用 pnpm，就执行：

```bash
pnpm add vue-router@4
```

---

## 第 2 步：创建页面目录

创建这些文件：

```txt
src/views/HomeView.vue
src/views/ArticlesView.vue
src/views/GalleryView.vue
src/views/ProjectsView.vue
src/views/AboutView.vue
src/views/NotFoundView.vue
```

---

## 第 3 步：创建路由文件

新建：

```txt
src/router/index.ts
```

写入：

```ts
import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import ArticlesView from '../views/ArticlesView.vue'
import GalleryView from '../views/GalleryView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import AboutView from '../views/AboutView.vue'
import NotFoundView from '../views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/articles',
      name: 'articles',
      component: ArticlesView,
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: GalleryView,
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFoundView,
    },
  ],
})

export default router
```

---

## 第 4 步：在 main.ts 中挂载 router

打开：

```txt
src/main.ts
```

改成类似这样：

```ts
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')
```

重点：

```ts
.use(router)
```

意思是把路由插件安装到 Vue 应用里。

---

## 第 5 步：创建导航数据

为了不把导航写死在模板里，创建：

```txt
src/data/nav.ts
```

写入：

```ts
export type NavItem = {
  label: string
  path: string
}

export const navItems: NavItem[] = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'Articles',
    path: '/articles',
  },
  {
    label: 'Gallery',
    path: '/gallery',
  },
  {
    label: 'Projects',
    path: '/projects',
  },
  {
    label: 'About',
    path: '/about',
  },
]
```

这一步是为了训练你“数据抽离”的习惯。

---

## 第 6 步：创建 Header 组件

新建：

```txt
src/components/AppHeader.vue
```

写入：

```vue
<template>
  <header class="app-header">
    <RouterLink class="logo" to="/">
      YanTang Lab
    </RouterLink>

    <nav class="nav-list">
      <RouterLink
        v-for="item in navItems"
        :key="item.path"
        class="nav-link"
        active-class="nav-link-active"
        :to="item.path"
      >
        {{ item.label }}
      </RouterLink>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { navItems } from '../data/nav'
</script>

<style scoped>
.app-header {
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 16px 24px;
  border-bottom: 1px solid #e5e7eb;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(12px);
}

.logo {
  font-weight: 700;
  color: #111827;
  text-decoration: none;
}

.nav-list {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.nav-link {
  color: #4b5563;
  text-decoration: none;
}

.nav-link-active {
  color: #111827;
  font-weight: 700;
}
</style>
```

---

## 第 7 步：改造 App.vue

打开：

```txt
src/App.vue
```

替换成：

```vue
<template>
  <div class="app-shell">
    <AppHeader />

    <main class="page-shell">
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from './components/AppHeader.vue'
</script>

<style scoped>
.app-shell {
  min-height: 100vh;
}

.page-shell {
  max-width: 1080px;
  margin: 0 auto;
  padding: 40px 24px;
}
</style>
```

注意：

现在 `App.vue` 不再直接写页面内容，它变成了“布局入口”。

---

## 第 8 步：创建各个页面

## 8.1 HomeView.vue

```vue
<template>
  <section class="page">
    <p class="eyebrow">Fullstack AI Journey</p>
    <h1>YanTang Lab</h1>
    <p class="description">
      我的个人学习型技术站，用来记录从前端开发转向全栈 + AI 应用工程师的过程。
    </p>
  </section>
</template>

<style scoped>
.page {
  padding: 80px 0;
}

.eyebrow {
  color: #16a34a;
  font-weight: 700;
}

h1 {
  font-size: 56px;
  margin: 12px 0;
}

.description {
  max-width: 680px;
  color: #4b5563;
  line-height: 1.8;
}
</style>
```

## 8.2 ArticlesView.vue

```vue
<template>
  <section class="page">
    <h1>Articles</h1>
    <p>这里后续会展示我的技术文章、学习笔记和项目复盘。</p>
  </section>
</template>
```

## 8.3 GalleryView.vue

```vue
<template>
  <section class="page">
    <h1>Gallery</h1>
    <p>这里后续会放小红书图片资源、可下载素材和视觉作品。</p>
  </section>
</template>
```

## 8.4 ProjectsView.vue

今天你要把 Day 2 的项目列表迁移到这里。

```vue
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
import type { Project } from '../types/project'

const projects: Project[] = [
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
]
</script>

<style scoped>
.project-list {
  display: grid;
  gap: 16px;
  margin-top: 24px;
}
</style>
```

## 8.5 AboutView.vue

```vue
<template>
  <section class="page">
    <h1>About</h1>
    <p>
      我是一名前端开发者，正在系统训练全栈开发、AI 应用集成、部署和工程化能力。
    </p>
  </section>
</template>
```

## 8.6 NotFoundView.vue

```vue
<template>
  <section class="page">
    <p class="code">404</p>
    <h1>Page Not Found</h1>
    <p>你访问的页面不存在。</p>

    <RouterLink to="/">
      Back Home
    </RouterLink>
  </section>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.code {
  color: #dc2626;
  font-weight: 700;
}
</style>
```

---

## 9. 今日实战任务

## 基础必做

必须完成：

- 安装 `vue-router@4`
- 创建 `src/router/index.ts`
- 创建 6 个页面
- 创建 `AppHeader.vue`
- 创建 `src/data/nav.ts`
- `App.vue` 使用 `AppHeader` + `RouterView`
- `/projects` 页面显示 Day 2 的项目卡片列表
- `/not-exist-test` 能显示 404 页面
- 能正常 `npm run dev`
- 完成 Git commit + push

---

## 进阶加分

有时间继续做：

- 给导航增加 active 样式
- 给各页面加统一 `.page` 样式
- 给 Project 数据抽离到 `src/data/projects.ts`
- 移动端导航自动换行
- 在首页增加跳转到 Projects 的按钮

---

## 30K 挑战

写一段“路由设计说明”放到 `answer.md`：

```txt
本项目使用 Vue Router 管理页面导航。App.vue 作为全局布局入口，只负责渲染 Header 和 RouterView。具体页面内容拆分到 views 目录中，router/index.ts 负责维护 URL 和页面组件的映射关系。这样项目结构更清晰，也方便后续扩展文章页、图片页、作品集页和详情页。
```

---

## 10. 严格验收标准

## 10.1 算通过

必须同时满足：

- 首页 `/` 能访问。
- `/articles` 能访问。
- `/gallery` 能访问。
- `/projects` 能访问并显示项目卡片。
- `/about` 能访问。
- 随便输一个不存在路径能显示 404。
- 导航栏能跳转。
- App.vue 不再堆所有页面内容。
- 路由配置清晰。
- 没有 TypeScript 报错。
- 有 Git commit。

## 10.2 必须返工

出现以下情况，必须返工：

- 页面切换靠条件判断，不用 Vue Router。
- 所有页面还堆在 App.vue。
- 没有 404。
- 没有导航。
- Projects 页面没有迁移 Day 2 项目列表。
- 代码能跑但你讲不清楚 `RouterView` 是什么。
- 没有 Git 提交。

---

## 11. 今日常见错误

## 错误 1：页面空白

检查 `main.ts` 是否写了：

```ts
createApp(App).use(router).mount('#app')
```

少了 `.use(router)`，路由不会生效。

---

## 错误 2：`RouterLink` 报错

检查是否导入：

```ts
import { RouterLink } from 'vue-router'
```

在 `<script setup>` 中显式导入更清晰。

---

## 错误 3：访问 `/projects` 刷新后 404

本地 Vite 一般没问题。后续部署到服务器时，需要配置 history fallback。

今天先记住这个概念：

```txt
createWebHistory 更像真实路径，但部署时需要服务器支持。
createWebHashHistory 会带 #，部署简单但 URL 不够美观。
```

---

## 12. 今日面试表达

你今天必须能说出：

```txt
我在项目中引入了 Vue Router 来管理页面导航。router/index.ts 维护路径和页面组件的映射关系，App.vue 作为全局布局入口，只保留 Header 和 RouterView。用户点击 RouterLink 时，URL 会变化，RouterView 会渲染当前路径对应的页面组件。这样可以把首页、文章页、图片页、作品集页和关于页拆开维护，后续扩展详情页和后台页面也更清晰。
```

英文简化版：

```txt
I use Vue Router to manage page navigation.
RouterView renders the component that matches the current route.
```

---

## 13. 今日技术英语模块

## 13.1 今日英语目标

能用英文说清楚：

```txt
我使用 Vue Router 管理页面导航。
```

## 13.2 今日词汇

| 单词 | 中文 | 场景 |
|---|---|---|
| route | 路由 | route config |
| router | 路由器 | Vue Router |
| navigation | 导航 | page navigation |
| page | 页面 | project page |
| component | 组件 | page component |
| layout | 布局 | app layout |
| render | 渲染 | render a page |
| not found | 未找到 | 404 page |

## 13.3 今日句型

```txt
I use Vue Router to manage page navigation.
我使用 Vue Router 管理页面导航。
```

```txt
RouterView renders the current page component.
RouterView 渲染当前页面组件。
```

```txt
Each route maps a path to a page component.
每个路由都把一个路径映射到一个页面组件。
```

## 13.4 今日英语练习

请翻译：

1. 我使用 Vue Router 管理页面导航。
2. 每个路由都把一个路径映射到一个页面组件。
3. RouterView 用来渲染当前页面。

---

## 14. 今日 Git 提交

建议提交信息：

```bash
git add .
git commit -m "feat: add vue router and site pages"
git push
```

---

## 15. 今天完成后发给 ChatGPT

请发：

1. `src/router/index.ts`
2. `src/main.ts`
3. `src/App.vue`
4. `src/components/AppHeader.vue`
5. `src/views/ProjectsView.vue`
6. 页面截图，至少包括首页和 Projects 页
7. `day-03-answer.md`
8. Git commit 信息
9. 你最不确定的 1-3 个问题

---

## 16. 今天的路线调整说明

今天开始提速。

Day 1-2 是为了跑通流程和确认基础，不代表后面继续慢讲 Vue 基础。

从今天开始，路线调整为：

```txt
基础概念只讲必要部分
每天直接推进项目结构
每次都要求 GitHub 产出
每次都要求面试表达
```

今天完成后，你的个人站就不再是单页 Demo，而是有正式路由结构的站点骨架。
