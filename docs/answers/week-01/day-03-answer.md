# Day 03 作业答案｜Vue Router + 个人站页面骨架

> 保存路径建议：`docs/answers/week-01/day-03-answer.md`

---

## 1. 基本信息

- 日期：
- 周次：Week 01
- Day：Day 03
- 今日主题：Vue Router + 个人站页面骨架
- 当前状态：未完成 / 部分完成 / 已完成

---

## 2. 今日完成内容

请勾选：

- [√] 安装 `vue-router@4`
- [√] 创建 `src/router/index.ts`
- [√] 在 `main.ts` 中使用 `.use(router)`
- [√] 创建 `HomeView.vue`
- [√] 创建 `ArticlesView.vue`
- [√] 创建 `GalleryView.vue`
- [√] 创建 `ProjectsView.vue`
- [√] 创建 `AboutView.vue`
- [√] 创建 `NotFoundView.vue`
- [√] 创建 `AppHeader.vue`
- [√] 创建 `src/data/nav.ts`
- [√] `App.vue` 使用 `AppHeader` + `RouterView`
- [√] `/projects` 页面显示项目卡片
- [√] 不存在路径能显示 404 页面
- [√] 完成 Git commit
- [√] 推送到 GitHub
- [√] 完成英语练习

补充说明：

```txt

```

---

# 3. 今日习题答案

## A. 理论题

### 题目 1：前端路由解决了什么问题？

我的答案：我的理解，前端路由首先解决了页面跳转的问题，不再是刷新重新访问加载页面，而是通过url 路径的不同 去配置不同的页面组件。

```txt

```

---

### 题目 2：`RouterLink` 和普通 `<a>` 标签有什么区别？

我的答案：routerLink 是 vue 内部的路由组件，用于组件之前的路由跳转。 a标签是 html 标签用于页面跳转

```txt

```

---

### 题目 3：`RouterView` 的作用是什么？

我的答案：routerLink 是 路径跳转  routerView 是渲染组件的容器， 就是在这块区域呢 会根据路由渲染对应的内容。

```txt

```

---

### 题目 4：为什么不建议把所有页面内容都写在 `App.vue`？

我的答案：1.会使得App.vue变得相当冗余沉重，页面内容过多也会影响加载性能。2.如果都写在App.vue 后期维护起来也会加大难度，会变的更加复杂。

```txt

```

---

### 题目 5：为什么需要 404 页面？

我的答案：主要功能是用于提醒用户路径错误。然后也可以让用户在得知路径错误后，可以返回首页。

```txt

```

---

## B. 基础概念题

### 题目 1：`router/index.ts` 主要负责什么？

我的答案：配置路由组件，定义路由规则，创建路由实例。

```txt

```

---

### 题目 2：`routes` 数组里的 `path`、`name`、`component` 分别是什么意思？

我的答案：path路由路劲， name是路由名称，一个标识 component是路由组件 代表这个路由 走的是哪块代码。

```txt

```

---

### 题目 3：`createWebHistory(import.meta.env.BASE_URL)` 是做什么的？

我的答案：这个是我ai的答案，createWebHistory 是创建一个基于浏览器历史记录的路由历史记录。

。

```txt

```

---

### 题目 4：`App.vue`、`router/index.ts`、`views` 三者是什么关系？

我的答案：App.vue 是入口文件，用来渲染整个应用。 router/index.ts 是配置文件，配置不同路由的不同组件对应关系，  views 是页面代码 也就是每个组件的代码内容。

```txt

```

---

### 题目 5：为什么导航数据可以抽到 `src/data/nav.ts`？

我的答案：1.数据是静态的，且是全局的，所以可以抽离出来便于后期的维护。2.这个我的理解就是封装概念，把导航数据抽离出来，方便后续的维护和扩展。

。

```txt

```

---

## C. 代码 / 实战小题

### 题目 1：贴出你的路由配置

```ts
// 粘贴 src/router/index.ts
import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import AboutView from '../views/AboutView.vue'
import ArticlesView from '../views/ArticlesView.vue'
import GalleryView from '../views/GalleryView.vue'
import ProjectsView from '../views/ProjectsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL || '/'),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/articles',
      name: 'articles',
      component: ArticlesView
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: GalleryView
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: NotFoundView
    }
  ]
})

export default router
```

我的理解：

```txt

```

---

### 题目 2：贴出你的 App.vue 布局代码

