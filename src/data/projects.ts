import type { Project } from '../types/project'

export const projects: Project[] = [
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