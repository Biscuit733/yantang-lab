# yantang-lab

yantang-lab 是一个“个人学习型技术站 + 全栈 AI 工程师训练仓库”。

这个仓库一边保留 Vue 3 + TypeScript + Vite 的个人技术站代码，一边记录全栈开发、AI 工程化、项目实战和复盘材料。它不是只放最终作品的仓库，也会保留每天的学习痕迹、作业答案、错题、周测和阶段复盘。

## 仓库定位

- 个人技术站：`src/` 中保留并持续迭代个人站前端项目。
- 每日学习笔记：记录每天学了什么、写了什么、卡在哪里。
- 作业答案：保存每日训练题、代码理解和概念解释。
- 错题本：沉淀反复出错的问题、根因和正确写法。
- 周测记录：用周测检查阶段掌握程度。
- 项目作品集：把训练过程中的项目逐步整理成可展示作品。
- 全栈 + AI 工程师成长路线：从前端基础、后端接口、数据库、部署，到 AI API、RAG、Agent 和工程化项目。

## 目录结构

```txt
docs/
  daily/
    2026-07/
      week-01/
        day-01.md
  answers/
    week-01/
      day-01-answer.md
  weekly-tests/
  mistakes/
    mistake-book.md
  reviews/
  notes/
templates/
  daily-template.md
  answer-template.md
  review-template.md
src/
  Vue 3 + TypeScript 个人站源码
```

## 推荐记录方式

- 每日学习文件：`docs/daily/2026-07/week-01/day-XX.md`
- 每日答案文件：`docs/answers/week-01/day-XX-answer.md`
- 错题沉淀文件：`docs/mistakes/mistake-book.md`
- 周测记录目录：`docs/weekly-tests/`
- 阶段复盘目录：`docs/reviews/`
- 零散笔记目录：`docs/notes/`

新的一天可以从 `templates/daily-template.md` 和 `templates/answer-template.md` 复制一份，再按日期和周次保存。

## 全栈 + AI 训练路线

1. 前端基础：Vue 3、TypeScript、组件拆分、路由、状态管理。
2. 后端基础：Node.js、接口设计、鉴权、文件上传、错误处理。
3. 数据库与服务：数据建模、CRUD、缓存、部署和日志。
4. 全栈项目：把个人站扩展成作品集、学习系统和内容管理工具。
5. AI 工程：OpenAI API、Prompt、结构化输出、RAG、Agent、AI 工具链。
6. 工程化能力：测试、Git 工作流、CI/CD、文档、复盘和项目展示。

## 前端项目

当前前端项目基于 Vue 3 + TypeScript + Vite。

常用命令：

```bash
npm install
npm run dev
npm run build
npm run preview
```

`src/` 下的 Vue 项目代码会作为个人技术站继续保留和迭代。

## 当前阶段

当前处于 Week 01：Vue3 + TypeScript + 个人站基础阶段。

本阶段目标：

- 跑通 Vue3 + TypeScript 项目
- 理解组件、props、类型定义和列表渲染
- 完成个人站首页和项目卡片
- 建立每日学习笔记、答案、错题和复盘归档习惯

## 路由说明

本项目使用 Vue Router 管理页面导航。App.vue 作为全局布局入口，只负责渲染 Header 和 RouterView。具体页面内容拆分到 views 目录中，router/index.ts 负责维护 URL 和页面组件的映射关系。这样项目结构更清晰，也方便后续扩展文章页、图片页、作品集页和详情页。
