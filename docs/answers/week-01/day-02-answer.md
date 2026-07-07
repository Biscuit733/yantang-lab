# Day 02 作业答案｜Vue3 列表渲染 + TypeScript 数组建模

> 保存路径建议：`docs/answers/week-01/day-02-answer.md`

---

## 1. 基本信息

- 日期：
- 周次：Week 01
- Day：Day 02
- 今日主题：Vue3 列表渲染 + TypeScript 数组建模
- 当前状态：未完成 / 部分完成 / 已完成

---

## 2. 今日完成内容

请勾选：

- [√] 删除或替换了 `firstProject`
- [√] 在 `App.vue` 中创建了 `projects: Project[]`
- [√] 至少写了 3 个项目对象
- [√] 使用 `v-for` 渲染多个 `ProjectCard`
- [√] 使用 `:key="project.id"`
- [√] `ProjectCard` 通过 props 接收 project
- [√] 页面显示至少 3 个项目卡片
- [√] 项目能正常运行
- [√] 完成 Git commit
- [√] 推送到 GitHub
- [√] 完成英语小练习

补充说明：

```txt
这里写你今天实际完成了什么。
```

---

# 3. 今日习题答案

## A. 理论题

### 题目 1：`Project` 和 `Project[]` 有什么区别？

我的答案：Project 是单个对象的内容， Project[] 是一个数组集合，可以存放多个对象。

```txt

```

---

### 题目 2：`v-for` 的作用是什么？

我的答案：v-for 用于循环渲染数组中的每个元素，不需要再一遍遍复制相同内容。

```txt

```

---

### 题目 3：为什么 `v-for` 需要 `key`？

我的答案：key是循环里的唯一标识，告诉vue 哪个元素是哪个项目的。

```txt

```

---

### 题目 4：为什么项目列表适合用数组管理？

我的答案：首先项目列表他在格式上是统一的，无非就是每个元素的具体内容不同，然后数组管理的话，他就是格式统一，对应的数值不同。所以用数组管理项目列表，实现了项目的动态渲染，且高效。

```txt

```

---

### 题目 5：什么叫组件复用？请结合 ProjectCard 解释。

我的答案：组件复用就是抽离出公共的ui元素，这次我们做的是抽离出了卡片元素，将单独的卡片抽离成了一个组件，然后父组件调用这个组件的时候，可以通过循环渲染出多个卡片内容，然后通过props传递不同的数据，然后子组件通过defineProps接受不同的数据，从而实现组件的复用，数据的传递。

```txt

```

---

## B. 基础概念题

### 题目 1：`props` 在今天的代码里起什么作用？

我的答案：父组件通过props 将每个子组件所需的数据传递过去，然后子组件也通过对应的defineProps 接受来自父组件的数据信息。

```txt

```

---

### 题目 2：`App.vue` 和 `ProjectCard.vue` 的数据流是什么？

我的答案：App.vue 是通过引用了Project这个类型，定义了projects数组，然后通过循环，将每个卡片的数据通过props传递给子组件，子组件则通过defineProps 获取到数据

```txt

```

---

### 题目 3：为什么 `ProjectCard` 不应该自己写死项目数据？

我的答案：首先这是封装的一个组件，在封装组件中，如果是数据类的内容，我认为不应该写死，本身将组件抽离就是为了将他的ui和数据格式封装，以便别的组件调用，达到复用性，如果写死，那么就失去了组件的复用性。

```txt

```

---

### 题目 4：`link?: string` 里的问号是什么意思？

我的答案：？表示可选，就是不一定有这个数据，可以有也可以没有。

```txt

```

---

### 题目 5：为什么 `status` 不建议直接写成普通 `string`？

我的答案：在一些特定的情况下，某些栏位的值是需要有特定的值的，比如这个status,他就是规定了3个值，如果写成string类型，则他只需要传入字符串类型即可，与实际情况不符。

```txt

```

---

## C. 代码 / 实战小题

### 题目 1：写出你的 `Project` 类型定义

```ts
// 粘贴 src/types/project.ts 的代码
export type ProjectStatus = 'planning' | 'building' | 'done'

export type Project = {
  id: number
  title: string
  description: string
  techStack: string[]
  link?: string
  status: ProjectStatus
}

```

