# Week 01 基础补强测评卷｜Day 01-Day 04 + JS/CSS

建议用时：90-120 分钟
当前进度：Day 05 暂停，先做基础补强测评
提交路径：docs/exams/week-01-foundation-exam-answer.md

## 一、JavaScript 基础｜20 分

1. map 和 filter 有什么区别？分别返回什么？是否改变原数组？
2. includes 是做什么的？在项目筛选里怎么用？
3. new Set() 是什么？它返回的是数组吗？
4. flatMap 和 map().flat() 有什么关系？
5. 什么是响应式数据变化后页面自动更新？

给定：

```ts
const projects = [
  { id: 1, title: 'Personal Site', techStack: ['Vue 3', 'TypeScript', 'Vite'] },
  { id: 2, title: 'AI Content Hub', techStack: ['AI', 'Node.js', 'API'] },
  { id: 3, title: 'MES Lite', techStack: ['Vue 3', 'NestJS', 'Database'] },
]
```

代码题：

1. 用 map 得到所有 title。
2. 用 filter 筛选 techStack 包含 Vue 3 的项目。
3. 用 flatMap 获取所有 techStack。
4. 用 new Set 对技术栈去重。
5. 写函数 getProjectsByTech(tech: string)。

## 二、CSS 基础｜20 分

解释题：

1. CSS 盒模型包括哪几部分？
2. display: flex 解决什么布局问题？
3. justify-content 和 align-items 分别控制什么？
4. position: sticky 和 fixed 有什么区别？
5. 响应式布局为什么常用 flex-wrap、grid-template-columns、max-width？

代码题：

1. 写 .page-shell：max-width 1080px，水平居中，左右 padding 24px。
2. 写 .nav-list：横向排列，gap 16px，允许换行。
3. 写 .project-list：grid 布局，gap 16px。
4. 写 .card：圆角、边框、padding、hover 上移 4px。
5. 写媒体查询：小于 640px 时 h1 字号 36px。

## 三、TypeScript 基础｜15 分

解释题：

1. 为什么要定义 Project 类型？
2. link?: string 中的 ? 表示什么？
3. 联合类型 'planning' | 'building' | 'done' 有什么好处？
4. 为什么 type ProjectFilter = 'All' | string 实际约束不强？

代码题：

1. 写 ProjectStatus 和 Project 类型，status 限制为 planning/building/done，techStack 是 string[]，link 可选。
2. 写 GalleryType 和 GalleryItem 类型，type 限制为 xiaohongshu/poster/download。

## 四、Vue3 基础｜15 分

解释题：

1. template、script setup、style scoped 分别负责什么？
2. props 是什么？ProjectCard 为什么需要 props？
3. v-for 为什么需要 :key？
4. ProjectsView 和 ProjectCard 的数据流是什么？
5. 为什么不建议把所有页面都写在 App.vue？

代码题：

1. 写 ProjectCard.vue 中 defineProps 接收 project。
2. 写父组件中用 v-for 渲染 ProjectCard。

## 五、Vue Router｜10 分

解释题：

1. Vue Router 解决了什么问题？
2. RouterLink 和普通 a 标签有什么区别？
3. RouterView 的作用是什么？
4. 404 路由为什么要放最后？

代码题：

写最小路由配置：/、/projects、404。

## 六、Pinia｜15 分

解释题：

1. Pinia 解决了什么问题？
2. state / getters / actions 分别是什么？
3. Pinia 和 props 的区别是什么？
4. 什么数据适合放 Pinia？什么不适合？
5. featuredProjects 为什么是 getter，不应该是 state？

代码题：

写一个最小 Pinia store，包含 activeProjectTag、projects、filteredProjects、setActiveProjectTag。

## 七、Git / Markdown / 工程规范｜10 分

1. git status 是做什么的？
2. git add . 是做什么的？
3. git commit -m 是做什么的？
4. git push 是做什么的？
5. 为什么不能提交 .env、公司资料、密钥？
6. TypeScript 代码块用什么标记？
7. Vue 代码块用什么标记？
8. 为什么 answer.md 里贴 Vue 代码不能只写普通文本？
9. GitHub Markdown Alert 里的 [!WARNING] 适合写什么？
10. 每天 answer.md 为什么必须写复盘？

## 八、技术英语｜10 分

翻译：

1. 我使用 Vue Router 管理页面导航。
2. 我使用 Pinia 管理共享状态。
3. Getters 用来从 state 中派生数据。

英文项目介绍：

用 3 句英文介绍前 4 天做的个人站训练项目。必须包含 Vue 3、TypeScript、Vue Router、Pinia。

## 九、实战任务｜30 分

目标：给 Projects 页面新增“状态筛选”，支持 all / planning / building / done。

要求：

1. 在 usePortfolioStore.ts 中增加：
   - activeProjectStatus
   - ProjectStatusFilter = 'all' | 'planning' | 'building' | 'done'
2. 升级 filteredProjects，让它同时支持：
   - 技术栈筛选
   - 状态筛选
3. 增加 actions：
   - setActiveProjectStatus(status)
   - resetProjectStatus()
4. ProjectsView 增加状态筛选按钮。
5. 页面显示当前筛选结果数量。
6. 原有技术栈筛选不能坏。
7. npm run build 必须通过。

评分：
- store 类型定义清晰：5 分
- getter 逻辑正确：8 分
- actions 正确：5 分
- ProjectsView 交互完整：6 分
- 结果数量显示：2 分
- 原有功能不破坏：4 分

## 十、提交要求

保存到：

docs/exams/week-01-foundation-exam-answer.md

提交：

```bash
git add .
git commit -m "exam: complete week 01 foundation test"
git push
```

发给 ChatGPT：

1. docs/exams/week-01-foundation-exam-answer.md
2. src/stores/usePortfolioStore.ts
3. src/views/ProjectsView.vue
4. 实战功能截图
5. npm run build 是否通过
6. Git commit 信息
7. 最不确定的 3 个问题

## 十一、评分标准

总分 145 分：

- JavaScript：20
- CSS：20
- TypeScript：15
- Vue3：15
- Vue Router：10
- Pinia：15
- Git / Markdown：10
- 技术英语：10
- 实战任务：30

130-145：优秀，可以继续 Day 05
110-129：通过，但要补薄弱点
90-109：条件通过，必须返工
90 以下：暂停推进，先补基础
