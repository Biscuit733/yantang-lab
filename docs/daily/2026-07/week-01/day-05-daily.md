# Day 05｜API 请求封装 + loading / error 状态

> 全栈 + AI 工程师突击训练｜严格提速版  
> 今日关键词：`async/await`、`Promise`、API 封装、`loading`、`error`、Pinia 异步 action、前端数据流  
> 建议耗时：3 - 4 小时  
> 今日产出：把个人站从“直接使用本地静态数组”升级为“通过 API 层加载数据，并处理 loading / error / retry”

---

## 0. 今日强度说明

Day 04 你已经把项目数据、图片资源、筛选条件集中到了 Pinia store。

Day 05 开始进入真实业务前端能力：

> 页面不是永远直接拿本地数组，真实项目里数据通常来自接口。

今天暂时不接真实后端，但你要先把**前端请求结构**搭出来：

```txt
页面
↓
调用 store action
↓
store action 调用 api 方法
↓
api 方法返回 Promise
↓
store 保存数据 / loading / error
↓
页面根据状态渲染
```

这就是以后接 Node / NestJS / FastAPI / AI 接口的基础。

---

## 1. 为什么今天学 API 请求封装？

你现在的 `usePortfolioStore.ts` 里，`projects` 和 `gallery` 直接写在 state 中。这样在早期练习没问题，但真实项目会有几个问题：

```txt
1. 数据来源写死，后面接后端时改动很大。
2. 页面不知道请求中、请求失败、请求成功分别怎么显示。
3. 所有请求逻辑如果写在页面里，后面会变乱。
4. 无法统一处理 error、loading、retry、接口地址、鉴权 token。
```

所以今天要引入一个重要工程习惯：

```txt
请求逻辑放 api 层
数据状态放 store
页面只负责渲染和触发操作
```

---

## 2. 今日学习目标

完成今天后，你必须能做到：

1. 创建 `src/api/portfolioApi.ts`，封装项目和图片资源的“模拟请求”。
2. 把 `projects` / `gallery` 初始值从 store 中的大数组，调整为通过 action 加载。
3. 在 Pinia store 中增加：`isLoading`、`errorMessage`、`hasLoaded`、`loadPortfolioData`、`retryLoadPortfolioData`。
4. 页面能够显示：加载中、加载失败、重试按钮、正常数据。
5. 能解释 `try / catch / finally`。
6. 能解释为什么 API 请求不应该直接写在页面组件里。
7. 完成 `npm run build` 和 Git 提交。

---

## 3. 前置知识快速诊断

### 3.1 Promise 是什么？

Promise 表示一个未来才会完成的结果。

```ts
const result = fetchProjects()
```

`fetchProjects()` 不一定马上拿到数据，它可能需要等待网络请求。

### 3.2 async / await 是什么？

`async / await` 是让异步代码更像同步代码的写法。

```ts
const projects = await fetchProjects()
```

意思是：等 `fetchProjects` 执行完成后，再把结果赋值给 `projects`。

### 3.3 try / catch / finally 是什么？

```ts
try {
  // 尝试执行可能失败的代码
} catch (error) {
  // 失败时执行
} finally {
  // 无论成功失败都会执行
}
```

API 请求中常见用法：

```txt
try：请求数据
catch：保存错误信息
finally：关闭 loading
```

---

## 4. 今日核心数据流

今天你要建立这个结构：

```txt
HomeView / ProjectsView / GalleryView
        ↓
onMounted 调用 store.loadPortfolioData()
        ↓
usePortfolioStore action
        ↓
portfolioApi.ts
        ↓
模拟 Promise 返回数据
        ↓
store 更新 projects / gallery
        ↓
页面自动更新
```

你必须能用自己的话解释这条链路。

---

## 5. 今日实战步骤

### 第 1 步：创建 api 文件

新建：

```txt
src/api/portfolioApi.ts
```

写入：

