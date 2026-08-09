<!-- src/components/UI/GalleryCard.vue -->
<template>
  <article
    class="gallery-card"
    :class="{ 'gallery-card--active': active }"
    role="button"
    tabindex="0"
    :aria-label="`查看大图：${item.title}`"
    @click="emit('open')"
    @keydown.enter="emit('open')"
    @keydown.space.prevent="emit('open')"
  >
    <div class="gallery-card__media">
      <img :src="item.image" :alt="item.title" class="gallery-card__img" loading="lazy" />
      <span class="gallery-card__badge">{{ getCategoryLabel(item.category) }}</span>
      <div class="gallery-card__zoom" aria-hidden="true">
        <i class="bi bi-zoom-in"></i>
      </div>
    </div>

    <div class="gallery-card__body">
      <h3 class="gallery-card__title">{{ item.title }}</h3>
      <p class="gallery-card__desc">{{ item.description }}</p>
    </div>
  </article>
</template>

<script setup lang="ts">
import { getCategoryLabel } from '@/data/gallery'
import type { GalleryItem } from '@/data/gallery'

interface Props {
  item: GalleryItem
  /** 是否处于预览打开状态（用于高亮当前卡片） */
  active?: boolean
}

defineProps<Props>()

const emit = defineEmits<{ open: [] }>()
</script>

<style scoped>
.gallery-card {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
}

.gallery-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
}

.gallery-card:focus-visible,
.gallery-card--active {
  outline: 2px solid #007bff;
  outline-offset: 2px;
}

.gallery-card__media {
  position: relative;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.05);
}

.gallery-card__img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.gallery-card:hover .gallery-card__img,
.gallery-card:focus-visible .gallery-card__img {
  transform: scale(1.05);
}

.gallery-card__badge {
  position: absolute;
  top: 0.75rem;
  left: 0.75rem;
  z-index: 1;
  padding: 0.3rem 0.7rem;
  font-size: 0.75rem;
  line-height: 1;
  color: #fff;
  background: rgba(0, 0, 0, 0.65);
  border-radius: 999px;
  backdrop-filter: blur(2px);
}

.gallery-card__zoom {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1.75rem;
  background: rgba(0, 0, 0, 0.35);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.gallery-card:hover .gallery-card__zoom,
.gallery-card:focus-visible .gallery-card__zoom {
  opacity: 1;
}

.gallery-card__body {
  padding: 1rem 1.1rem 1.15rem;
}

.gallery-card__title {
  margin: 0 0 0.35rem;
  font-size: 1.05rem;
  font-weight: 600;
  color: #fff;
}

.gallery-card__desc {
  margin: 0;
  font-size: 0.875rem;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.5);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
