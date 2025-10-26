// src/assets/data/heroData.ts
export interface Slide {
  image: string
  alt: string
  active?: boolean
}

export const heroSlides: Slide[] = [
  {
    image: "assets/images/slide/670613988744c.jpg",
    alt: "网络部活动照片",
    active: false
  },
  {
    image: "assets/images/slide/670613968e908.jpg", 
    alt: "网络部工作场景",
    active: true
  },
  {
    image: "assets/images/slide/670613950c57a.jpg",
    alt: "网络部设备操作",
    active: false
  }
]
