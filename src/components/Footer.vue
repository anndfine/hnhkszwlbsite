<!-- src/components/Footer.vue
     页脚组件：数据驱动（src/assets/data/footer.ts + languages.ts）
     - 桌面多列（简介 / 快速导航 / 联系信息 / 项目语言构成）+ 底部版权栏
     - ≤768px 单列布局，链接增大点击热区
     - 站内路由用 router-link；站外链接用 <a target="_blank" rel="noopener">
     - 语言构成百分比由数据自动计算
     - 版权年份 JS 动态获取 -->
<template>
  <footer id="关于" class="site-footer">
    <div class="site-footer__container">
      <!-- 主内容：简介 / 快速导航 / 联系信息 / 项目语言构成 -->
      <div class="site-footer__grid">
        <!-- 部门简介 -->
        <div class="site-footer__col site-footer__col--about">
          <h3 class="site-footer__title">{{ footerData.brand.title }}</h3>
          <p class="site-footer__subtitle">{{ footerData.brand.subtitle }}</p>
          <p class="site-footer__desc">{{ footerData.brand.description }}</p>
        </div>

        <!-- 快速站内导航 -->
        <nav class="site-footer__col" aria-label="页脚快速导航">
          <h3 class="site-footer__title">{{ footerData.quickLinks.title }}</h3>
          <ul class="site-footer__list">
            <li
              v-for="link in footerData.quickLinks.links"
              :key="link.label"
              class="site-footer__item"
            >
              <router-link v-if="link.to" :to="link.to" class="site-footer__link">
                {{ link.label }}
              </router-link>
              <a v-else-if="link.anchor" :href="`#${link.anchor}`" class="site-footer__link">
                {{ link.label }}
              </a>
              <a
                v-else-if="link.href"
                :href="link.href"
                class="site-footer__link"
                target="_blank"
                rel="noopener"
              >
                {{ link.label }}
              </a>
            </li>
          </ul>
        </nav>

        <!-- 联系信息 -->
        <div class="site-footer__col site-footer__col--contact">
          <h3 class="site-footer__title">{{ footerData.contact.title }}</h3>
          <ul class="site-footer__list">
            <li
              v-for="item in footerData.contact.items"
              :key="item.label"
              class="site-footer__item site-footer__item--contact"
            >
              <i :class="item.icon" class="site-footer__icon" aria-hidden="true"></i>
              <span class="site-footer__contact-label">{{ item.label }}</span>
              <a
                v-if="item.href"
                :href="item.href"
                class="site-footer__link site-footer__link--contact"
                :class="{ 'site-footer__link--underline': item.underline }"
                target="_blank"
                rel="noopener"
              >
                {{ item.text }}
              </a>
              <span v-else class="site-footer__text">{{ item.text }}</span>
            </li>
          </ul>
        </div>

        <!-- 项目语言构成 -->
        <div class="site-footer__col site-footer__col--languages">
          <h3 class="site-footer__title">{{ footerData.languagesTitle }}</h3>
          <ul class="site-footer__lang-list">
            <li v-for="lang in languages" :key="lang.name" class="site-footer__lang-item">
              <span class="site-footer__lang-name">{{ lang.name }}</span>
              <span class="site-footer__lang-percent">{{ lang.percent }}%</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- 柔和分割线 -->
      <div class="site-footer__divider" aria-hidden="true"></div>

      <!-- 版权栏 -->
      <div class="site-footer__bottom">
        <p class="site-footer__copyright">
          © {{ currentYear }} {{ footerData.copyright.owner }} · All Rights Reserved
        </p>
        <p class="site-footer__notice">{{ footerData.copyright.notice }}</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { footerData } from '@/assets/data/footer'
import { languageStats } from '@/assets/data/languages'

// 版权年份动态获取，避免硬编码
const currentYear = new Date().getFullYear()

// 语言构成：由原始数据自动计算百分比，组件不依赖具体数据格式
const languages = computed(() => {
  const total = languageStats.reduce((sum, item) => sum + item.bytes, 0) || 1
  return languageStats.map((item) => ({
    name: item.name,
    percent: Math.round((item.bytes / total) * 100),
  }))
})
</script>

