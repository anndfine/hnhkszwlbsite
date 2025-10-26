// src/assets/data/galleryData.ts
export interface GalleryItem {
  id: string
  title: string
  description: string
  preview: string
  full: string
  category: string
  alt: string
}

export const galleryData: GalleryItem[] = [
  {
    id: "1",
    title: "团队合照",
    description: "24届喊楼时网络部23，24，25届的珍贵合照",
    preview: "assets/images/preview_6706146ba031d.jpg",
    full: "assets/images/6706146ba031d.jpg",
    category: "team",
    alt: "网络部合照"
  },
  {
    id: "2",
    title: "校庆活动",
    description: "校庆时的中控台操作现场，保障活动顺利进行",
    preview: "assets/images/preview_67061383c525d.jpg",
    full: "assets/images/67061383c525d.jpg",
    category: "event",
    alt: "校庆中控台"
  },
  {
    id: "3",
    title: "校园十大歌手",
    description: "活动现场的导播与灯控协作，创造完美舞台效果",
    preview: "assets/images/preview_670613960ec62.jpg",
    full: "assets/images/670613960ec62.jpg",
    category: "operation",
    alt: "导播与灯控"
  },
  {
    id: "4",
    title: "校运会社团日",
    description: "校运会社团日的灯控台操作，为活动增添光彩",
    preview: "assets/images/preview_670613950c57a.jpg",
    full: "assets/images/670613950c57a.jpg",
    category: "operation",
    alt: "灯控台"
  },
  {
    id: "5",
    title: "接待外来活动",
    description: "接待外来活动时使用自带设备提供技术支持",
    preview: "assets/images/preview_67061396b32d7.jpg",
    full: "assets/images/67061396b32d7.jpg",
    category: "event",
    alt: "自带设备"
  },
  {
    id: "6",
    title: "设备操作练习",
    description: "使用雾机进行练习时的操作场景，提升团队技能",
    preview: "assets/images/preview_67061381b0bc2.jpg",
    full: "assets/images/67061381b0bc2.jpg",
    category: "operation",
    alt: "雾机操作"
  }
]