```ts
import type { Project } from '../types/project'
import type { GalleryItem } from '../types/gallery'

const delay = (ms: number) =>
  new Promise((resolve) => {
    window.setTimeout(resolve, ms)
  })

const mockProjects: Project[] = [
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

const mockGallery: GalleryItem[] = [
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
]

export const fetchProjects = async (): Promise<Project[]> => {
  await delay(600)
  return mockProjects
}

export const fetchGallery = async (): Promise<GalleryItem[]> => {
  await delay(600)
  return mockGallery
}
```

### 第 2 步：改造 `usePortfolioStore.ts`

重点：不要在 state 里直接写一大坨 projects / gallery 静态数据。

最终结构应该类似：

```ts
import { defineStore } from 'pinia'
import { fetchGallery, fetchProjects } from '../api/portfolioApi'
import type { GalleryItem, GalleryType } from '../types/gallery'
import type { Project } from '../types/project'

export type ProjectFilter = string
export type GalleryFilter = 'all' | GalleryType

export const usePortfolioStore = defineStore('portfolio', {
  state: () => ({
    activeProjectTag: 'All' as ProjectFilter,
    activeGalleryType: 'all' as GalleryFilter,
    projects: [] as Project[],
    gallery: [] as GalleryItem[],
    isLoading: false,
    errorMessage: '',
    hasLoaded: false,
  }),

  getters: {
    projectTags(state): string[] {
      const tags = state.projects.flatMap((project) => project.techStack)
      return ['All', ...new Set(tags)]
    },

    filteredProjects(state): Project[] {
      if (state.activeProjectTag === 'All') {
        return state.projects
      }

      return state.projects.filter((project) =>
        project.techStack.includes(state.activeProjectTag),
      )
    },

    galleryTypes(state): GalleryFilter[] {
      const types = state.gallery.map((item) => item.type)
      return ['all', ...new Set(types)]
    },

    filteredGallery(state): GalleryItem[] {
      if (state.activeGalleryType === 'all') {
        return state.gallery
      }

      return state.gallery.filter((item) => item.type === state.activeGalleryType)
    },

    featuredProjects(state): Project[] {
      return state.projects.slice(0, 2)
    },
  },

  actions: {
    async loadPortfolioData() {
      if (this.hasLoaded) {
        return
      }

      this.isLoading = true
      this.errorMessage = ''

      try {
        const [projects, gallery] = await Promise.all([
          fetchProjects(),
          fetchGallery(),
        ])

        this.projects = projects
        this.gallery = gallery
        this.hasLoaded = true
      } catch (error) {
        this.errorMessage = '数据加载失败，请稍后重试。'
        console.error(error)
      } finally {
        this.isLoading = false
      }
    },

    async retryLoadPortfolioData() {
      this.hasLoaded = false
      await this.loadPortfolioData()
    },

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

### 第 3 步：创建状态展示组件

新建：

```txt
src/components/StatusPanel.vue
```

写入：

```vue
<template>
  <div v-if="isLoading" class="status-card">
    <p>Loading data...</p>
  </div>

  <div v-else-if="errorMessage" class="status-card error">
    <p>{{ errorMessage }}</p>

    <button type="button" @click="$emit('retry')">
      Retry
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  isLoading: boolean
  errorMessage: string
}>()

defineEmits<{
  retry: []
}>()
</script>

<style scoped>
.status-card {
  margin: 24px 0;
  padding: 20px;
  border: 1px solid #e5e7eb;
  border-radius: 16px;
  background: #f9fafb;
}

.error {
  border-color: #fecaca;
  background: #fef2f2;
}

button {
  margin-top: 12px;
  cursor: pointer;
  border: 0;
  border-radius: 999px;
  padding: 8px 14px;
  background: #111827;
  color: #fff;
}
</style>
```

### 第 4 步：Home / Projects / Gallery 接入加载状态

三个页面都需要类似逻辑：

```ts
import { onMounted } from 'vue'
import StatusPanel from '../components/StatusPanel.vue'
import { usePortfolioStore } from '../stores/usePortfolioStore'

const store = usePortfolioStore()