<style lang="scss" scoped>
@use '../styles/common.scss' as *;

/* ========== 页脚容器 ========== */
.site-footer {
  background: $color-bg-dark;
  padding: 3.5rem 0 2rem;
  border-top: 1px solid $color-border-soft;
}

.site-footer__container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* ========== 桌面多列布局 ========== */
.site-footer__grid {
  display: grid;
  grid-template-columns: 1.3fr 1fr 1fr 1.2fr;
  gap: 2.5rem;
  align-items: start;
}

.site-footer__title {
  margin: 0 0 1rem;
  font-size: 1rem;
  font-weight: 600;
  color: $color-white;
  letter-spacing: 0.05em;
}

.site-footer__subtitle {
  margin: 0 0 1rem;
  font-size: 0.75rem;
  letter-spacing: 0.12em;
  color: $color-text-dim;
}

.site-footer__desc {
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.7;
  color: $color-text-muted;
  overflow-wrap: break-word;
}

/* ========== 链接列表 ========== */
.site-footer__list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.site-footer__item {
  margin: 0;
}

.site-footer__link {
  display: inline-block;
  padding: 0.35rem 0.25rem;
  font-size: 0.9rem;
  color: $color-nav-text;
  text-decoration: none;
  border-radius: $radius-sm;
  transition: color $transition-base;

  &:hover {
    color: $color-nav-text-hover;
  }
}

/* ========== 联系信息 ========== */
.site-footer__item--contact {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  min-width: 0;
}

.site-footer__icon {
  flex-shrink: 0;
  font-size: 0.95rem;
  color: $color-text-dim;
}

.site-footer__contact-label {
  flex-shrink: 0;
  font-size: 0.9rem;
  color: $color-text-muted;
}

.site-footer__text {
  min-width: 0;
  font-size: 0.9rem;
  color: $color-nav-text;
  overflow-wrap: break-word;
}

.site-footer__link--contact {
  min-width: 0;
  overflow-wrap: break-word;
}

/* GitHub「编辑此站」等下划线强调链接（类似 <u> 标签） */
.site-footer__link--underline {
  text-decoration: underline;
}

/* ========== 项目语言构成（简洁展示，无复杂图表） ========== */
.site-footer__lang-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.site-footer__lang-item {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;
  font-size: 0.9rem;
  min-width: 0;
}

.site-footer__lang-name {
  color: $color-nav-text;
}

.site-footer__lang-percent {
  flex-shrink: 0;
  color: $color-text-dim;
  font-variant-numeric: tabular-nums;
}

/* ========== 分割线 ========== */
.site-footer__divider {
  height: 1px;
  margin: 2.5rem 0 1.5rem;
  background: $color-border-soft;
}

/* ========== 版权栏（次要文字） ========== */
.site-footer__bottom {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem 2rem;
}

.site-footer__copyright,
.site-footer__notice {
  margin: 0;
  font-size: 0.8125rem;
  color: $color-text-dim;
  overflow-wrap: break-word;
}

.site-footer__notice {
  width: 100%;
  opacity: 0.85;
}

/* ========== 中等屏幕（769–1024px）：两列 ========== */
@media (min-width: 769px) and (max-width: 1024px) {
  .site-footer__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* ========== 移动端（≤768px）：单列 ========== */
@media (max-width: $breakpoint-mobile) {
  .site-footer {
    padding: 2.5rem 0 1.5rem;
  }

  .site-footer__container {
    padding: 0 1rem;
  }

  .site-footer__grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  /* 链接整行展示，增大点击热区 */
  .site-footer__link {
    display: block;
    width: 100%;
    padding: 0.6rem 0.25rem;
    font-size: 0.95rem;
  }

  .site-footer__item--contact {
    flex-wrap: wrap;
    row-gap: 0.25rem;
  }

  .site-footer__bottom {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
}
</style>
