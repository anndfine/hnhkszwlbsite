<!-- src/components/UI/Card.vue -->
<template>
  <div class="card border-0 shadow-sm h-100" :class="customClass">
    <div v-if="image" class="card-img-top">
      <img 
        :src="image" 
        :alt="title" 
        class="img-fluid"
        :class="imageClass"
      >
    </div>
    <div class="card-body" :class="bodyClass">
      <slot name="header">
        <div v-if="icon" class="d-flex align-items-center mb-3">
          <i :class="icon" class="fs-4 text-primary me-3"></i>
          <h5 class="card-title mb-0 fw-bold" v-if="title">{{ title }}</h5>
        </div>
        <h5 v-else-if="title" class="card-title fw-bold">{{ title }}</h5>
      </slot>
      
      <p v-if="description" class="card-text text-muted">{{ description }}</p>
      
      <slot></slot>
      
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title?: string
  description?: string
  image?: string
  icon?: string
  customClass?: string
  bodyClass?: string
  imageClass?: string
}

defineProps<Props>()
</script>
