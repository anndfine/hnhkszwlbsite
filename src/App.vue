<!-- src/App.vue -->
<template>
  <div id="app">
    <Navbar />
    <main class="mutedtext">
      <HeroSection />
      <WorkSection />
      <ServiceSection />
      <BenefitsSection />
      <PositionsSection />
      <GallerySection />
      <MembersSection />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Navbar from '@/components/Layout/Navbar.vue'
import Footer from '@/components/Layout/Footer.vue'
import HeroSection from '@/components/Sections/HeroSection.vue'
import WorkSection from '@/components/Sections/WorkSection.vue'
import ServiceSection from '@/components/Sections/ServiceSection.vue'
import BenefitsSection from '@/components/Sections/BenefitsSection.vue'
import PositionsSection from '@/components/Sections/PositionsSection.vue'
import GallerySection from '@/components/Sections/GallerySection.vue'
import MembersSection from '@/components/Sections/MembersSection.vue'

import { onMounted } from 'vue'
import { initImageLoader, initStarRating } from '@/utils/imageLoader'
import { initGallery } from '@/utils/gallery'

onMounted(() => {
  console.log('初始化...')
  // 页面加载完成后初始化各种功能
  initImageLoader()
  initStarRating()
  initGallery()

  // 如果有名人堂JS，可以在这里调用
  // if (typeof (window as any).hall_of_fame_app !== 'undefined') {
  //   (window as any).hall_of_fame_app.test()
  //   (window as any).hall_of_fame_app.main()
  // }
})
</script>

<style>
@import '@/styles/globals.css';
</style>
