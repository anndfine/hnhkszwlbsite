<!-- src/components/UI/GalleryLightbox.vue
     全屏图片预览（Lightbox）：
     - Teleport 到 body + Transition 柔和过渡
     - 关闭：右上角按钮 / 点击遮罩（图片外的暗区）/ ESC 键盘
     - 切换：左右箭头按钮 / 方向键
     - 不使用 <a> 标签跳转，纯组件状态控制 -->
<template>
  <Teleport to="body">
    <Transition name="lightbox">
      <div
        v-if="modelValue"
        ref="rootEl"
        class="lightbox"
        role="dialog"
        aria-modal="true"
        :aria-label="current ? `图片预览：${current.title}` : '图片预览'"
        tabindex="-1"
        @click.self="close"
      >
        <!-- 关闭按钮 -->
        <button type="button" class="lightbox__close" aria-label="关闭预览" @click="close">
          <i class="bi bi-x-lg"></i>
        </button>

        <!-- 上一张 -->
        <button
          v-if="items.length > 1"
          type="button"
          class="lightbox__nav lightbox__nav--prev"
          aria-label="上一张"
          @click="prev"
        >
          <i class="bi bi-chevron-left"></i>
        </button>

        <!-- 图片舞台：点击空白暗区（遮罩）关闭，点击图片本身不关闭 -->
        <div class="lightbox__stage" @click.self="close">
          <div v-if="loading" class="lightbox__loader" aria-hidden="true">
            <span class="lightbox__spinner"></span>
          </div>
          <img
            v-if="current"
            :src="current.image"
            :alt="current.title"
            class="lightbox__img"
            :class="{ 'is-ready': !loading }"
            @load="loading = false"
            @error="loading = false"
          />
        </div>

        <!-- 下一张 -->
        <button
          v-if="items.length > 1"
          type="button"
          class="lightbox__nav lightbox__nav--next"
          aria-label="下一张"
          @click="next"
        >
          <i class="bi bi-chevron-right"></i>
        </button>

        <!-- 图片信息 -->
        <div v-if="current" class="lightbox__meta">
          <h3 class="lightbox__title">{{ current.title }}</h3>
          <p class="lightbox__desc">{{ current.description }}</p>
          <span class="lightbox__count">{{ index + 1 }} / {{ items.length }}</span>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { computed, onUnmounted, ref, watch } from 'vue'
import type { GalleryItem } from '@/data/gallery'

interface Props {
  /** 是否打开（v-model） */
  modelValue: boolean
  /** 当前筛选后的图片列表 */
  items: GalleryItem[]
  /** 当前展示项的索引（v-model:index） */
  index?: number
}

const props = withDefaults(defineProps<Props>(), { index: 0 })

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
  'update:index': [value: number]
}>()

const current = computed(() => props.items[props.index] ?? null)

const close = () => emit('update:modelValue', false)

const prev = () => {
  if (props.items.length < 2) return
  emit('update:index', (props.index - 1 + props.items.length) % props.items.length)
}

const next = () => {
  if (props.items.length < 2) return
  emit('update:index', (props.index + 1) % props.items.length)
}

// 切换图片时重置加载状态
const loading = ref(true)
watch(
  () => props.index,
  () => {
    loading.value = true
  },
)

// 键盘控制（ESC 关闭 / 方向键切换）
const onKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') close()
  else if (event.key === 'ArrowLeft') prev()
  else if (event.key === 'ArrowRight') next()
}

// 打开时锁定 body 滚动，关闭时恢复
let previousOverflow = ''
watch(
  () => props.modelValue,
  (open) => {
    if (open) {
      previousOverflow = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', onKeydown)
    } else {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeydown)
    }
  },
)

onUnmounted(() => {
  document.body.style.overflow = previousOverflow
  window.removeEventListener('keydown', onKeydown)
})
</script>

<style scoped>
.lightbox {
  position: fixed;
  inset: 0;
  z-index: 1050;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  background: rgba(0, 0, 0, 0.92);
}

.lightbox__close {
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.75rem;
  height: 2.75rem;
  font-size: 1.25rem;
  color: #fff;
  background: rgba(255, 255, 255, 0.12);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.25s ease;
}

.lightbox__close:hover {
  background: rgba(255, 255, 255, 0.25);
}

.lightbox__stage {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.lightbox__img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.lightbox__img.is-ready {
  opacity: 1;
}

.lightbox__loader {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lightbox__spinner {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: 3px solid rgba(255, 255, 255, 0.2);
  border-top-color: #fff;
  animation: lightbox-spin 0.8s linear infinite;
}

@keyframes lightbox-spin {
  to {
    transform: rotate(360deg);
  }
}

.lightbox__nav {
  position: absolute;
  top: 50%;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  font-size: 1.5rem;
  color: #fff;
  background: rgba(255, 255, 255, 0.12);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transform: translateY(-50%);
  transition: background-color 0.25s ease;
}

.lightbox__nav:hover {
  background: rgba(255, 255, 255, 0.25);
}

.lightbox__nav--prev {
  left: 1.25rem;
}

.lightbox__nav--next {
  right: 1.25rem;
}

.lightbox__meta {
  position: absolute;
  left: 50%;
  bottom: 1.5rem;
  z-index: 2;
  max-width: min(720px, 90%);
  padding: 0.9rem 1.5rem;
  text-align: center;
  color: #fff;
  background: rgba(0, 0, 0, 0.55);
  border-radius: 12px;
  backdrop-filter: blur(4px);
  transform: translateX(-50%);
}

.lightbox__title {
  margin: 0 0 0.25rem;
  font-size: 1.1rem;
  font-weight: 600;
}

.lightbox__desc {
  margin: 0 0 0.35rem;
  font-size: 0.875rem;
  opacity: 0.8;
}

.lightbox__count {
  font-size: 0.75rem;
  letter-spacing: 0.05em;
  opacity: 0.6;
}

/* 打开 / 关闭柔和过渡 */
.lightbox-enter-active,
.lightbox-leave-active {
  transition: opacity 0.3s ease;
}

.lightbox-enter-from,
.lightbox-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {
  .lightbox {
    padding: 0.75rem;
  }

  .lightbox__close {
    top: 0.75rem;
    right: 0.75rem;
    width: 2.5rem;
    height: 2.5rem;
  }

  .lightbox__nav {
    width: 2.5rem;
    height: 2.5rem;
    font-size: 1.25rem;
  }

  .lightbox__nav--prev {
    left: 0.6rem;
  }

  .lightbox__nav--next {
    right: 0.6rem;
  }

  .lightbox__meta {
    bottom: 0.75rem;
  }
}
</style>
