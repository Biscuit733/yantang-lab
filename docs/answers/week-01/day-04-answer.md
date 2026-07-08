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

- [ ] 安装 `pinia`
- [ ] `main.ts` 注册 `createPinia()`
- [ ] 创建 `src/types/gallery.ts`
- [ ] 创建 `src/stores/usePortfolioStore.ts`
- [ ] store 中有 state
- [ ] store 中有 getters
- [ ] store 中有 actions
- [ ] Projects 页面使用 store 数据
- [ ] Projects 页面支持标签筛选
- [ ] Gallery 页面使用 store 数据
- [ ] Gallery 页面支持类型筛选
- [ ] Home 页面展示 `featuredProjects`
- [ ] 执行 `npm run build`
- [ ] 完成 Git commit
- [ ] 推送到 GitHub
- [ ] 完成英语练习

补充说明：

```txt

```

---

# 3. 今日习题答案

## A. 理论题

### 题目 1：Pinia 解决了什么问题？

我的答案：

```txt

```

---

### 题目 2：state / getters / actions 分别是什么？

我的答案：

```txt

```

---

### 题目 3：为什么项目数据不应该长期写死在页面组件里？

我的答案：

```txt

```

---

### 题目 4：Pinia 和 props 的区别是什么？

我的答案：

```txt

```

---

### 题目 5：什么场景适合用全局状态？

我的答案：

```txt

```

---

## B. 代码理解题

### 题目 1：`filteredProjects` 是怎么工作的？

我的答案：

```txt

```

---

### 题目 2：`projectTags` 为什么要用 `new Set()`？

我的答案：

```txt

```

---

### 题目 3：`activeProjectTag` 改变后，页面为什么会更新？

我的答案：

```txt

```

---

### 题目 4：`resetProjectFilter` 的作用是什么？

我的答案：

```txt

```

---

### 题目 5：HomeView 为什么可以直接读取 `featuredProjects`？

我的答案：

```txt

```

---

# 4. 今日核心代码提交

## 4.1 `src/main.ts`

```ts

```

---

## 4.2 `src/types/gallery.ts`

```ts

```

---

## 4.3 `src/stores/usePortfolioStore.ts`

```ts

```

---

## 4.4 `src/views/ProjectsView.vue`

```vue

```

---

## 4.5 `src/views/GalleryView.vue`

```vue

```

---

## 4.6 `src/views/HomeView.vue`

```vue

```

---

# 5. 今日面试表达

## 题目：我在这个项目里是如何使用 Pinia 管理共享状态的？

我的回答：

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

我的翻译：

```txt

```

---

### 题目 2：filteredProjects 是从 projects 和 activeProjectTag 计算出来的。

我的翻译：

```txt

```

---

### 题目 3：Actions 用来修改全局状态。

我的翻译：

```txt

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

`npm run build` 是否通过：

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

## 9.4 我能不能不用看代码解释 state / getters / actions？

```txt

```

---

## 9.5 明天最需要补什么？

```txt

```

---

# 10. 严格自检

请如实勾选：

- [ ] 我能解释 Pinia 解决了什么问题
- [ ] 我能解释 state
- [ ] 我能解释 getters
- [ ] 我能解释 actions
- [ ] 我能解释 Pinia 和 props 的区别
- [ ] 我完成了 Projects 标签筛选
- [ ] 我完成了 Gallery 类型筛选
- [ ] 我完成了 Home featuredProjects
- [ ] 我执行了 `npm run build`
- [ ] 我完成了 Git commit 和 push
- [ ] 我没有只让 AI 改代码，自己也理解了

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