```vue
<!-- 粘贴 src/App.vue -->
<template>
  <div class="app-shell">
    <AppHeader />
    <main class="page-shell">
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
/**
 * App.vue 负责定义项目列表数据。
 * projects 使用 Project[] 类型约束。
 * 页面通过 v-for 遍历 projects，
 * 并把每一个 project 通过 props 传给 ProjectCard。
 */
import { RouterView } from 'vue-router';
import AppHeader from './components/AppHeader.vue';
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

我的理解：

```txt

```

---

### 题目 3：贴出你的 AppHeader.vue 代码

```vue
<!-- 粘贴 src/components/AppHeader.vue -->
<script setup lang="ts">
import { RouterLink } from 'vue-router';
import {navItems} from "../data/nav"


</script>

<template>
    <header class="app-header">
        <router-link class="logo" to="/">YanTang Lab</router-link>

        <nav>
            <router-link v-for="navItem in navItems" :key="navItem.path" class="nav-link" :to="navItem.path" active-class="nav-link-active">{{navItem.name}}</router-link>
        </nav>
    </header>
</template>

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

我的理解：

```txt

```

---

### 题目 4：贴出你的 ProjectsView.vue 代码

```vue
<!-- 粘贴 src/views/ProjectsView.vue -->
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
```

我的理解：

```txt

```

---

# 4. 今日核心代码提交

## 4.1 `src/router/index.ts`

```ts
import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import AboutView from '../views/AboutView.vue'
import ArticlesView from '../views/ArticlesView.vue'
import GalleryView from '../views/GalleryView.vue'
import ProjectsView from '../views/ProjectsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL || '/'),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/articles',
      name: 'articles',
      component: ArticlesView
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: GalleryView
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: NotFoundView
    }
  ]
})

export default router
```

---

## 4.2 `src/main.ts`

```ts
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')

```

---

## 4.3 `src/App.vue`

```vue
<template>
  <div class="app-shell">
    <AppHeader />
    <main class="page-shell">
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
/**
 * App.vue 负责定义项目列表数据。
 * projects 使用 Project[] 类型约束。
 * 页面通过 v-for 遍历 projects，
 * 并把每一个 project 通过 props 传给 ProjectCard。
 */
import { RouterView } from 'vue-router';
import AppHeader from './components/AppHeader.vue';
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

---

## 4.4 `src/components/AppHeader.vue`

```vue
<script setup lang="ts">
import { RouterLink } from 'vue-router';
import {navItems} from "../data/nav"


</script>

<template>
    <header class="app-header">
        <router-link class="logo" to="/">YanTang Lab</router-link>

        <nav>
            <router-link v-for="navItem in navItems" :key="navItem.path" class="nav-link" :to="navItem.path" active-class="nav-link-active">{{navItem.name}}</router-link>
        </nav>
    </header>
</template>

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

## 4.5 `src/views/ProjectsView.vue`

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
import { projects } from '../data/projects'
</script>

<style scoped>
.project-list {
  display: grid;
  gap: 16px;
  margin-top: 24px;
}
</style>
```

---

# 5. 今日面试表达

## 题目：我在这个项目里是如何使用 Vue Router 管理页面导航的？

我的回答：1.首先我先定义了导航的类型， 然后在data文件夹下面创建了 类型nav， 以及实例化了navItems 2. 我创建了router/index.ts 配置路由界面，将路由和组件映射起来。3.去入口文件main.ts里面引入router,并且全局使用。4.在AppHeader里面引入了navItems,并且循环渲染了导航链接RouterLink。5.重写了APP.vue 在页面中先是用了AppHeader.vue 做了导航栏，然后下面用了routerView 用来渲染对应页面的内容。6.对应的页面内容分别放在了views文件夹下方的页面代码中。7.这样做的好处是拆分成了头部，内容的结构，并且不同的内容都分成了不同的views去存放，这样子便于管理维护，同样也提高了代码的阅读性。不至于一个页面冗余的很。

```txt

```

要求：

- 必须提到 `router/index.ts`
- 必须提到 `routes`
- 必须提到 `RouterLink`
- 必须提到 `RouterView`
- 必须提到 `views`
- 必须提到为什么这样更适合扩展

---

# 6. 今日英语练习

## 6.1 翻译题

### 题目 1：我使用 Vue Router 管理页面导航。

我的翻译：I use Vue Router to manage page navigation.

```txt

