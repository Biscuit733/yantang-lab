import { defineStore } from 'pinia'
import type { GalleryType, GalleryItem } from '../types/gallery'
import type { Project } from '../types/project'

export type ProjectFilter = 'All' | string
export type GalleryFilter = 'all' | GalleryType

export const usePortfolioStore = defineStore('portfolio', {
    state: () => ({
        activeProjectTag : 'All' as ProjectFilter,
        activeGalleryType : 'all' as GalleryFilter,

        projects: [
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
          ] as Project[],

        gallery: [
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
          ] as GalleryItem[]
    }),

    getters: {
        projectTags(state) {
          const tags = state.projects.flatMap((project) => project.techStack)
          return ['All', ...new Set(tags)]
        },
    
        filteredProjects(state) {
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
    
        filteredGallery(state) {
          if (state.activeGalleryType === 'all') {
            return state.gallery
          }
    
          return state.gallery.filter((item) => item.type === state.activeGalleryType)
        },
    
        featuredProjects(state) {
          return state.projects.slice(0, 2)
        },
    },

    actions: {
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
    }
})
