<!-- src/components/UI/MemberCard.vue -->
<template>
  <Card 
    :custom-class="'text-center'"
    :body-class="'p-3'"
  >
    <template #header>
      <img 
        :data-src="member.avatar" 
        class="lazyload rounded-circle img-thumbnail border-warning border-3 mb-2" 
        width="80" 
        height="80" 
        :alt="member.name"
      >
      <h6 class="fw-bold mb-1">{{ member.name }}</h6>
      <p class="text-muted small mb-1">{{ member.position }}</p>
    </template>
  </Card>
</template>

<script setup lang="ts">
import Card from './Card.vue'
import type { Member } from '@/assets/data/membersData'

interface Props {
  member: Member
}

defineProps<Props>()
</script>
