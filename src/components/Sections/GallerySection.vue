<!-- src/components/Sections/GallerySection.vue
     活动实拍模块：
     - 数据驱动渲染 + 分类筛选（全部 / 活动现场 / 设备操作 / 团队合照）
     - 桌面 4 列网格，移动端自动 1/2 列
     - reveal 视口入场动画 + 组件化全屏 Lightbox 预览 -->
<template>
  <section ref="sectionEl" class="gallery-section" id="活动实拍">
    <div class="gallery-container">
      <!-- 标题 -->
      <div ref="headerEl" class="gallery-header">
        <h2 class="gallery-title">活动实拍</h2>
        <p class="gallery-subtitle">GALLERY</p>
      </div>

      <!-- 分类筛选（数据驱动） -->
      <div class="gallery-filter">
        <button
          v-for="category in galleryCategories"
          :key="category.key"
          type="button"
          class="gallery-filter__btn"
          :class="{ 'is-active': activeFilter === category.key }"
          @click="activeFilter = category.key"
        >
          {{ category.label }}
        </button>
      </div>

      <!-- 图片网格 -->
      <div class="gallery-grid">
        <div
          v-for="(item, index) in filteredItems"
          :key="item.image"
          class="gallery-grid__item"
          :style="{ transitionDelay: `${Math.min(index, 7) * 50}ms` }"
        >
          <GalleryCard
            :item="item"
            :active="lightboxOpen && lightboxIndex === index"
            @open="openLightbox(index)"
          />
        </div>
      </div>
    </div>

    <!-- 全屏图片预览 -->
    <GalleryLightbox v-model="lightboxOpen" v-model:index="lightboxIndex" :items="filteredItems" />
  </section>
</template>

<script setup lang="ts">
import { computed, nextTick, onMounted, onUnmounted, ref, watch } from 'vue'
import { galleryCategories, galleryData } from '@/data/gallery'
import GalleryCard from '@/components/UI/GalleryCard.vue'
import GalleryLightbox from '@/components/UI/GalleryLightbox.vue'

/* ---------- 分类筛选 ---------- */
const activeFilter = ref('all')

const filteredItems = computed(() => {
  if (activeFilter.value === 'all') return galleryData
  return galleryData.filter((item) => item.category === activeFilter.value)
})

/* ---------- 图片预览 Lightbox ---------- */
const lightboxOpen = ref(false)
const lightboxIndex = ref(0)

const openLightbox = (index: number) => {
  lightboxIndex.value = index
  lightboxOpen.value = true
}

// 筛选变化后确保索引不越界
watch(filteredItems, () => {
  if (lightboxIndex.value >= filteredItems.value.length) {
    lightboxIndex.value = 0
  }
})

/* ---------- 入场 reveal 动画 ---------- */
// 与其他板块（核心成员/部门内岗位等）保持一致：进入视口加 .is-visible 触发动画，
// 离开视口移除，每次进出 viewport 都会重新触发。
// 注意：reveal 类加在外层 .gallery-grid__item 包裹 div（静态 class，无动态 class 绑定，
// Vue 不会覆写其 class），避免加到 GalleryCard 根元素上被其 active 类绑定补丁抹掉。
const sectionEl = ref<HTMLElement | null>(null)
const headerEl = ref<HTMLElement | null>(null)
let observer: IntersectionObserver | null = null

const observeReveal = () => {
  observer?.disconnect()
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
        } else {
          entry.target.classList.remove('is-visible')
        }
      })
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
  )

  // 卡片是组件，ref 拿不到 DOM 元素，改为在 section 内查询
  const nodes: HTMLElement[] = []
  if (headerEl.value) nodes.push(headerEl.value)
  const cards = sectionEl.value?.querySelectorAll<HTMLElement>('.gallery-grid__item') ?? []
  cards.forEach((card) => nodes.push(card))
  nodes.forEach((node) => observer?.observe(node))
}

onMounted(() => {
  observeReveal()
})

onUnmounted(() => {
  observer?.disconnect()
})

// 切换分类后，对重新渲染的卡片重新触发 reveal
watch(activeFilter, async () => {
  await nextTick()
  observeReveal()
})
</script>

<style scoped>
.gallery-section {
  background: #1a1a1a;
  padding: 5rem 0;
}

.gallery-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* 标题（与核心成员/部门内岗位板块风格一致） */
.gallery-header {
  text-align: center;
  margin-bottom: 3rem;
  opacity: 0;
  transform: translateY(24px);
  transition:
    opacity 0.6s ease,
    transform 0.6s ease;
}

.gallery-header.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.gallery-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #fff;
  margin: 0;
}

.gallery-subtitle {
  font-size: 1rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.5);
  margin: 0.75rem 0 0 0;
  letter-spacing: 0.2em;
  text-transform: uppercase;
}

/* 筛选按钮（深色主题） */
.gallery-filter {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 2.5rem;
}

.gallery-filter__btn {
  appearance: none;
  padding: 0.6rem 1.5rem;
  font: inherit;
  font-size: 0.9375rem;
  color: rgba(255, 255, 255, 0.6);
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 999px;
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    color 0.3s ease,
    border-color 0.3s ease;
}

.gallery-filter__btn:hover {
  color: rgba(255, 255, 255, 0.85);
  border-color: rgba(255, 255, 255, 0.35);
}

.gallery-filter__btn.is-active {
  background: #007bff;
  border-color: #007bff;
  color: #fff;
}

/* 图片网格：桌面 4 列 */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
}

/* 卡片入场动画（延迟由内联 transitionDelay 控制） */
.gallery-grid__item {
  opacity: 0;
  transform: translateY(24px);
  transition:
    opacity 0.6s ease,
    transform 0.6s ease;
}

.gallery-grid__item.is-visible {
  opacity: 1;
  transform: translateY(0);
}

@media (max-width: 1024px) {
  .gallery-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .gallery-section {
    padding: 3rem 0;
  }

  .gallery-container {
    padding: 0 1rem;
  }

  .gallery-title {
    font-size: 1.75rem;
  }

  .gallery-subtitle {
    font-size: 0.875rem;
  }

  .gallery-filter {
    gap: 0.5rem;
  }

  .gallery-filter__btn {
    padding: 0.5rem 1.1rem;
    font-size: 0.875rem;
  }

  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
}

@media (max-width: 480px) {
  .gallery-grid {
    grid-template-columns: 1fr;
  }
}
</style>