我的理解：ProjectStatus 是一个枚举类型，定义了项目的3个状态，planning, building, done。
Project 是一个对象类型，定义了项目的属性，包括id, title, description, techStack, link, status。

```txt

```

---

### 题目 2：写出你的 `projects: Project[]` 数据

```ts
// 粘贴 App.vue 中 projects 数组代码
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
```

我的理解：projects 是一个数组集合，可以存放多个项目对象。

```txt

```

---

### 题目 3：写出你的 `v-for` 渲染代码

```vue
<!-- 粘贴 App.vue 中 ProjectCard v-for 部分 -->
<template>
  <div class="project-list">
    <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
  </div>
</template>
```

我的理解：通过v-for循环，将每个项目的数据通过props传递给子组件，子组件则通过defineProps 接受数据，从而实现组件的复用，数据的传递。

```txt

```

---

# 4. 今日核心代码提交

## 4.1 `src/types/project.ts`

```ts
// 粘贴完整代码
export type ProjectStatus = 'planning' | 'building' | 'done'

export type Project = {
  id: number
  title: string
  description: string
  techStack: string[]
  link?: string
  status: ProjectStatus
}
```

---

## 4.2 `src/components/ProjectCard.vue`

```vue
<!-- 粘贴完整代码 -->
<template>
  <article class="project-card">
    <h3>{{ project.title }}</h3>
    <p>{{ project.description }}</p>
    <p>状态：{{ project.status }}</p>

    <div class="tech-list">
      <p>技术栈：</p>
      <span v-for="(tech, index) in project.techStack" :key="tech">
        {{ tech }}
        <span v-if="index !== project.techStack.length - 1">/</span>
      </span>
    </div>

    <a v-if="project.link" :href="project.link" target="_blank" rel="noreferrer">
      查看项目
    </a>
  </article>
</template>

<script setup lang="ts">
import type { Project } from '../types/project'

defineProps<{ project: Project }>()
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
```

---

## 4.3 `src/App.vue`

```vue
<!-- 粘贴完整代码 -->
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
```

---

# 5. 今日面试表达

## 题目：我在这个项目里是如何用 Vue3 和 TypeScript 管理作品集数据的？

我的回答：首先是用ts 来定义我的数据类型，包括每个对象所包含的元素以及类型。然后利用vue3的一些基础语法，定义一个组件。然后在父组件中先通过引用定义好的数据类型，去给定义好的类型，赋值。将实际的数组赋给定义好的类型，然后通过v-for循环遍历这个数组，将每个元素丢给封装好的子组件，通过props 和defineProps 来实现数据的传递，同时也实现了组件的复用性。

```txt

```

要求：

- 必须提到 `Project` 类型。
- 必须提到 `projects` 数组。
- 必须提到 `v-for`。
- 必须提到 `props`。
- 必须提到组件复用。

---

# 6. 今日英语练习

## 6.1 翻译题

### 题目 1：我用数组管理多个项目。

我的翻译：I use an array to manage multiple projects.

```txt

```

---

### 题目 2：这个组件用来渲染项目卡片。

我的翻译：this componet is used to render a project card.

```txt

```

---

### 题目 3：每个项目都通过 props 传给 ProjectCard 组件。

我的翻译：each project is rendered with a reusable ProjectCard component.

```txt

```

---

## 6.2 今日英文项目介绍

请尝试写 2-3 句英文介绍今天的功能：

```txt
today,i learned how to use Vue3 and TypeScript to manage list of projects.List can be rendered many components with "v-for".components prop is used to pass data to child components.
```

正确表达：

1. I use an array to manage multiple projects.
2. This component is used to render a project card.
3. Each project is passed to the ProjectCard component through props.

英文项目介绍修正版：

Today, I learned how to use Vue 3 and TypeScript to manage a list of projects.
The project list is rendered with v-for.
Props are used to pass data from the parent component to the child component.

可参考句型：

```txt
I use an array to manage multiple projects.
This component is used to render a project card.
Each project is rendered with a reusable ProjectCard component.
```

---

# 7. 今日遇到的问题

## 问题 1

问题描述：

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

问题描述：

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

执行过的命令： git status 先查看了提交信息
然后git add . 提交了所有文件
最后git commit -m "add list of projects" 提交了提交信息
最后git push -u origin main 推送了提交信息到远程仓库

```bash

```

commit 信息：

