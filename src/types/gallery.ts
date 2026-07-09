export type GalleryType = 'xiaohongshu' | 'poster' | 'download'

export type GalleryItem = {
  id: number
  title: string
  type: GalleryType
  description: string
}