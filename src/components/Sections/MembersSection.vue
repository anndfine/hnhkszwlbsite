<!-- src/components/Sections/MembersSection.vue -->
<template>
  <section id="members" class="py-5 bg-light">
    <div class="container">
      <div class="row justify-content-center mb-4">
        <div class="col-lg-8 text-center">
          <h2 class="display-5 fw-bold mb-3">骨干成员</h2>
          <p class="lead text-muted">网络部的核心团队</p>
        </div>
      </div>

      <!-- 2027届 -->
      <div class="row mb-4">
        <div class="col-12">
          <h5 class="text-center border-bottom pb-2 mb-4">2027届骨干</h5>
        </div>
        <div
          v-for="member in membersData['2027']"
          :key="member.name"
          class="col-lg-4 col-md-6 mb-3"
        >
          <MemberCard :member="member" />
        </div>
      </div>

      <!-- 2026届 -->
      <div class="row mb-4">
        <div class="col-12">
          <h5 class="text-center border-bottom pb-2 mb-4">2026届骨干</h5>
        </div>
        <div
          v-for="member in membersData['2026']"
          :key="member.name"
          class="col-lg-4 col-md-6 mb-3"
        >
          <MemberCard :member="member" />
        </div>
      </div>

      <!-- 往届 -->
      <div class="row">
        <div class="col-12">
          <h5 class="text-center border-bottom pb-2 mb-4">往届骨干</h5>
        </div>
        <div
          v-for="member in membersData['legacy']"
          :key="member.name"
          class="col-lg-3 col-md-4 col-6 mb-3"
        >
          <div class="text-center">
            <img
              :data-src="member.avatar"
              class="lazyload rounded-circle img-thumbnail border-warning border-2 mb-2"
              width="70"
              height="70"
              :alt="member.name"
            />
            <h6 class="fw-bold mb-1 small">{{ member.name }}</h6>
            <p class="text-muted small mb-0">{{ member.position }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { membersData } from '@/assets/data/membersData'
import MemberCard from '@/components/UI/MemberCard.vue'
</script>