```txt

```

GitHub 链接：

```txt

```

---

# 9. 今日复盘

## 9.1 今天真正学会了什么？

```txt
今天真正学会了用 Project[] 表示多个项目对象，并用 projects 数组统一管理项目列表。
也理解了 App.vue 作为父组件负责准备数据，ProjectCard 作为子组件负责展示单个项目卡片。
通过 v-for 可以把数组里的每一个 project 渲染成一个 ProjectCard。
```

---

## 9.2 今天只是照着做但还没完全懂的地方？

```txt
对 Vue 在 v-for 更新列表时如何根据 key 复用 DOM 还没有完全理解。
对 TypeScript 联合类型 ProjectStatus 的底层意义还需要继续练习。
代码能照着写出来，但还需要多练习不用提示也能独立写出完整数据流。
```

---

## 9.3 今天最大的错误或卡点是什么？

```txt
最大的错误是命名和文档没有和代码保持一致。
代码里使用了 Projects 大写变量，不符合普通变量小驼峰命名习惯。
文档里还残留 firstProject 旧注释，并且 ProjectStatus 代码块出现了引号粘贴错误。
```

---

## 9.4 我能不能不用看代码解释 `v-for`？

```txt
可以大致解释：v-for 是 Vue 用来遍历数组并渲染列表的指令。
比如 projects 是一个项目数组，v-for="project in projects" 会把数组里的每一个项目取出来。
每取出一个 project，就渲染一个 ProjectCard，并通过 :project="project" 把当前项目数据传给子组件。
```

---

## 9.5 明天最需要补什么？

```txt
明天最需要补 Vue3 响应式基础，包括 ref、reactive、computed 和事件绑定。
同时还需要继续练习数组列表渲染、组件 props 传值，以及 key 的作用。
```

---

# 10. 严格自检

请如实勾选：

- [√] 我没有复制多个 HTML 卡片，而是使用了 `v-for`
- [√] 我能解释 `Project` 和 `Project[]`
- [√] 我能解释 `:key="project.id"`
- [√] 我能解释 `:project="project"`
- [√] 我能解释 props 是父组件传给子组件的数据
- [√] 我能解释为什么 ProjectCard 是可复用组件
- [√] 我完成了 Git commit 和 push
- [√] 我没有只让 AI 改代码，自己也理解了

如果有没勾选的，请写原因：

```txt

```

---

# 11. 小红书素材笔记，暂不发布

## 今日可分享主题

```txt
前端转全栈 Day 2：从一个卡片升级到项目列表
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
1. Project 类型代码
2. projects 数组代码
3. v-for 渲染代码
4. 页面显示多个项目卡片的效果
5. GitHub commit 记录
```

---

# 12. 等待 ChatGPT 批改

完成后，请把以下内容发给 ChatGPT：

- `src/types/project.ts`
- `src/components/ProjectCard.vue`
- `src/App.vue`
- 页面截图
- 本文件内容
- Git commit 信息
- 你最不确定的 1-3 个问题

## ChatGPT 批改记录

### 1. 本次评分

- 代码完成度：78/100
- 概念理解：80/100
- 作业完整度：62/100
- 代码规范：65/100
- 英语练习：68/100
- 综合评分：72/100

### 2. 本次结论

> [!IMPORTANT]
> Day 2 条件通过，可以进入 Day 3，但必须先完成返工。

### 3. 必须修正的问题

> [!WARNING]
> Projects 命名不规范，变量名应改为 projects。

> [!WARNING]
> App.vue 仍然保留 firstProject 的旧注释，必须删除或改成 projects 数据流说明。

> [!WARNING]
> project.ts 当前格式过于拥挤，需要格式化成多行类型定义。

> [!WARNING]
> answer.md 中 Vue 代码块没有完整显示，必须用 ```vue 正确包住。

> [!WARNING]
> 今日复盘区域为空，不符合严格训练要求。

### 4. 必须记住

> [!IMPORTANT]
> Project 表示一个项目对象，Project[] 表示多个项目对象组成的数组。

> [!IMPORTANT]
> v-for 用来遍历数组并渲染列表，key 用来给每一项提供稳定唯一标识。

> [!IMPORTANT]
> props 是父组件传给子组件的数据，ProjectCard 不应该写死数据，而应该通过 props 接收外部传入的 project。
