# Day 02｜Vue3 列表渲染 + TypeScript 数组建模

> 全栈 + AI 工程师突击训练｜严格版  
> 今日关键词：`Project[]`、`v-for`、`:key`、`props`、组件复用、面试表达  
> 建议耗时：2 - 2.5 小时  
> 今日产出：个人站从“单个项目卡片”升级成“多个项目卡片列表”

---

## 0. 今日结论

今天不是学新花样，而是补一个前端工程里非常核心的能力：

> 把一份数据列表，通过组件复用，渲染成可维护的页面。

你今天必须把 `firstProject` 单个对象，升级成 `projects: Project[]` 数组，并用 `v-for` 渲染多个 `ProjectCard`。

---

## 1. 为什么今天学这个？

你的个人站后面会有：

- 作品集项目列表
- 技术文章列表
- 图片资源列表
- AI Demo 列表
- 学习记录列表

这些本质上都是：

```txt
一组数据
↓
循环渲染
↓
变成页面列表
```

如果你只会复制多个 HTML 卡片，那项目会越来越乱。

如果你能用：

```txt
TypeScript 类型 + 数组数据 + v-for + 组件复用
```

你写出来的页面才有扩展性，后面接接口、接数据库、接后台管理时才不会推倒重来。

---

## 2. 今日学习目标

完成今天后，你必须能做到：

1. 说清楚 `Project` 和 `Project[]` 的区别。
2. 用 TypeScript 定义一个项目数组。
3. 用 `v-for` 渲染多个 `ProjectCard`。
4. 知道为什么 `v-for` 需要 `:key`。
5. 说清楚 `App.vue` 和 `ProjectCard.vue` 的数据流。
6. 能用面试语言解释“组件复用”的价值。
7. 完成一次 Git commit 并推送到 GitHub。

---

## 3. 前置知识回顾

### 3.1 Day 1 你已经做过什么？

Day 1 你已经完成了：

- 创建 Vue3 + TypeScript 项目
- 定义 `Project` 类型
- 创建 `ProjectCard.vue`
- 在 `App.vue` 中传入一个 `firstProject`
- 理解基础 `props`

Day 1 当前结构大概是：

```txt
App.vue
  ↓ 通过 :project 传数据
ProjectCard.vue
  ↓ 通过 defineProps 接收 project
页面显示一个项目卡片
```

### 3.2 今天要升级成什么？

今天要变成：

```txt
App.vue
  ↓ 定义 projects 数组
  ↓ v-for 遍历 projects
  ↓ 每次把一个 project 传给 ProjectCard
ProjectCard.vue
  ↓ 复用同一个组件
页面显示多个项目卡片
```

---

## 4. 核心概念详细解释

## 4.1 `Project` 是什么？

`Project` 表示一个项目对象应该长什么样。

例如：

```ts
export type Project = {
  id: number
  title: string
  description: string
  techStack: string[]
  link?: string
  status: 'learning' | 'building' | 'done'
}
```

逐行解释：

- `id: number`：项目唯一编号。
- `title: string`：项目标题。
- `description: string`：项目描述。
- `techStack: string[]`：技术栈数组。
- `link?: string`：项目链接，可有可无。
- `status`：项目状态，只能是三个值之一。

---

## 4.2 `Project[]` 是什么？

`Project` 是一个项目。

`Project[]` 是多个项目组成的数组。

```ts
const projects: Project[] = [
  {
    id: 1,
    title: 'YanTang Lab',
    description: '我的个人学习型技术站。',
    techStack: ['Vue 3', 'TypeScript', 'Vite'],
    status: 'building',
  },
  {
    id: 2,
    title: 'AI Content Hub',
    description: '后续用于展示 AI 内容生成和管理能力。',
    techStack: ['AI', 'Node.js', 'API'],
    status: 'learning',
  },
]
```

你要记住：

```txt
Project = 一个对象
Project[] = 多个 Project 对象组成的数组
```

---

## 4.3 什么是 `v-for`？

`v-for` 是 Vue 里的列表渲染语法。

它的作用是：

```txt
把数组里的每一项，循环渲染成页面元素或组件。
```

例如：

```vue
<ProjectCard
  v-for="project in projects"
  :key="project.id"
  :project="project"
/>
```

逐行解释：

```vue
v-for="project in projects"
```

意思是：遍历 `projects` 数组，每次取出一个项目，临时叫做 `project`。

```vue
:key="project.id"
```

意思是：告诉 Vue 当前这一项的唯一身份。

```vue
:project="project"
```

意思是：把当前这个 `project` 传给子组件 `ProjectCard`。

---

## 4.4 为什么 `v-for` 需要 `key`？

