<template>
  <div class="artwork-card" @click="openModal">
    <div class="image-container">
      <img 
        :src="artwork.image_full" 
        :alt="artwork.title" 
        loading="lazy"
        @load="onImageLoad"
        ref="imageRef"
      >
    </div>
    <div class="artwork-info" :style="infoStyle">
      <h3>{{ artwork.title }}</h3>
      <p>艺术家: {{ artwork.artist }}</p>
      <p>创作年份: {{ artwork.creation_year }}</p>
      <p>尺寸: {{ artwork.dimensions }}</p>
      <p>材质: {{ artwork.material }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    artwork: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      imageHeight: 0,
      imageWidth: 0
    }
  },
  computed: {
    infoStyle() {
      return {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        background: 'rgba(255, 255, 255, 0.9)',
        transform: 'translateY(100%)',
        transition: 'transform 0.3s ease'
      }
    }
  },
  methods: {
    openModal() {
      this.$emit('open-modal', this.artwork);
    },
    onImageLoad(event) {
      const img = event.target;
      this.imageHeight = img.naturalHeight;
      this.imageWidth = img.naturalWidth;
      
      // 设置图片容器的宽高比
      const container = this.$refs.imageRef.parentElement;
      container.style.aspectRatio = `${this.imageWidth} / ${this.imageHeight}`;
    }
  }
};
</script>

<style scoped>
.artwork-card {
  position: relative;
  background-color: #fff;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  break-inside: avoid;
  margin-bottom: 20px;
}

.artwork-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.artwork-card:hover .artwork-info {
  transform: translateY(0);
}

.image-container {
  width: 100%;
  position: relative;
  overflow: hidden;
}

.image-container img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: contain;
}

.artwork-info {
  padding: 15px;
}

.artwork-info h3 {
  margin: 0 0 10px 0;
  font-size: 1.2em;
  color: #333;
}

.artwork-info p {
  margin: 5px 0;
  font-size: 0.9em;
  color: #666;
}
</style> 