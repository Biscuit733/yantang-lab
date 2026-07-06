# Day 01 作业提交：TypeScript + Vue3 项目启动

## 1. 基本信息

- 日期：
- 周次：Week 01
- Day：Day 01
- 今日主题：TypeScript + Vue3 基础认知 + 个人站项目启动
- 今日实战项目：yantang-lab
- 当前状态：未完成 / 部分完成 / 已完成

---

## 2. 今日完成内容

今天我完成了：

- [√] 检查 Node.js 和 npm 环境
- [√] 创建 Vue3 + TypeScript 项目
- [√] 安装依赖
- [√] 启动项目
- [√] 创建 `src/types/project.ts`
- [√] 创建 `src/components/ProjectCard.vue`
- [√] 修改 `src/App.vue`
- [√] 页面成功显示项目卡片
- [√] 完成今日习题
- [√] 完成 Git 提交

补充说明：手搓了一个项目的框架，然后做了一个单组件的应用，以及一个类型的声明。然后在主页展示了该组件。做完后做了一个git项目的初始化，并且配置了github远端仓库，并提交了内容。

---

## 3. 今日习题答案

### A. 理论题

#### A1. 为什么 TypeScript 对全栈开发很重要？请用自己的话解释。

我的答案：因为JavaScript是一种弱类型语言，他没有类型检测机制，所以有时候会导致一些类型异常错误。typescript则是一种强类型语言，它在开发过程中，要求提前定义好变量的类型，这样在使用的时候也能统一类型，避免出现错误。同时我还觉得他可以定义一类便于不同页面同类数据的使用规则。维护起来也更加方便。

我不确定的地方：目前来看就是一个简单的定义么，没有别的方面。如果后续有需要，我会继续学习。

ChatGPT 修正建议：

> [!NOTE]
> 🟢 已通过：已经理解 TypeScript 可以统一类型、减少低级错误、提高维护性。

> [!TIP]
> 🟢 建议补充：TypeScript 主要是在开发阶段做静态类型检查，帮助我们在代码运行前发现类型错误。但 TypeScript 不等于运行时校验，接口返回的数据如果不符合预期，仍然需要前端运行时判断或后端校验。

> [!IMPORTANT]
> 📌 必须记住：TypeScript 能提高开发阶段的可靠性，但不能完全替代接口校验、后端校验和运行时错误处理。

---

#### A2. Vue 组件化开发解决了什么问题？

我的答案：可以抽离出组件与页面的关系，在一个复杂冗余的页面上，如果将单独的组件抽离，我觉得会使开发更加清晰便捷，同时抽离的组件，还可以提供给别的页面使用。可以提高开发效率。此外同样的一个组件，如果多个页面同时使用，并且发生了变化，那我只需要修改那个组件代码，则可以覆盖到每个页面，也是大大的提升了效率。

我不确定的地方：

ChatGPT 修正建议：

> [!NOTE]
> 🟢 已通过：已经理解组件化可以复用代码、拆分页面、提高维护性。

> [!TIP]
> 🟢 面试表达可以优化为：组件化的本质是把复杂页面拆成可维护、可复用、可组合的小模块。这样可以降低页面复杂度，提高开发效率，也方便后续统一维护和扩展。

---

#### A3. 为什么个人站不是“玩具项目”，而是你跳槽作品集的一部分？

我的答案：首先本身个人站是一个前后端分离的项目，包括到最终上线，他覆盖的技术面就有很多我目前会的以及生疏不懂的技术。所以对于个人来说这既是一个学习项目，也是一个实际项目。然后他同时也一个很好的展示我自己技术能力的项目。

我不确定的地方：

---

#### A4. 全栈工程师和普通前端开发最大的区别是什么？

我的答案：全栈最基础的就是前后端加部署项目。能一个人独立完成整个项目，而普通前端的话，需要依赖后端接口，才能完成项目。

我不确定的地方：

---

