<template>
  <div class="modal" :class="{ show: modelValue }" @click="handleBackdropClick">
    <div class="modal-content" @click.stop>
      <span class="close-button" @click="$emit('update:modelValue', false)">&times;</span>
      <div class="modal-body">
        <div class="image-wrapper" 
          @wheel.prevent="handleWheel"
          @mousedown="startPan"
          @mousemove="pan"
          @mouseup="stopPan"
          @mouseleave="stopPan"
        >
          <img 
            :src="artwork.image_full" 
            :alt="artwork.title" 
            class="modal-image"
            :style="{
            transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
            cursor: isPanning ? 'grabbing' : 'grab'
            }"
          >

        </div>
        <div class="modal-details">
          <h2 class="modal-title">{{ artwork.title }}</h2>
          <p class="modal-artist">{{ artwork.artist }}</p>
          <p class="modal-meta">{{ artwork.creation_year }} | {{ artwork.dimensions }} | {{ artwork.material }}</p>
          <div class="modal-description" v-if="artwork.description">
            <p>{{ artwork.description }}</p>
          </div>
          <div class="modal-interpretation" v-if="artwork.interpretation">
            <h3>释文</h3>
            <p>{{ artwork.interpretation }}</p>
          </div>
        </div>
      </div>
      <div class="modal-navigation">
        <button class="nav-button prev-button" @click="$emit('prev')">&larr;</button>
        <button class="nav-button next-button" @click="$emit('next')">&rarr;</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true
  },
  artwork: {
    type: Object,
    required: true
  }
});

const emit = defineEmits(['update:modelValue', 'prev', 'next']); // Make sure emit is defined

const scale = ref(1)
const position = ref({ x: 0, y: 0 })
const isPanning = ref(false)
const startPoint = ref({ x: 0, y: 0 })
const startTransform = ref({ x: 0, y: 0 })

/** 滚轮缩放：以鼠标点为中心 */
const handleWheel = (e) => {
  const delta = e.deltaY
  const image = e.currentTarget.querySelector('img')
  const rect = image.getBoundingClientRect()

  // 当前鼠标在图片中的像素（未缩放坐标）
  const mouseX = e.clientX - rect.left
  const mouseY = e.clientY - rect.top
  const originalX = mouseX / scale.value
  const originalY = mouseY / scale.value

  // 新缩放
  const newScale = Math.min(Math.max(scale.value - delta * 0.002, 1), 6)

  // 调整平移量，让鼠标点保持不动
  position.value.x = mouseX - originalX * newScale
  position.value.y = mouseY - originalY * newScale
  scale.value = newScale
};

/** 鼠标按下：记录初始状态 */
const startPan = (e) => {
  if (scale.value <= 1) return
  isPanning.value = true
  startPoint.value = { x: e.clientX, y: e.clientY }
  startTransform.value = { ...position.value }
}

const pan = (e) => {
  if (!isPanning.value) return
  
  // 计算鼠标移动的距离
  const dx = e.clientX - startPoint.value.x
  const dy = e.clientY - startPoint.value.y
  
  // 更新图片位置（相对于开始拖动时的位置）
  position.value = {
    x: startTransform.value.x + dx,
    y: startTransform.value.y + dy
  }
};

/** 鼠标抬起/离开窗口 */
const stopPan = () => {
  isPanning.value = false
}

// 重置位置和缩放
const resetView = () => {
  scale.value = 1
  position.value = { x: 0, y: 0 }
}

// 监听模态框打开，重置视图
watch(() => props.modelValue, (newVal) => {
  if (newVal) resetView()
})

const handleBackdropClick = (event) => {
  if (event.target.classList.contains('modal')) {
    emit('update:modelValue', false);
  }
};
</script>

<style scoped>
.modal {
  display: none;
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  animation: fadeIn 0.3s ease-out forwards;
}

.modal.show {
  display: block;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.modal-content {
  position: relative;
  background-color: var(--primary-bg);
  margin: 5% auto;
  padding: 40px;
  border-radius: 8px;
  width: 90%;
  max-width: 1200px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  max-height: 90vh;
  overflow-y: auto;
}

.close-button {
  color: var(--text-dark);
  font-size: 3em;
  font-weight: bold;
  position: absolute;
  top: 15px;
  right: 30px;
  cursor: pointer;
  transition: color 0.3s ease;
  line-height: 1;
  z-index: 2;
}

.close-button:hover {
  color: var(--accent-color);
}

.modal-body {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
}

.image-wrapper {
  position: relative;
  width: 100%;
  max-height: 70vh;
  overflow: hidden;
  border-radius: 8px;
  background-color: #eee;
  border: 1px solid rgba(0,0,0,0.05);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: grab;
}

.modal-image {
  max-width: 100%;
  max-height: 70vh;
  width: auto;
  height: auto;
  display: block;
  object-fit: contain;
  user-select: none;
  -webkit-user-drag: none;
  transition: transform 0.1s ease-out;
  transform-origin: center center;
}

.modal-details {
  width: 100%;
  max-width: 600px;
  text-align: left;
  padding-bottom: 20px;
}

.modal-title {
  font-family: 'Noto Serif SC', serif;
  font-size: 2.2em;
  margin-bottom: 10px;
  color: var(--text-dark);
}

.modal-artist, .modal-meta {
  font-size: 1em;
  color: var(--text-dark);
  opacity: 0.9;
  margin-bottom: 5px;
}

.modal-description, .modal-interpretation {
  font-size: 1.05em;
  margin-top: 20px;
  color: var(--text-dark);
  opacity: 0.9;
}

.modal-interpretation h3 {
  font-family: 'Noto Serif SC', serif;
  font-size: 1.4em;
  margin-top: 25px;
  margin-bottom: 10px;
  color: var(--text-dark);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding-bottom: 5px;
  display: inline-block;
}

.modal-navigation {
  display: flex;
  justify-content: space-between;
  width: calc(100% - 80px);
  max-width: 1200px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
}

.nav-button {
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 15px 20px;
  font-size: 2em;
  cursor: pointer;
  border-radius: 50%;
  line-height: 1;
  transition: background-color 0.3s ease, transform 0.3s ease;
  pointer-events: all;
}

.nav-button:hover {
  background-color: rgba(0, 0, 0, 0.7);
  transform: scale(1.1);
}

@media (max-width: 992px) {
  .modal-content {
    width: 95%;
    padding: 30px;
    margin: 2% auto;
  }
  .close-button {
    font-size: 2.5em;
    top: 10px;
    right: 20px;
  }
  .modal-image {
    max-height: 60vh;
  }
  .modal-details {
    max-width: 100%;
  }
  .modal-title {
    font-size: 1.8em;
  }
  .nav-button {
    padding: 10px 15px;
    font-size: 1.5em;
  }
}

@media (max-width: 768px) {
  .modal-content {
    padding: 20px;
    margin: 1% auto;
  }
  .modal-body {
    gap: 15px;
  }
  .modal-image {
    max-height: 50vh;
  }
  .modal-title {
    font-size: 1.5em;
  }
  .modal-details {
    font-size: 0.9em;
  }
  .modal-navigation {
    width: 100%;
    padding: 0 10px;
  }
}
</style>