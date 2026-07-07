export type ProjectStatus = 'planning' | 'building' | 'done'

export type Project = {
  id: number
  title: string
  description: string
  techStack: string[]
  link?: string
  status: ProjectStatus
}
