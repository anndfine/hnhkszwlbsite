<!-- src/components/UI/PositionCard.vue -->
<template>
  <div class="job-card card">
    <div class="card-header bg-transparent">
      <div class="d-flex justify-content-between align-items-center">
        <div>
          <h3 class="job-title mb-1">{{ position.title }}</h3>
          <p class="text-muted mb-0">{{ position.subtitle }}</p>
        </div>
        <i :class="position.icon" class="job-icon"></i>
      </div>
    </div>

    <div class="card-body">
      <p class="card-text lead">{{ position.description }}</p>

      <div class="d-flex align-items-center mt-4 mb-3">
        <span class="badge bg-primary rounded-pill me-2">核心要求</span>
        <h4 class="mb-0">你需要具备：</h4>
      </div>

      <div class="mb-4">
        <div
          v-for="(requirement, index) in position.requirements"
          :key="index"
          class="requirement-item d-flex align-items-start"
        >
          <i class="bi bi-check2-circle"></i>
          <div>
            <span class="fw-medium">{{ requirement }}</span>
          </div>
        </div>
      </div>

      <div class="d-flex flex-wrap gap-2 mb-4">
        <span v-for="(skill, index) in position.skills" :key="index" class="badge skill-badge">
          {{ skill }}
        </span>
      </div>

      <div class="d-flex justify-content-end gap-2 mt-4">
        <button class="btn btn-outline-primary">
          <i class="bi bi-info-circle me-2"></i> 了解更多
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Position } from '@/assets/data/positionsData'

interface Props {
  position: Position
}

defineProps<Props>()
</script>

<style scoped>
.job-card {
  border: none;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  transition: box-shadow 0.15s ease-in-out;
}

.job-card:hover {
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
}

.job-title {
  color: #2c3e50;
  font-size: 1.5rem;
}

.job-icon {
  font-size: 2rem;
  color: #6c757d;
}

.requirement-item {
  margin-bottom: 1rem;
}

.requirement-item i {
  color: #28a745;
  margin-right: 0.75rem;
  margin-top: 0.25rem;
  flex-shrink: 0;
}

.skill-badge {
  background-color: #e9ecef;
  color: #495057;
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
}
</style>
