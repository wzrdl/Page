<template>
  <div class="gallery">
    <Header />
    <main class="main-content">
      <div class="artwork-grid">
        <ArtworkCard
          v-for="artwork in artworks"
          :key="artwork.id"
          :artwork="artwork"
          @click="openModal(artwork)"
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
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

.artwork-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  padding: 20px 0;
}

@media (max-width: 768px) {
  .artwork-grid {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
  }
}
</style> 