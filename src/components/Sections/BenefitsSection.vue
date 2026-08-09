<!-- src/components/Sections/BenefitsSection.vue -->
<template>
  <section id="benefits" class="benefits-section">
    <div class="benefits-container">
      <div class="benefits-header">
        <h2 class="benefits-title">部门成员福利</h2>
        <p class="benefits-subtitle">BENEFITS</p>
      </div>

      <div class="benefits-layout">
        <div class="benefits-image-col">
          <div class="benefits-image-wrap" ref="imageRef">
            <img
              :src="benefitImage"
              class="benefits-image"
              alt="网络部成员活动照片"
            />
          </div>
        </div>

        <div class="benefits-content-col">
          <p class="benefits-intro">
            加入网络部，你将获得以下成长机会和团队体验：
          </p>

          <div class="benefits-grid" ref="gridRef">
            <div
              v-for="(benefit, index) in benefitsData"
              :key="index"
              class="benefit-card"
            >
              <div class="benefit-icon-wrap">
                <i :class="benefit.icon" class="benefit-icon"></i>
              </div>
              <div class="benefit-info">
                <h3 class="benefit-title">{{ benefit.title }}</h3>
                <p class="benefit-desc">{{ benefit.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { benefitsData } from '@/assets/data/benefitsData'
import benefitImage from '@/assets/images/67061382aff2c.jpg'

const imageRef = ref<HTMLElement>()
const gridRef = ref<HTMLElement>()
let observer: IntersectionObserver | null = null

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    },
    { threshold: 0.2 }
  )

  if (imageRef.value) observer.observe(imageRef.value)
  if (gridRef.value) {
    const cards = gridRef.value.querySelectorAll('.benefit-card')
    cards.forEach((card, index) => {
      (card as HTMLElement).style.transitionDelay = `${index * 0.1}s`
      observer?.observe(card)
    })
  }
})

onUnmounted(() => {
  observer?.disconnect()
})
</script>

<style scoped>
.benefits-section {
  background: #1a1a1a;
  padding: 5rem 0;
  min-height: 1vh;
}

.benefits-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.benefits-header {
  margin-bottom: 3rem;
}

.benefits-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #fff;
  margin: 0 0 0.5rem 0;
}

.benefits-subtitle {
  font-size: 1rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.5);
  margin: 0;
  letter-spacing: 0.2em;
}

.benefits-layout {
  display: flex;
  gap: 4rem;
  align-items: flex-start;
}

.benefits-image-col {
  flex: 0 0 480px;
}

.benefits-image-wrap {
  border-radius: 12px;
  overflow: hidden;
  opacity: 0;
  transform: translateX(-30px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.benefits-image-wrap.visible {
  opacity: 1;
  transform: translateX(0);
}

.benefits-image {
  width: 100%;
  height: 400px;
  object-fit: cover;
  display: block;
}

.benefits-content-col {
  flex: 1;
}

.benefits-intro {
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.7;
  margin: 0 0 2rem 0;
}

.benefits-grid {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.benefit-card {
  display: flex;
  gap: 1.25rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  opacity: 0;
  transform: translateX(30px);
  transition: opacity 0.5s ease, transform 0.5s ease, background 0.3s ease, border-color 0.3s ease;
}

.benefit-card.visible {
  opacity: 1;
  transform: translateX(0);
}

.benefit-card:hover {
  background: rgba(255, 255, 255, 0.06);
  border-color: rgba(255, 255, 255, 0.15);
}

.benefit-icon-wrap {
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 123, 255, 0.1);
  border-radius: 10px;
}

.benefit-icon {
  font-size: 1.25rem;
  color: #007bff;
}

.benefit-info {
  flex: 1;
  min-width: 0;
}

.benefit-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: #fff;
  margin: 0 0 0.5rem 0;
}

.benefit-desc {
  font-size: 0.9375rem;
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.6;
  margin: 0;
}

@media (max-width: 992px) {
  .benefits-layout {
    flex-direction: column;
    gap: 2rem;
  }

  .benefits-image-col {
    flex: none;
    width: 100%;
  }

  .benefits-image {
    height: 280px;
  }
}

@media (max-width: 768px) {
  .benefits-section {
    padding: 3rem 0;
  }

  .benefits-container {
    padding: 0 1.25rem;
  }

  .benefits-title {
    font-size: 1.75rem;
  }

  .benefits-intro {
    font-size: 1rem;
  }

  .benefit-card {
    padding: 1.25rem;
    gap: 1rem;
  }

  .benefit-icon-wrap {
    width: 40px;
    height: 40px;
  }

  .benefit-icon {
    font-size: 1.125rem;
  }

  .benefit-title {
    font-size: 1rem;
  }

  .benefit-desc {
    font-size: 0.875rem;
  }
}
</style>