<template>
  <div class="artwork-card" @click="$emit('click')">
    <img :src="artwork.image_thumb" :alt="artwork.title" loading="lazy">
    <div class="artwork-info-overlay">
      <h3 class="artwork-title">{{ artwork.title }}</h3>
      <p class="artwork-artist">{{ artwork.artist }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  artwork: {
    type: Object,
    required: true
  }
});

defineEmits(['click']);
</script>

<style scoped>
.artwork-card {
  background-color: #fff;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  border-radius: 5px;
}

.artwork-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.artwork-card img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  background-color: #eee;
}

.artwork-info-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0));
  color: #fff;
  padding: 15px;
  transform: translateY(100%);
  transition: transform 0.3s ease;
  pointer-events: none;
  box-sizing: border-box;
}

.artwork-card:hover .artwork-info-overlay {
  transform: translateY(0);
}

.artwork-title {
  font-size: 1.3em;
  margin-bottom: 5px;
  font-family: 'Noto Serif SC', serif;
}

.artwork-artist {
  font-size: 0.9em;
  opacity: 0.8;
}
</style> 