onMounted(() => {
  void store.loadPortfolioData()
})
```

模板中加：

```vue
<StatusPanel
  :is-loading="store.isLoading"
  :error-message="store.errorMessage"
  @retry="store.retryLoadPortfolioData"
/>
```

并且数据区域用：

```vue
<div v-if="!store.isLoading && !store.errorMessage">
  <!-- 正常数据内容 -->
</div>
```

---

## 6. 今日实战任务

### 基础必做

- 创建 `src/api/portfolioApi.ts`
- 创建 `src/components/StatusPanel.vue`
- `usePortfolioStore.ts` 增加 `isLoading`、`errorMessage`、`hasLoaded`
- `usePortfolioStore.ts` 增加 `loadPortfolioData`、`retryLoadPortfolioData`
- `projects` / `gallery` 改成通过 API action 加载
- Home / Projects / Gallery 页面调用 `loadPortfolioData`
- 页面显示 loading 状态
- 页面显示 error 状态
- 页面支持 retry
- 执行 `npm run build`
- Git commit + push

### 进阶加分

- 增加 `src/api/index.ts` 统一导出 API
- 给 `StatusPanel` 增加 empty 状态
- Store 中增加 `isReady` getter
- 页面显示空数据提示
- 故意让 API 抛错一次，验证 error UI 是否出现

### 30K 挑战

在 answer.md 写一段“异步数据流设计说明”：

```txt
本项目把数据请求逻辑封装到 src/api/portfolioApi.ts 中，Pinia store 通过 loadPortfolioData action 调用 API 方法，并维护 isLoading、errorMessage 和 hasLoaded。页面组件只在 onMounted 时触发加载，并根据 store 中的 loading/error/data 状态渲染不同 UI。这样可以让页面保持简单，也方便后续把 mock API 替换成真实后端接口。
```

---

## 7. 今日习题

### A. 理论题

1. 为什么 API 请求不应该直接散落在页面组件里？
2. loading / error 状态分别解决什么用户体验问题？
3. `try / catch / finally` 分别适合做什么？
4. 为什么 `loadPortfolioData` 里要有 `hasLoaded`？
5. 为什么 store action 适合处理异步请求？

### B. 代码理解题

1. `Promise.all([fetchProjects(), fetchGallery()])` 是什么作用？
2. `finally` 为什么适合关闭 loading？
3. `void store.loadPortfolioData()` 中的 `void` 是什么含义？
4. `retryLoadPortfolioData` 为什么要先把 `hasLoaded` 改成 false？
5. `fetchProjects(): Promise<Project[]>` 这句类型表示什么？

### C. 实战题

1. 创建 `portfolioApi.ts` 并返回模拟数据。
2. 改造 store，用 action 加载项目和资源数据。
3. 创建 `StatusPanel.vue`。
4. Home / Projects / Gallery 三个页面都接入 loading/error/retry。
5. answer.md 中画出今日数据流。

---

## 8. 严格验收标准

### 8.1 算通过

- `src/api/portfolioApi.ts` 存在。
- `src/components/StatusPanel.vue` 存在。
- store 中有 `isLoading`、`errorMessage`、`hasLoaded`。
- store 中有异步 action：`loadPortfolioData`。
- store 中有重试 action：`retryLoadPortfolioData`。
- Projects / Gallery / Home 至少三个页面调用 `loadPortfolioData`。
- 页面有 loading UI。
- 页面有 error UI。
- 页面有 retry 操作。
- `npm run build` 通过。
- GitHub 有 commit。
- 你能讲清楚“页面 → store → api → store → 页面”的数据流。

### 8.2 必须返工

- API 请求逻辑直接写在页面组件里。
- 没有 loading。
- 没有 error。
- 没有 retry。
- store action 没有 try/catch/finally。
- `projects` / `gallery` 仍然是一大坨静态数据直接放在 state 初始值里。
- build 没跑。
- answer.md 没有解释异步数据流。
- 你讲不清 `Promise.all`。

---

## 9. 今日面试表达

你今天必须能说出：

```txt
我在项目中把数据请求逻辑封装到了 api 层，例如 portfolioApi.ts 负责提供 fetchProjects 和 fetchGallery。Pinia store 通过 loadPortfolioData action 调用这些 API 方法，并维护 isLoading、errorMessage 和 hasLoaded。页面组件只负责在 onMounted 时触发加载，并根据 loading、error 和正常数据状态渲染不同 UI。这样可以让页面逻辑更清晰，也方便后续把 mock 数据替换成真实后端接口。
```

英文简化版：

```txt
I separate API logic from page components.
The store handles loading, error, and data states.
Pages only trigger actions and render UI based on the store state.
```

---

## 10. 今日技术英语模块

### 今日目标

能用英文解释 API 请求状态。

### 今日词汇

| 单词 | 中文 | 场景 |
|---|---|---|
| request | 请求 | API request |
| response | 响应 | API response |
| loading | 加载中 | loading state |
| error | 错误 | error message |
| retry | 重试 | retry button |
| async | 异步 | async function |
| await | 等待异步结果 | await fetchProjects |
| fallback | 兜底方案 | fallback UI |

### 今日句型

```txt
I separate API logic from page components.
我把 API 逻辑从页面组件中拆出来。
```

```txt
The store handles loading and error states.
store 负责处理 loading 和 error 状态。
```

```txt
The page renders different UI based on the request state.
页面根据请求状态渲染不同 UI。
```

### 今日练习

请翻译：

1. 我把 API 请求逻辑封装到了单独的文件中。
2. store 负责管理 loading、error 和 data。
3. 当请求失败时，用户可以点击 retry 按钮重新加载。

---

## 11. 今日 Git 提交

```bash
git add .
git commit -m "feat: add portfolio api loading states"
git push
```

---

## 12. 完成后发给 ChatGPT

请发：

1. `src/api/portfolioApi.ts`
2. `src/components/StatusPanel.vue`
3. `src/stores/usePortfolioStore.ts`
4. `src/views/HomeView.vue`
5. `src/views/ProjectsView.vue`
6. `src/views/GalleryView.vue`
7. loading 截图
8. 正常数据截图
9. 如果能模拟错误，发 error/retry 截图
10. `docs/answers/week-01/day-05-answer.md`
11. `npm run build` 是否通过
12. Git commit 信息
13. 你最不确定的 1-3 个问题

---

## 13. 给 Codex 的归档指令

```txt
请帮我整理 Day 05 学习记录。