Vue 渲染列表时，需要知道每一项是谁。

如果没有 `key`，当数组发生新增、删除、排序时，Vue 可能不知道哪个元素对应哪个数据。

所以必须写：

```vue
:key="project.id"
```

不要偷懒写：

```vue
:key="index"
```

前期学习可以见到 `index`，但真实项目更推荐稳定唯一的 `id`。

---

## 4.5 什么是组件复用？

组件复用就是：

```txt
同一个组件，传入不同数据，渲染出不同内容。
```

比如你只写一个 `ProjectCard.vue`，但可以显示 3 个、10 个、100 个项目。

这比复制 100 份 HTML 强很多。

面试表达：

```txt
组件复用的价值是把重复 UI 抽成独立组件，通过 props 接收不同数据，从而降低重复代码，提高维护性和扩展性。
```

---

## 5. 今日实战步骤

## 第 1 步：确认 `Project` 类型

打开：

```txt
src/types/project.ts
```

建议改成：

```ts
export type ProjectStatus = 'learning' | 'building' | 'done'

export type Project = {
  id: number
  title: string
  description: string
  techStack: string[]
  link?: string
  status: ProjectStatus
}
```

解释：

- `ProjectStatus` 单独抽出来，后面可以复用。
- `status` 不写成普通 `string`，而是限制成三个固定值。
- 这样写更专业，也更接近真实项目。

---

## 第 2 步：检查 `ProjectCard.vue`

打开：

```txt
src/components/ProjectCard.vue
```

基础版本可以这样写：

```vue
<template>
  <article class="project-card">
    <h3>{{ project.title }}</h3>

    <p>{{ project.description }}</p>

    <p>状态：{{ project.status }}</p>

    <p>
      技术栈：
      <span
        v-for="(tech, index) in project.techStack"
        :key="tech"
      >
        {{ tech }}<span v-if="index < project.techStack.length - 1"> / </span>
      </span>
    </p>

    <a
      v-if="project.link"
      :href="project.link"
      target="_blank"
      rel="noreferrer"
    >
      查看项目
    </a>
  </article>
</template>

<script setup lang="ts">
import type { Project } from '../types/project'

defineProps<{
  project: Project
}>()
</script>

<style scoped>
.project-card {
  padding: 20px;
  border: 1px solid #e5e7eb;
  border-radius: 16px;
  margin-bottom: 16px;
}

.project-card h3 {
  margin-top: 0;
}
</style>
```

重点：

- `defineProps` 声明子组件需要接收 `project`。
- `v-if="project.link"` 表示有链接才显示。
- `rel="noreferrer"` 是外链安全小习惯。
- 技术栈这里暂时用 `v-for` 拼接，后面会用 `computed` 优化。

---

## 第 3 步：修改 `App.vue`

打开：

```txt
src/App.vue
```

把 `firstProject` 改成 `projects` 数组：

```vue
<template>
  <main class="app">
    <header class="hero">
      <h1>YanTang Lab</h1>
      <p>我的全栈 + AI 工程师成长实验室。</p>
    </header>

    <section class="project-section">
      <h2>Projects</h2>

      <ProjectCard
        v-for="project in projects"
        :key="project.id"
        :project="project"
      />
    </section>
  </main>
</template>

<script setup lang="ts">
import ProjectCard from './components/ProjectCard.vue'
import type { Project } from './types/project'

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
    status: 'learning',
  },
  {
    id: 3,
    title: 'MES Lite',
    description: '面向制造业业务场景的轻量级管理系统练习项目。',
    techStack: ['Vue 3', 'NestJS', 'Database'],
    status: 'learning',
  },
]
</script>

<style scoped>
.app {
  max-width: 960px;
  margin: 0 auto;
  padding: 40px 20px;
}

.hero {
  margin-bottom: 32px;
}

.project-section {
  display: grid;
  gap: 16px;
}
</style>
```

---

## 第 4 步：运行项目

执行：

```bash
npm run dev
```

浏览器检查：

- 页面能打开。
- 显示 `YanTang Lab`。
- 显示 `Projects`。
- 页面上至少有 3 个项目卡片。
- 每个卡片显示标题、描述、状态、技术栈。
- 有链接的项目能点击。

---

## 第 5 步：提交 Git

先看状态：

```bash
git status
```

加入暂存区：

```bash
git add .
```

提交：

```bash
git commit -m "feat: render project list with reusable card"
```

推送：

```bash
git push
```

---

## 6. 常见错误

### 错误 1：`status` 报错

如果你写了：

```ts
status: 'doing'
```

但类型里只有：

```ts
'learning' | 'building' | 'done'
```

就会报错。

解决方式：

```ts
status: 'building'
```

或者把类型扩展成：

