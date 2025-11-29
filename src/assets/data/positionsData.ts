// src/assets/data/positionsData.ts
export interface Position {
  id: string
  title: string
  subtitle: string
  description: string
  icon: string
  requirements: string[]
  skills: string[]
}

export const positionsData: Position[] = [
  {
    id: 'director',
    title: '主控',
    subtitle: '一场活动的顶梁柱',
    description:
      '主控要协调整场活动的进程与各个岗位间的行动，可能面对各类突发事件，需要由主控妥善处置，避免失控的出现。',
    icon: 'bi-cpu',
    requirements: [
      '沉着冷静，有耐心做完全部流程',
      '良好的逻辑思维能力，能够快速判断出问题所在',
      '良好的组织能力，能够合理安排各岗位的工作流程',
      '良好的应变能力，能够快速调整工作流程，适应各种突发事件',
      '良好的团队合作能力，能够与其他部门的成员合作，共同完成任务',
    ],
    skills: ['领导能力', '决策能力', '沟通技巧', '时间管理', '压力管理'],
  },
  {
    id: 'audio',
    title: '音控',
    subtitle: '观众听觉的主宰者',
    description: '音控负责着整个观众区的听觉效果，每一次推子的推动都将改变台下人对演出的整体感受。',
    icon: 'bi-music-note-beamed',
    requirements: [
      '具有较好的听觉，能够听出声音的效果是否合适',
      '灵活的反应能力，在出现啸叫、无声等特情时能够快速反应与处置',
      '良好的团队配合能力',
    ],
    skills: ['听觉敏感', '快速反应', '设备操作', '团队协作'],
  },
  {
    id: 'lighting',
    title: '灯控',
    subtitle: '绚丽的舞台效果的制造者',
    description:
      '灯控掌握着舞台的整体视觉效果，你的一切操作都直接关系到观众的视觉效果镜头拍摄效果，现场没有特效做，全靠灯光两只手。',
    icon: 'bi-lightbulb',
    requirements: [
      '具有良好的沟通与理解能力，与演出者协商出理想的灯光效果',
      '具有相当的思维创意，在临场发挥时展现出独特的风采',
      '较强的抗干扰能力，需要集中精力于舞台状况',
      '良好的团队配合能力',
    ],
    skills: ['视觉设计', '创意表达', '专注力', '设备操作'],
  },
  {
    id: 'coordinator',
    title: '机动协调',
    subtitle: '后台与前台的连线者',
    description:
      '机动协调负责外场的特情处置，临时需求的第一线，在后台需要帮助时提供第一时间的援助，功不可没。',
    icon: 'bi-people',
    requirements: ['良好的特情处置能力', '良好的团队配合能力', '良好的沟通能力'],
    skills: ['问题解决', '团队协作', '沟通能力', '快速响应'],
  },
]