#### A5. AI 应用工程师和算法工程师有什么区别？

我的答案：我说一下我以前的认知，我认为的AI应用工程师，就是利用AI来解决应用场景的工程师。而算法工程师，我都认为是一些后端工程师，利用算法来调优。

我不确定的地方：

ChatGPT 修正建议：

> [!WARNING]
> 🔴 需要修改：原答案对算法工程师的理解不够准确。算法工程师不是简单的后端调优，而是更偏模型、算法、数据和训练。

> [!TIP]
> 🟢 建议改成：AI 应用工程师重点是把已有大模型或 AI 能力接入真实业务，做产品功能，比如 AI 总结、AI 问答、AI 文案生成、RAG 知识库、AI 工作流。算法工程师重点是模型、算法、数据、训练、评估、优化，比如模型训练、特征工程、推荐算法、机器学习、深度学习、模型效果优化。

> [!IMPORTANT]
> 📌 必须记住：我当前目标是 AI 应用工程师，不是算法工程师。重点不是训练模型，而是把 AI 能力接入产品和业务流程。

---

### B. 基础概念题

#### B1. Node.js 是什么？它和浏览器里的 JavaScript 有什么关系？

我的答案：Node.js 是JavaScript的运行环境，它可以支持在服务器运行JavaScript代码。JavaScript则是一种语言，可以在浏览器里运行，也可以在服务器里运行。

我不确定的地方：以前没有node.js的时候,服务器不能运行js么？

---

#### B2. npm 是做什么的？npm install 和 npm run dev 分别是什么意思？

我的答案：npm 是node.js的包管理工具，它可以用来安装，管理项目的依赖。npm install 是用来安装项目的依赖的，npm run dev 是用来启动项目的开发环境的。

我不确定的地方：

---

#### B3. Vite 在项目里起什么作用？

我的答案：vite 是一个前端开发工具，它可以用来快速启动前端项目的开发环境。

我不确定的地方：

---

#### B4. Vue 单文件组件里的 template、script、style 分别负责什么？

我的答案：template是用来写html的，script是用来写js逻辑的，style是用来写css的。

我不确定的地方：

---

#### B5. props 是什么？为什么组件需要 props？

我的答案：props 是用来组件传递数据的，父组件可以通过props来将数据传递给子组件。

我不确定的地方：

---

### C. 代码 / 实战小题

#### C1. 在 Project 类型里新增字段 status，值只能是 "planning"、"building"、"done" 三种。请写出类型定义。

我的答案：type status = "planning" | "building" | "done";

我不确定的地方：我以为是string，但是typescript里可以定义枚举类型，所以这里我是用枚举类型来定义的。

---

#### C2. 在 firstProject 里补充 status 字段，并在 ProjectCard.vue 中显示出来。

我的答案：firstProject.status = "planning"; // 这里我是用枚举类型来定义的。 具体代码我直接写在了对应页面了

我不确定的地方：

---

#### C3. 把 ProjectCard 里的 techStack 显示改成“技术栈：Vue3 / TypeScript / Vite”的形式。

我的答案：写在代码里面

```vue

```

我不确定的地方：

```txt

```

---

## 4. 今日代码提交

### 4.1 `src/types/project.ts`

```ts
export type Project = {
    id: number;
    title: string;
    description: string;
    techStack: string[];
    link?: string;
    status: "planning" | "building" | "done";
}
```

我的理解：

```txt
先是定义Project，然后定义他内部的每个参数。 ？是可选字段， 然后支持枚举类型。
status只能是planning、building、done三种。
```

---

### 4.2 `src/components/ProjectCard.vue`

```vue
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
```

我的理解：

```txt
这里写你对 ProjectCard 组件的理解。
比如：
这个组件通过 defineProps 接收父组件传过来的 project 数据。
然后在 template 中展示 title、description、techStack 和 link。
```

---

### 4.3 `src/App.vue`

```vue

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
```

我的理解：

