// src/assets/data/workData.ts
export interface WorkItem {
  title: string
  description: string
  image: string
  icon: string
  features: string[]
  alt: string
}

// 导入图片资源
import workImage1 from '@/assets/images/67061393e3737.jpg'
import workImage2 from '@/assets/images/67061c054b3b3.jpg'
import workImage3 from '@/assets/images/670613827a79b.jpg'
import workImage4 from '@/assets/images/67061383c525d.jpg'

export const workData: WorkItem[] = [
  {
    title: '小礼堂后台操作',
    description: '使用小礼堂时设备的控制与保障，确保活动顺利进行',
    image: workImage1,
    icon: 'bi-mic-fill',
    alt: '小礼堂后台操作',
    features: ['音响系统调试与控制', '灯光效果设计与执行', '舞台设备技术支持'],
  },
  {
    title: '一楼会议室设备操作',
    description: '学生会使用一楼会议室时在操作位进行控制与保障',
    image: workImage2,
    icon: 'bi-projector-fill',
    alt: '一楼会议室设备操作',
    features: ['会议设备技术支持', '显示系统管理'],
  },
  {
    title: '校运会社团日',
    description: '在校运会社团日时，协调并辅助租借的设备',
    image: workImage3,
    icon: 'bi-trophy-fill',
    alt: '校运会社团日',
    features: ['活动舞台技术辅助', '紧急设备故障处理'],
  },
  {
    title: '更多未知的活动',
    description: '有更多的随机活动与事件等你发现',
    image: workImage4,
    icon: 'bi-stars',
    alt: '更多未知的活动',
    features: ['校园文化活动支持', '学术讲座技术保障', '创新活动技术探索'],
  },
]