```

---

### 题目 2：每个路由都把一个路径映射到一个页面组件。

我的翻译：Each route maps a path to a page component.

```txt

```

---

### 题目 3：RouterView 用来渲染当前页面。

我的翻译：RouterView renders the current page component.

```txt

```

---

## 6.2 今日英文项目介绍

请用 2-3 句英文介绍今天做的路由功能：

```txt Router can navigate between pages and not refresh the page. i use Vue Router to manage page navigation.

```

可参考：

```txt
I use Vue Router to manage page navigation.
Each route maps a path to a page component.
RouterView renders the current page component.
```

---

# 7. 今日遇到的问题

## 问题 1

问题描述：这些内容呢，其实我都清楚，但是里面的原理其实不是很清楚 尤其是那块hash history createWebHistory(import.meta.env.BASE_URL) 这个东西。 包括拆分成不同的组件。这些你让我写 我也能写出来。但是可能现在会有些生疏了。然后用了trae 他一直在提示我。 所以倒也没什么难度。

```txt

```

报错信息：

```txt

```

我是怎么尝试解决的：

```txt

```

当前状态：

```txt
已解决 / 未解决 / 还不确定
```

---

## 问题 2

问题描述：面试时，我感觉路由会问的更加深， 可能会有一些调优的问题。目前没有涉及到 我不知道你是放到了后面，还是说路由这些就够了。

```txt

```

报错信息：

```txt

```

我是怎么尝试解决的：

```txt

```

当前状态：

```txt
已解决 / 未解决 / 还不确定
```

---

# 8. 今日 Git 记录

执行过的命令： git status
git add .
git commit -m "update router"
git push -u origin main

```bash

```

commit 信息：如上

```txt

```

GitHub 链接：我直接在消息里回你

```txt

```

---

# 9. 今日复盘

## 9.1 今天真正学会了什么？

```txt
1. 学习了 Vue Router 的使用方法，包括路由配置、导航组件、路由参数等。
2. 理解了路由的原理，包括路由的匹配和渲染。
3. 能够根据需求自定义路由配置，实现页面之间的导航。

```

---

## 9.2 今天只是照着做但还没完全懂的地方？

```txt
1. 路由的匹配和渲染机制
2. 路由参数的使用
3. 路由守卫的使用
4. 路由动画的使用
5. 路由重定向的使用
6. 路由守卫的使用
7. 路由守卫的使用
8. 路由守卫的使用
9. 路由守卫的使用
10. 路由守卫的使用
```

---

## 9.3 今天最大的错误或卡点是什么？

```txt

```

---

## 9.4 我能不能不用看代码解释 `RouterView`？

```txt
RouterView 用来渲染当前页面的内容。
```

---

## 9.5 明天最需要补什么？

```txt
1. 路由守卫的使用
2. 路由动画的使用
3. 路由重定向的使用
等路由更深层次的内容
```

---

# 10. 严格自检

请如实勾选：

- [√] 我能解释前端路由解决了什么问题
- [√] 我能解释 `RouterLink`
- [√] 我能解释 `RouterView`
- [√] 我能解释 `routes`
- [√] 我知道为什么 App.vue 不应该堆所有页面
- [√] 我完成了 404 页面
- [√] 我完成了 Git commit 和 push
- [√] 我没有只让 AI 改代码，自己也理解了

如果有没勾选的，请写原因：

```txt

```

---

# 11. 小红书素材笔记，暂不发布

## 今日可分享主题

```txt
前端转全栈 Day 3：把个人站从单页 Demo 升级成多页面站点
```

## 今日学到的 3 个点

```txt
1. 学习了 Vue Router 的使用方法，包括路由配置、导航组件、路由参数等。
2. 理解了路由的原理，包括路由的匹配和渲染。
3. 能够根据需求自定义路由配置，实现页面之间的导航。
```

## 今日踩坑记录

```txt

```

## 可截图素材建议

```txt
1. router/index.ts 路由配置
2. AppHeader 导航组件
3. RouterView 的 App.vue 结构
4. Projects 页面效果
5. 404 页面效果
```

---

# 12. 等待 ChatGPT 批改

完成后，请把以下内容发给 ChatGPT：

- `src/router/index.ts`
- `src/main.ts`
- `src/App.vue`
- `src/components/AppHeader.vue`
- `src/views/ProjectsView.vue`
- 页面截图
- 本文件内容
- Git commit 信息
- 你最不确定的 1-3 个问题
