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

- [ ] 安装 `vue-router@4`
- [ ] 创建 `src/router/index.ts`
- [ ] 在 `main.ts` 中使用 `.use(router)`
- [ ] 创建 `HomeView.vue`
- [ ] 创建 `ArticlesView.vue`
- [ ] 创建 `GalleryView.vue`
- [ ] 创建 `ProjectsView.vue`
- [ ] 创建 `AboutView.vue`
- [ ] 创建 `NotFoundView.vue`
- [ ] 创建 `AppHeader.vue`
- [ ] 创建 `src/data/nav.ts`
- [ ] `App.vue` 使用 `AppHeader` + `RouterView`
- [ ] `/projects` 页面显示项目卡片
- [ ] 不存在路径能显示 404
- [ ] 完成 Git commit
- [ ] 推送到 GitHub
- [ ] 完成英语练习

补充说明：

```txt

```

---

# 3. 今日习题答案

## A. 理论题

### 题目 1：前端路由解决了什么问题？

我的答案：

```txt

```

---

### 题目 2：`RouterLink` 和普通 `<a>` 标签有什么区别？

我的答案：

```txt

```

---

### 题目 3：`RouterView` 的作用是什么？

我的答案：

```txt

```

---

### 题目 4：为什么不建议把所有页面内容都写在 `App.vue`？

我的答案：

```txt

```

---

### 题目 5：为什么需要 404 页面？

我的答案：

```txt

```

---

## B. 基础概念题

### 题目 1：`router/index.ts` 主要负责什么？

我的答案：

```txt

```

---

### 题目 2：`routes` 数组里的 `path`、`name`、`component` 分别是什么意思？

我的答案：

```txt

```

---

### 题目 3：`createWebHistory(import.meta.env.BASE_URL)` 是做什么的？

我的答案：

```txt

```

---

### 题目 4：`App.vue`、`router/index.ts`、`views` 三者是什么关系？

我的答案：

```txt

```

---

### 题目 5：为什么导航数据可以抽到 `src/data/nav.ts`？

我的答案：

```txt

```

---

## C. 代码 / 实战小题

### 题目 1：贴出你的路由配置

```ts
// 粘贴 src/router/index.ts

```

我的理解：

```txt

```

---

### 题目 2：贴出你的 App.vue 布局代码

```vue
<!-- 粘贴 src/App.vue -->

```

我的理解：

```txt

```

---

### 题目 3：贴出你的 AppHeader.vue 代码

```vue
<!-- 粘贴 src/components/AppHeader.vue -->

```

我的理解：

```txt

```

---

### 题目 4：贴出你的 ProjectsView.vue 代码

```vue
<!-- 粘贴 src/views/ProjectsView.vue -->

```

我的理解：

```txt

```

---

# 4. 今日核心代码提交

## 4.1 `src/router/index.ts`

```ts

```

---

## 4.2 `src/main.ts`

```ts

```

---

## 4.3 `src/App.vue`

```vue

```

---

## 4.4 `src/components/AppHeader.vue`

```vue

```

---

## 4.5 `src/views/ProjectsView.vue`

```vue

```

---

# 5. 今日面试表达

## 题目：我在这个项目里是如何使用 Vue Router 管理页面导航的？

我的回答：

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

我的翻译：

```txt

```

---

### 题目 2：每个路由都把一个路径映射到一个页面组件。

我的翻译：

```txt

```

---

### 题目 3：RouterView 用来渲染当前页面。

我的翻译：

```txt

```

---

## 6.2 今日英文项目介绍

请用 2-3 句英文介绍今天做的路由功能：

```txt

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

执行过的命令：

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

```

---

## 9.2 今天只是照着做但还没完全懂的地方？

```txt

```

---

## 9.3 今天最大的错误或卡点是什么？

```txt

```

---

## 9.4 我能不能不用看代码解释 `RouterView`？

```txt

```

---

## 9.5 明天最需要补什么？

```txt

```

---

# 10. 严格自检

请如实勾选：

- [ ] 我能解释前端路由解决了什么问题
- [ ] 我能解释 `RouterLink`
- [ ] 我能解释 `RouterView`
- [ ] 我能解释 `routes`
- [ ] 我知道为什么 App.vue 不应该堆所有页面
- [ ] 我完成了 404 页面
- [ ] 我完成了 Git commit 和 push
- [ ] 我没有只让 AI 改代码，自己也理解了

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
1.
2.
3.
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
