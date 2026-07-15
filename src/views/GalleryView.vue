<template>
  <section class="page">
    <h1>Gallery</h1>
    <p>这里后续会放小红书图片资源、可下载素材和视觉作品。</p>

    <div class="filter-list">
      <button
        v-for="type in store.galleryTypes"
        :key="type"
        type="button"
        :class="{ active: store.activeGalleryType === type }"
        @click="store.setActiveGalleryType(type)"
      >
        {{ type }}
      </button>
    </div>

    <p>当前筛选结果：{{ store.filteredGallery.length }} 个资源</p>

    <div class="gallery-list">
      <article
        v-for="item in store.filteredGallery"
        :key="item.id"
        class="gallery-card"
      >
        <p class="type">{{ item.type }}</p>
        <h2>{{ item.title }}</h2>
        <p>{{ item.description }}</p>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import { usePortfolioStore } from '../stores/usePortfolioStore'

const store = usePortfolioStore()
</script>

<style scoped>
.page button.active {
  background-color: #f0f0f0;
}
</style>
