/**
 * 活动实拍模块数据源
 * 统一数据结构：{ title, category, image, description }
 * 图片均使用打包后的静态资源（import 引入，走 Vite 资源管线）
 */

export interface GalleryItem {
  /** 活动标题 */
  title: string
  /** 分类 key，对应 galleryCategories 中的 key */
  category: string
  /** 图片地址（高清原图） */
  image: string
  /** 简短描述 */
  description: string
}

export interface GalleryCategory {
  /** 分类 key；'all' 表示全部 */
  key: string
  /** 展示用中文标签 */
  label: string
}

import imgTeam1 from '@/assets/images/6706146ba031d.jpg'
import imgTeam2 from '@/assets/images/dfc2cb6e-55d2-42ea-803f-27828495ccce.jpg'
import imgEvent1 from '@/assets/images/67061383c525d.jpg'
import imgEvent2 from '@/assets/images/67061396b32d7.jpg'
import imgEvent3 from '@/assets/images/67061c054b3b3.jpg'
import imgOperation1 from '@/assets/images/670613960ec62.jpg'
import imgOperation2 from '@/assets/images/670613950c57a.jpg'
import imgOperation3 from '@/assets/images/67061381b0bc2.jpg'

/** 分类筛选（顺序即按钮展示顺序） */
export const galleryCategories: GalleryCategory[] = [
  { key: 'all', label: '全部' },
  { key: 'event', label: '活动现场' },
  { key: 'operation', label: '设备操作' },
  { key: 'team', label: '团队合照' },
]

/** 根据分类 key 获取中文标签 */
export const getCategoryLabel = (key: string): string =>
  galleryCategories.find((category) => category.key === key)?.label ?? key

/** 活动实拍图片数据 */
export const galleryData: GalleryItem[] = [
  {
    title: '团队合照',
    category: 'team',
    image: imgTeam1,
    description: '24届喊楼时网络部 23、24、25 届的珍贵合照',
  },
  {
    title: '团队合照',
    category: 'team',
    image: imgTeam2,
    description: '24届阳光体育节社团日活动时网络部 26、27、28 届的珍贵合照',
  },
  {
    title: '校庆活动',
    category: 'event',
    image: imgEvent1,
    description: '校庆时的中控台操作现场，保障活动顺利进行',
  },
  {
    title: '接待外来活动',
    category: 'event',
    image: imgEvent2,
    description: '接待外来活动时使用自带设备提供技术支持',
  },
  {
    title: '活动现场',
    category: 'event',
    image: imgEvent3,
    description: '大型活动现场的设备布置与保障工作',
  },
  {
    title: '校园歌手大赛',
    category: 'operation',
    image: imgOperation1,
    description: '活动现场的导播与灯控，共同协作创造完美舞台效果',
  },
  {
    title: '校运会社团日',
    category: 'operation',
    image: imgOperation2,
    description: '校运会社团日的灯控台操作，为活动增添光彩',
  },
  {
    title: '设备操作练习',
    category: 'operation',
    image: imgOperation3,
    description: '使用雾机进行练习时的操作场景，提升团队技能',
  },
]
