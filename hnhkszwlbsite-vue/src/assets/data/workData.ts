// src/assets/data/workData.ts
export interface WorkItem {
  title: string
  description: string
  image: string
  icon: string
  features: string[]
}

export const workData: WorkItem[] = [
  {
    title: '小礼堂后台操作',
    description: '使用小礼堂时设备的控制与保障，确保活动顺利进行',
    image: 'assets/images/67061393e3737.jpg',
    icon: 'bi-mic-fill',
    features: ['音响系统调试与控制', '灯光效果设计与执行', '舞台设备技术支持'],
  },
  // ... 其他工作项目
]