```txt
App.vue 中定义了 firstProject 对象。
这个对象使用 Project 类型进行约束。
然后通过 :project="firstProject" 把数据传给 ProjectCard。
ProjectCard 通过 props 接收数据并渲染。
```

ChatGPT 修正建议：

> [!WARNING]
> 🔴 需要修改：当前答案写成了 projects 数组 + v-for，但实际代码是 firstProject 单个对象。

> [!TIP]
> 🟢 建议改成：App.vue 中定义了 firstProject 对象，这个对象使用 Project 类型进行约束，然后通过 :project="firstProject" 把数据传给 ProjectCard，ProjectCard 通过 props 接收数据并渲染。

> [!IMPORTANT]
> 📌 必须记住：复盘和作业答案必须和当前代码保持一致，不能写还没有实现的功能。

---

## 5. 核心概念理解

### 5.1 我对 TypeScript 的理解

```txt
TypeScript 总的来说是基于js，但是比js多了类型的定义。有个强类型的限制。做了规范化的要求，在代码开发中起到了保护的作用。
```

---

### 5.2 我对 Vue3 组件的理解

```txt
理解组件化开发，每个组件都有自己的模板、脚本、样式。组件之间通过 props 进行通信。
```

---

### 5.3 我对 props 的理解

```txt
props 是组件之间通信的一种方式。父组件可以通过 props 向子组件传递数据，子组件可以通过 props 接收数据。
```

---

### 5.4 我对 v-for 的理解

```txt
v-for 是 Vue 提供的一种指令，用于渲染列表数据。
```

---

### 5.5 我对 `ref` 和 `.value` 的理解

```txt
ref 是 Vue 提供的一种响应式数据类型，用于在组件中定义响应式数据。
.value 是 ref 实例的属性，用于访问或修改响应式数据的值。
```

---

## 6. 今日遇到的问题

### 问题 1

问题描述：`ref` 和 `.value` 对这块的理解不深

报错信息：

我是怎么尝试解决的： 需要你后续多一点讲解

目前状态：

---

### 问题 2

问题描述：

```txt
这里写第二个问题，没有就删掉。
```

报错信息：

```txt
这里贴报错。
```

我是怎么尝试解决的：

```txt
这里写处理过程。
```

目前状态：

```txt
已解决 / 未解决 / 还不确定
```

---

## 7. 今日 Git 记录

是否提交 Git：

- [√] 是
- [ ] 否

提交信息：

```bash
git commit -m "feat: initialize yantang lab with project cards"
```

如果还没提交，原因是：

```txt
这里写原因。
```

---

## 8. 复盘问题

### 8.1 今天哪些概念我还是说不清楚？

我的回答：我毕竟是前端开发，所以很多东西我还是知道的，只是很多基础概念我说不清，但是如何使用我还是清楚的。今天还是比较浅显的。

```txt

```

---

### 8.2 我是否真的知道 npm run dev 做了什么？

我的回答：我只知道他是一个开发命令，他运行了项目，但是具体做了什么我不清楚。

```txt

```

ChatGPT 修正建议：

> [!WARNING]
> 🔴 需要修改：当前答案只写了“启动项目开发环境”，还不够具体。

> [!TIP]
> 🟢 建议补充：npm run dev 会读取 package.json 中 scripts 里的 dev 命令。在当前 Vite 项目中，它会启动 Vite 开发服务器，让项目运行在本地地址，并支持代码修改后的热更新。

> [!IMPORTANT]
> 📌 必须记住：npm run xxx 本质上是执行 package.json 里 scripts 对应的命令。

---

### 8.3 我能否不用看代码，说出 ProjectCard 的数据从哪里来？

我的回答：首先定义类型，然后父组件里面是使用了类型，但是赋了真实的数据，然后传递给了子组件去渲染。

```txt

```

---

### 8.4 我今天有没有完成 Git commit？

我的回答：提交了

```txt

```

---

