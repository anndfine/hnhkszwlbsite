// src/assets/data/pageCompositionData.ts
export interface CompositionItem {
  name: string
  percentage: number
  colorClass: string
}

export const pageCompositionData: CompositionItem[] = [
  {
    name: 'Vue',
    percentage: 44.3,
    colorClass: 'bg-success',
  },
  {
    name: 'TypeScript',
    percentage: 43.9,
    colorClass: 'bg-primary',
  },
  {
    name: 'CSS',
    percentage: 1.4,
    colorClass: 'bg-info',
  },
  {
    name: 'JavaScript',
    percentage: 0,
    colorClass: 'bg-warning',
  },
  {
    name: 'HTML',
    percentage: 10.4,
    colorClass: 'bg-danger',
  },
]