```ts
export type ProjectStatus = 'learning' | 'building' | 'done' | 'paused'
```

---

### 错误 2：`ProjectCard` 报 `project` 不存在

检查是否写了：

```ts
defineProps<{
  project: Project
}>()
```

如果没有这段，模板里就不知道 `project` 是什么。

---

### 错误 3：`Project` 类型导入路径错了

如果文件在：

```txt
src/components/ProjectCard.vue
```

导入路径应该是：

```ts
import type { Project } from '../types/project'
```

如果在：

```txt
src/App.vue
```

导入路径应该是：

```ts
import type { Project } from './types/project'
```

---

### 错误 4：复制了 3 个 `ProjectCard`

错误写法：

```vue
<ProjectCard :project="project1" />
<ProjectCard :project="project2" />
<ProjectCard :project="project3" />
```

今天不允许这样写。

必须用：

```vue
<ProjectCard
  v-for="project in projects"
  :key="project.id"
  :project="project"
/>
```

---

## 7. 今日严格验收标准

## 7.1 算通过

你必须同时满足：

- 页面正常运行。
- 至少显示 3 个项目卡片。
- 使用了 `projects: Project[]`。
- 使用了 `v-for`。
- 使用了 `:key="project.id"`。
- `ProjectCard` 是复用组件。
- `Project` 类型在 `src/types/project.ts`。
- 没有 TypeScript 报错。
- 完成 Git commit + push。
- 能用自己的话解释数据流。

## 7.2 必须返工

出现以下任意情况，需要返工：

- 复制多个 HTML 卡片，没有用 `v-for`。
- 数据没有类型约束。
- `key` 用随机数。
- 页面能跑但自己讲不清楚。
- 只让 Codex 改，自己没理解。
- 没有提交 Git。
- answer.md 没写习题答案。

---

## 8. 今日面试表达

你今天要能说出这段：

```txt
我把个人站的项目展示从单个对象升级成了项目数组。每个项目都使用 Project 类型约束，保证字段结构一致。页面通过 v-for 遍历 projects 数组，并把每个 project 通过 props 传给 ProjectCard 组件。这样 ProjectCard 就可以复用，后续新增项目时只需要增加数据，不需要重复写 HTML。
```

英文简化版：

```txt
I use a typed project array to manage multiple portfolio projects.
Each project is rendered with a reusable ProjectCard component.
```

---

## 9. 今日技术英语模块

## 9.1 今日英语目标

能用英文说清楚：

```txt
我用数组和可复用组件渲染多个项目。
```

## 9.2 今日词汇

| 单词 | 中文 | 技术场景 |
|---|---|---|
| project | 项目 | a Vue project |
| portfolio | 作品集 | portfolio website |
| component | 组件 | reusable component |
| reusable | 可复用的 | reusable card |
| render | 渲染 | render a list |
| array | 数组 | project array |
| type | 类型 | TypeScript type |
| props | 父传子数据 | pass props |

## 9.3 今日句型

### 句型 1

```txt
I use A to do B.
```

我用 A 来做 B。

例句：

```txt
I use an array to manage multiple projects.
```

### 句型 2

```txt
This component is used to ...
```

这个组件用来……

例句：

```txt
This component is used to render a project card.
```

### 句型 3

```txt
Each item is rendered with ...
```

每一项都用……渲染。

例句：

```txt
Each project is rendered with a reusable component.
```

## 9.4 今日英语练习

请翻译成英文：

1. 我用数组管理多个项目。
2. 这个组件用来渲染项目卡片。
3. 每个项目都通过 props 传给 ProjectCard 组件。

---

## 10. 今日小红书素材区，暂不发布

今日可记录主题：

```txt
前端转全栈 Day 2：从一个卡片升级到项目列表
```

今日 3 个点：

1. `Project` 表示一个项目，`Project[]` 表示多个项目。
2. `v-for` 可以把数组渲染成页面列表。
3. 组件复用能减少重复代码，让页面更好维护。

可截图素材：

- `src/types/project.ts`
- `src/App.vue` 里的 `projects` 数组
- `ProjectCard` 组件
- 页面 3 个项目卡片效果
- GitHub commit 记录

---

## 11. 今日提交要求

完成后请提交：

```bash
git add .
git commit -m "feat: render project list with reusable card"
git push
```

---

## 12. 你完成后发给 ChatGPT 的内容

请发我：

1. `src/types/project.ts`
2. `src/components/ProjectCard.vue`
3. `src/App.vue`
4. 页面截图
5. `docs/answers/week-01/day-02-answer.md`
6. Git commit 信息
7. 你最不确定的 1-3 个问题

我会严格批改，并判断是否允许进入 Day 3。