### 8.5 明天我最需要补的一个点是什么？

我的回答：前端更细致化的内容。

```txt

```

---

## 9. 今日自评

给自己打分：80吧，这个trae他有自动提示功能，很多虽然我会但是他提示的更加详细

```txt
今日完成度：__/100
```

我觉得今天掌握比较好的内容：

```txt
写 1-3 点。
```

我觉得今天还不清楚的内容：

```txt
写 1-3 点。
```

我希望 ChatGPT 帮我重点检查：我毕竟前端开发7年了，今天的东西像是没开发过的弄的。有点太过于少了，可以更加深入。

```txt
比如：
1. ProjectCard 组件写法对不对
2. props 理解是否正确
3. TypeScript 类型定义有没有问题
4. App.vue 结构是否合理
```

---

## 10. 明日待补

明天我需要继续补：

- [ ] Vue3 props
- [ ] v-for 列表渲染
- [ ] 组件拆分
- [ ] Vue Router
- [ ] 页面结构
- [√] 其他：vue3更加深入的内容。

---

## ChatGPT 批改记录

### 1. 本次评分

- 综合评分：82/100
- 代码完成度：85/100
- 概念理解：75/100
- 作业完整度：80/100
- Git/GitHub 流程：90/100

### 2. 本次通过内容

> [!NOTE]
> 🟢 已通过：Day 1 代码整体完成度合格，Project 类型、ProjectCard 组件、props 传值、GitHub 提交流程已经跑通。

> [!NOTE]
> 🟢 已通过：已经完成 yantang-lab 项目的初始化、GitHub 推送、公开仓库设置和学习目录整理。

### 3. 需要重点修正的问题

#### 问题 1：App.vue 数据流表达不准确

> [!WARNING]
> 🔴 需要修改：答案中写成了 projects 数组和 v-for，但当前代码实际是 firstProject 单个对象。

> [!TIP]
> 🟢 正确表达：App.vue 中定义了 firstProject 对象，这个对象使用 Project 类型进行约束，然后通过 :project="firstProject" 传给 ProjectCard，ProjectCard 通过 props 接收数据并渲染。

#### 问题 2：AI 应用工程师和算法工程师区别不准确

> [!WARNING]
> 🔴 需要修改：算法工程师不是简单的后端调优，而是更偏模型、算法、数据、训练和效果优化。

> [!TIP]
> 🟢 正确表达：AI 应用工程师重点是把已有 AI 能力接入业务系统；算法工程师重点是模型训练、算法优化、数据处理和模型效果提升。

#### 问题 3：npm run dev 理解需要补充

> [!WARNING]
> 🔴 需要修改：不能只记成“启动项目”，要知道它执行的是 package.json 里的 scripts.dev。

> [!TIP]
> 🟢 正确表达：npm run dev 会读取 package.json 中 scripts 里的 dev 命令，在 Vite 项目中通常会启动 Vite 开发服务器，并支持本地预览和热更新。

#### 问题 4：TypeScript 的边界需要补充

> [!WARNING]
> 🔴 需要修改：TypeScript 不是万能校验工具，它主要解决开发阶段的类型检查。

> [!TIP]
> 🟢 正确表达：TypeScript 能在开发阶段提前发现类型错误，但接口返回数据、用户输入、后端数据仍然需要运行时校验和异常处理。

### 4. 今日结论

> [!IMPORTANT]
> 📌 Day 1 通过，可以进入 Day 2。

> [!IMPORTANT]
> 📌 下一步重点：Vue3 响应式基础、多项目数组、v-for 列表渲染、computed 计算属性，以及把 ProjectCard 从单个项目升级为多个项目卡片。

### 5. 下一步待办

- [ ] 修正 App.vue 理解部分
- [ ] 修正 AI 应用工程师和算法工程师区别
- [ ] 补充 npm run dev 的具体含义
- [ ] 补充 TypeScript 静态类型检查的边界
- [ ] 提交本次修正
