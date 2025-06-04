<template>
  <div class="gallery">
    <Header />
    <h1 class="gallery-title">作品展厅</h1>
    <Timeline :events="timelineEvents" />
    <main class="main-content">
      <div class="artwork-grid">
        <ArtworkCard
          v-for="artwork in artworks"
          :key="artwork.id"
          :artwork="artwork"
          @open-modal="openModal"
        />
      </div>
    </main>
    <Footer />
    <ArtworkModal
      v-model="isModalOpen"
      :artwork="selectedArtwork"
      @prev="navigateArtwork(-1)"
      @next="navigateArtwork(1)"
    />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import ArtworkCard from '../components/ArtworkCard.vue';
import ArtworkModal from '../components/ArtworkModal.vue';
import Timeline from '../components/Timeline.vue';
import { artworks } from '../data/artworks';

const isModalOpen = ref(false);
const selectedArtworkIndex = ref(0);

const selectedArtwork = computed(() => artworks[selectedArtworkIndex.value]);

const openModal = (artwork) => {
  selectedArtworkIndex.value = artworks.findIndex(a => a.id === artwork.id);
  isModalOpen.value = true;
};

const navigateArtwork = (direction) => {
  const newIndex = selectedArtworkIndex.value + direction;
  if (newIndex >= 0 && newIndex < artworks.length) {
    selectedArtworkIndex.value = newIndex;
  }
};

const timelineEvents = ref([
  { year: '2023', month: 12, title: '举办"翰墨传承"个展' },
  { year: '2023', month: 9, title: '参与国际书法交流展' },
  { year: '2023', month: 6, title: '完成「山水清音」系列' },
  { year: '2023', month: 3, title: '春季书法作品展' },
  { year: '2022', month: 12, title: '完成重要作品系列「山水之间」' },
  { year: '2022', month: 8, title: '举办书法工作坊' },
  { year: '2022', month: 4, title: '参与全国书法展' },
  { year: '2021', month: 11, title: '获得省级书法大赛金奖' },
  { year: '2021', month: 7, title: '参与全国书法展览' },
  { year: '2021', month: 3, title: '完成「四季风韵」系列' },
  { year: '2020', month: 12, title: '开始创作「兰亭序」临摹系列' },
  { year: '2020', month: 6, title: '举办线上书法讲座' },
  { year: '2019', month: 9, title: '首次个人作品展' }
]);
</script>

<style scoped>
.gallery {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  padding: 20px;
  width: 100%;
}

.artwork-grid {
  column-count: 3;
  column-gap: 20px;
  padding: 20px 0;
}

.gallery-title {
  font-family: 'Noto Serif SC', serif;
  font-size: 2em;
  color: var(--text-dark);
  text-align: center;
  margin: 20px 0;
}

@media (max-width: 1200px) {
  .artwork-grid {
    column-count: 2;
  }
}

@media (max-width: 768px) {
  .artwork-grid {
    column-count: 1;
  }
}
</style>