要求：
1. 在 docs/daily/2026-07/week-01/day-05.md 中整理今日学习资料。
2. 在 docs/answers/week-01/day-05-answer.md 中整理我的作业答案。
3. 在 README.md 的学习进度中增加 Day 05：API 请求封装 + loading/error 状态。
4. 不要改业务代码。
5. 保持 Markdown 结构清晰。
6. 如果路径不存在，请创建目录。
7. 最后告诉我新增和修改了哪些文件。
```

---

## 14. 小红书素材笔记，暂不发布

```txt
主题：前端转全栈 Day 5：页面不是直接拿数据，真实项目要处理 loading 和 error

今天学到：
1. API 请求逻辑要封装到单独文件。
2. store 负责维护 loading、error 和 data。
3. 页面只负责触发 action 和渲染状态。

可截图：
1. portfolioApi.ts
2. usePortfolioStore.ts 中的 loadPortfolioData
3. StatusPanel.vue
4. loading UI
5. retry UI
```

---

## 15. 路线调整说明

Day 05 是从“会写页面”到“会做业务前端”的分水岭。

后面你会越来越多遇到：

```txt
接口还没返回，页面显示什么？
接口失败，用户看到什么？
重复请求怎么避免？
请求逻辑写在哪里？
mock 数据怎么替换成真实 API？
```

这些才是工作里真正会被问、会出 bug、会影响项目质量的地方。

今天重点：**不是把数据展示出来，而是把请求状态管理清楚。**
