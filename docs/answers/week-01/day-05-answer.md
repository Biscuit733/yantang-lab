# Day 05 作业答案｜API 请求封装 + loading / error 状态

> 保存路径建议：`docs/answers/week-01/day-05-answer.md`

---

## 1. 基本信息

- 日期：
- 周次：Week 01
- Day：Day 05
- 今日主题：API 请求封装 + loading / error 状态
- 当前状态：未完成 / 部分完成 / 已完成

---

## 2. 今日完成内容

请勾选：

- [ ] 创建 `src/api/portfolioApi.ts`
- [ ] 创建 `src/components/StatusPanel.vue`
- [ ] store 中增加 `isLoading`
- [ ] store 中增加 `errorMessage`
- [ ] store 中增加 `hasLoaded`
- [ ] store 中增加 `loadPortfolioData`
- [ ] store 中增加 `retryLoadPortfolioData`
- [ ] Home 页面调用 `loadPortfolioData`
- [ ] Projects 页面调用 `loadPortfolioData`
- [ ] Gallery 页面调用 `loadPortfolioData`
- [ ] 页面显示 loading 状态
- [ ] 页面显示 error 状态
- [ ] 页面支持 retry
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

### 题目 1：为什么 API 请求不应该直接散落在页面组件里？

我的答案：

```txt

```

---

### 题目 2：loading / error 状态分别解决什么用户体验问题？

我的答案：

```txt

```

---

### 题目 3：`try / catch / finally` 分别适合做什么？

我的答案：

```txt

```

---

### 题目 4：为什么 `loadPortfolioData` 里要有 `hasLoaded`？

我的答案：

```txt

```

---

### 题目 5：为什么 store action 适合处理异步请求？

我的答案：

```txt

```

---

## B. 代码理解题

### 题目 1：`Promise.all([fetchProjects(), fetchGallery()])` 是什么作用？

我的答案：

```txt

```

---

### 题目 2：`finally` 为什么适合关闭 loading？

我的答案：

```txt

```

---

### 题目 3：`void store.loadPortfolioData()` 中的 `void` 是什么含义？

我的答案：

```txt

```

---

### 题目 4：`retryLoadPortfolioData` 为什么要先把 `hasLoaded` 改成 false？

我的答案：

```txt

```

---

### 题目 5：`fetchProjects(): Promise<Project[]>` 这句类型表示什么？

我的答案：

```txt

```

---

# 4. 今日核心代码提交

## 4.1 `src/api/portfolioApi.ts`

```ts

```

我的理解：

```txt

```

---

## 4.2 `src/components/StatusPanel.vue`

```vue

```

我的理解：

```txt

```

---

## 4.3 `src/stores/usePortfolioStore.ts`

```ts

```

我的理解：

```txt

```

---

## 4.4 `src/views/HomeView.vue`

```vue

```

我的理解：

```txt

```

---

## 4.5 `src/views/ProjectsView.vue`

```vue

```

我的理解：

```txt

```

---

## 4.6 `src/views/GalleryView.vue`

```vue

```

我的理解：

```txt

```

---

# 5. 今日数据流说明

请画出或写出今天的数据流：

```txt
页面
↓
store action
↓
api 方法
↓
Promise 返回数据
↓
store 更新 state
↓
页面重新渲染
```

我的说明：

```txt

```

---

# 6. 今日面试表达

## 题目：我在这个项目里是如何封装 API 请求和处理 loading/error 的？

我的回答：

```txt

```

要求：

- 必须提到 `src/api/portfolioApi.ts`
- 必须提到 `fetchProjects`
- 必须提到 `fetchGallery`
- 必须提到 `loadPortfolioData`
- 必须提到 `isLoading`
- 必须提到 `errorMessage`
- 必须提到 `hasLoaded`
- 必须提到 `try/catch/finally`
- 必须提到页面只负责触发 action 和渲染状态

---

# 7. 今日英语练习

## 7.1 翻译题

### 题目 1：我把 API 请求逻辑封装到了单独的文件中。

我的翻译：

```txt

```

---

### 题目 2：store 负责管理 loading、error 和 data。

我的翻译：

```txt

```

---

### 题目 3：当请求失败时，用户可以点击 retry 按钮重新加载。

我的翻译：

```txt

```

---

## 7.2 今日英文项目介绍

请用 2-3 句英文介绍今天做的 API 请求状态管理：

```txt

```

可参考：

```txt
I separate API logic from page components.
The store handles loading, error, and data states.
Pages trigger actions and render UI based on the store state.
```

---

# 8. 今日遇到的问题

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

# 9. 今日 Git 记录

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

# 10. 今日复盘

## 10.1 今天真正学会了什么？

```txt

```

---

## 10.2 今天只是照着做但还没完全懂的地方？

```txt

```

---

## 10.3 今天最大的错误或卡点是什么？

```txt

```

---

## 10.4 我能不能不用看代码解释 `try/catch/finally`？

```txt

```

---

## 10.5 我能不能讲清楚“页面 → store → api → 页面”的数据流？

```txt

```

---

## 10.6 明天最需要补什么？

```txt

```

---

# 11. 严格自检

请如实勾选：

- [ ] 我能解释为什么 API 请求不应该散落在页面组件里
- [ ] 我能解释 loading 状态
- [ ] 我能解释 error 状态
- [ ] 我能解释 retry 的作用
- [ ] 我能解释 Promise.all
- [ ] 我能解释 try / catch / finally
- [ ] 我完成了 API 层封装
- [ ] 我完成了 StatusPanel
- [ ] 我完成了 Home / Projects / Gallery 三个页面接入
- [ ] 我执行了 `npm run build`
- [ ] 我完成了 Git commit 和 push
- [ ] 我没有只让 AI 改代码，自己也理解了

如果有没勾选的，请写原因：

```txt

```

---

# 12. 小红书素材笔记，暂不发布

## 今日可分享主题

```txt
前端转全栈 Day 5：页面不是直接拿数据，真实项目要处理 loading 和 error
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
1. portfolioApi.ts
2. usePortfolioStore.ts 中的 loadPortfolioData
3. StatusPanel.vue
4. loading UI
5. retry UI
```

---

# 13. 等待 ChatGPT 批改

完成后，请把以下内容发给 ChatGPT：

- `src/api/portfolioApi.ts`
- `src/components/StatusPanel.vue`
- `src/stores/usePortfolioStore.ts`
- `src/views/HomeView.vue`
- `src/views/ProjectsView.vue`
- `src/views/GalleryView.vue`
- loading 截图
- 正常数据截图
- error/retry 截图，如果能模拟
- 本文件内容
- `npm run build` 是否通过
- Git commit 信息
- 你最不确定的 1-3 个问题
