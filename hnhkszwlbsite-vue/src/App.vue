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
</script>

<style>
@import '@/styles/globals.css';
</style>