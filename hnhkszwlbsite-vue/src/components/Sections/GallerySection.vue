<!-- src/components/Sections/GallerySection.vue -->
<template>
  <section class="gallery-section" id="活动实拍">
    <div class="container">
      <div class="section-header">
        <h2>活动实拍</h2>
        <p>来自一些奇妙的拍摄者，记录我们工作的精彩瞬间</p>
      </div>

      <!-- 筛选按钮 -->
      <div class="gallery-filter">
        <button 
          class="filter-btn" 
          :class="{ active: activeFilter === 'all' }"
          @click="activeFilter = 'all'"
        >
          全部活动
        </button>
        <button 
          class="filter-btn" 
          :class="{ active: activeFilter === 'event' }"
          @click="activeFilter = 'event'"
        >
          活动现场
        </button>
        <button 
          class="filter-btn" 
          :class="{ active: activeFilter === 'operation' }"
          @click="activeFilter = 'operation'"
        >
          设备操作
        </button>
        <button 
          class="filter-btn" 
          :class="{ active: activeFilter === 'team' }"
          @click="activeFilter = 'team'"
        >
          团队合照
        </button>
      </div>

      <!-- 瀑布流布局 -->
      <div class="waterfall-grid">
        <div 
          v-for="item in filteredGallery" 
          :key="item.id"
          class="waterfall-item"
        >
          <GalleryCard :item="item" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { galleryData } from '@/assets/data/galleryData'
import GalleryCard from '@/components/UI/GalleryCard.vue'

const activeFilter = ref('all')

const filteredGallery = computed(() => {
  if (activeFilter.value === 'all') {
    return galleryData
  }
  return galleryData.filter(item => item.category === activeFilter.value)
})
</script>

<style scoped>
.gallery-section {
  padding: 5rem 0;
  background: white;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-header h2 {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.section-header p {
  color: #6c757d;
  font-size: 1.1rem;
}

.gallery-filter {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 3rem;
}

.filter-btn {
  background: transparent;
  border: 2px solid #dee2e6;
  color: #6c757d;
  padding: 0.75rem 1.5rem;
  border-radius: 2rem;
  cursor: pointer;
  transition: all 0.3s;
}

.filter-btn:hover {
  border-color: #007bff;
  color: #007bff;
}

.filter-btn.active {
  background: #007bff;
  border-color: #007bff;
  color: white;
}

.waterfall-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}

@media (max-width: 768px) {
  .waterfall-grid {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1rem;
  }
  
  .gallery-filter {
    gap: 0.5rem;
  }
  
  .filter-btn {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }
}
</style>
