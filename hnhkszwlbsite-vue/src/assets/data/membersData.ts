// src/assets/data/membersData.ts
export interface Member {
  avatar: string
  name: string
  position: string
  year: string
}
import avatar1 from '@/assets/images/avatar/023a9060-48ba-41cd-a317-764abfb322e7.jpg'
import avatar2 from '@/assets/images/avatar/54b2931c-0550-45f6-bd87-5f6809c385cc.jpg'
import avatar3 from '@/assets/images/avatar/b64998f0-2f1e-4fd8-a084-bac821c6f403.jpg'
import avatar4 from '@/assets/images/avatar/67061aeceaf63.jpg'
import avatar5 from '@/assets/images/avatar/67061aec52429.jpg'
import avatar6 from '@/assets/images/avatar/67061aec39e4d.jpg'
import avatar7 from '@/assets/images/avatar/07785846-7733-4b5c-9657-6d29f530784f.jpg'
import avatar8 from '@/assets/images/avatar/6708b83fdd463.jpg'
import avatar9 from '@/assets/images/avatar/6708b83f38d0c.jpg'

export const membersData: Record<string, Member[]> = {
  '2027': [
    {
      avatar: avatar1,
      name: 'Ann.Dfine',
      position: '部长',
      year: '2027',
    },
    {
      avatar: avatar2,
      name: 'Hanlei',
      position: '副部长',
      year: '2027',
    },
    {
      avatar: avatar3,
      name: 'xyz',
      position: '副部长',
      year: '2027',
    },
  ],
  '2026': [
    {
      avatar: avatar4,
      name: '乌鸦W5Ya',
      position: '部长',
      year: '2026',
    },
    {
      avatar: avatar5,
      name: 'GlomWY',
      position: '副部长',
      year: '2026',
    },
    {
      avatar: avatar6,
      name: '林鱿鱼',
      position: '副部长',
      year: '2026',
    },
  ],
  legacy: [
    {
      avatar: avatar7,
      name: 'The_Mercury〔水星〕',
      position: '2025届 部长',
      year: '2025',
    },
    {
      avatar: avatar8,
      name: '冯天亮',
      position: '往届部长',
      year: 'legacy',
    },
    {
      avatar: avatar9,
      name: '林义杰',
      position: '往届部长',
      year: 'legacy',
    },
  ],
}
