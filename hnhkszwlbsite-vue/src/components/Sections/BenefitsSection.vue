<!-- src/components/Sections/BenefitsSection.vue -->
<template>
  <section id="benefits" class="py-5 bg-light">
    <div class="container">
      <div class="row align-items-center g-4">
        <!-- 福利图片 -->
        <div class="col-lg-6">
          <div class="rounded-4 overflow-hidden shadow-sm">
            <img 
              data-src="assets/images/67061382aff2c.jpg" 
              class="lazyload img-fluid w-100 h-auto object-fit-cover"
              alt="网络部成员活动照片" 
            >
          </div>
        </div>

        <!-- 福利内容 -->
        <div class="col-lg-5">
          <div class="ps-lg-4">
            <h2 class="fw-bold mb-3">部门成员福利</h2>
            <p class="lead text-muted mb-4">网络部成员专属的福利与支持</p>

            <div class="benefits-list">
              <div 
                v-for="(benefit, index) in benefitsData" 
                :key="index"
                class="benefit-item mb-4 p-4 bg-white rounded-4 shadow-sm"
              >
                <div class="d-flex align-items-start">
                  <i :class="benefit.icon" class="fs-4 text-primary mt-1 me-3"></i>
                  <div>
                    <h4 class="h5 fw-bold mb-2">{{ benefit.title }}</h4>
                    <p class="mb-0 text-muted">{{ benefit.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { benefitsData } from '@/assets/data/benefitsData'
</script>
