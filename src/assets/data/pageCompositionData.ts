// src/assets/data/pageCompositionData.ts
export interface CompositionItem {
  name: string
  percentage: number
  colorClass: string
}

export const pageCompositionData: CompositionItem[] = [
  {
    name: 'Vue',
    percentage: 35.4,
    colorClass: 'bg-primary',
  },
  {
    name: 'TypeScript',
    percentage: 33.5,
    colorClass: 'bg-success',
  },
  {
    name: 'CSS',
    percentage: 12.7,
    colorClass: 'bg-info',
  },
  {
    name: 'JavaScript',
    percentage: 10.3,
    colorClass: 'bg-warning',
  },
  {
    name: 'HTML',
    percentage: 8.1,
    colorClass: 'bg-danger',
  },
]
