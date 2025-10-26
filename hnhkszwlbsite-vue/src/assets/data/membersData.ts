// src/assets/data/membersData.ts
export interface Member {
  avatar: string
  name: string
  position: string
  year: string
}

export const membersData: Record<string, Member[]> = {
  '2027': [
    {
      avatar: 'assets/avatar/023a9060-48ba-41cd-a317-764abfb322e7.jpg',
      name: 'Ann.Dfine',
      position: '部长',
      year: '2027',
    },
    {
      avatar: 'assets/avatar/54b2931c-0550-45f6-bd87-5f6809c385cc.jpg',
      name: 'Hanlei',
      position: '副部长',
      year: '2027',
    },
    {
      avatar: 'assets/avatar/b64998f0-2f1e-4fd8-a084-bac821c6f403.jpg',
      name: 'xyz',
      position: '副部长',
      year: '2027',
    },
  ],
  '2026': [
    {
      avatar: 'assets/avatar/67061aeceaf63.jpg',
      name: '乌鸦W5Ya',
      position: '部长',
      year: '2026',
    },
    {
      avatar: 'assets/avatar/67061aec52429.jpg',
      name: 'GlomWY',
      position: '副部长',
      year: '2026',
    },
    {
      avatar: 'assets/avatar/67061aec39e4d.jpg',
      name: '林鱿鱼',
      position: '副部长',
      year: '2026',
    },
  ],
  legacy: [
    {
      avatar: 'assets/avatar/07785846-7733-4b5c-9657-6d29f530784f.jpg',
      name: 'The_Mercury〔水星〕',
      position: '2025届 部长',
      year: '2025',
    },
    {
      avatar: 'assets/avatar/6708b83fdd463.jpg',
      name: '冯天亮',
      position: '往届部长',
      year: 'legacy',
    },
    {
      avatar: 'assets/avatar/6708b83f38d0c.jpg',
      name: '林义杰',
      position: '往届部长',
      year: 'legacy',
    },
  ],
}
