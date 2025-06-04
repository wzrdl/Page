<template>
  <div class="timeline-wrapper">
    <div class="timeline">
      <div class="timeline-slider" ref="slider">
        <div class="slider-handle" 
          :style="{ left: handlePosition + '%' }"
          @mousedown="startDrag"
        ></div>
      </div>
      <!-- 遍历时间轴事件 -->
      <div v-for="(event, index) in sortedEvents" 
           :key="index" 
           class="timeline-item"
           :class="{ active: isEventActive(event) }">
        <div class="timeline-year">{{ event.year }}.{{ event.month }}</div>
        <div class="timeline-dot"></div>
        <div class="timeline-content">{{ event.title }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  events: {
    type: Array,
    default: () => []
  }
});

const handlePosition = ref(0);
const isDragging = ref(false);
const slider = ref(null);

// 修改排序逻辑，从早到晚排序
const sortedEvents = computed(() => {
  return [...props.events].sort((a, b) => {
    return (a.year * 12 + (a.month || 1)) - (b.year * 12 + (b.month || 1));
  });
});

const startDrag = (e) => {
  isDragging.value = true;
  document.addEventListener('mousemove', onDrag);
  document.addEventListener('mouseup', stopDrag);
};

const onDrag = (e) => {
  if (!isDragging.value || !slider.value) return;
  const rect = slider.value.getBoundingClientRect();
  const percentage = Math.max(0, Math.min(100, 
    ((e.clientX - rect.left) / rect.width) * 100
  ));
  handlePosition.value = percentage;
};

const stopDrag = () => {
  isDragging.value = false;
  document.removeEventListener('mousemove', onDrag);
  document.removeEventListener('mouseup', stopDrag);
};

const isEventActive = (event) => {
  // 修改事件激活逻辑，从左到右判断
  const timelinePercentage = handlePosition.value;
  const eventDate = new Date(event.year, (event.month || 1) - 1);
  const earliestDate = new Date(Math.min(...props.events.map(e => e.year)));
  const percentage = ((eventDate - earliestDate) / (new Date(Math.max(...props.events.map(e => e.year))) - earliestDate)) * 100;
  return percentage <= timelinePercentage;
};

onUnmounted(() => {
  document.removeEventListener('mousemove', onDrag);
  document.removeEventListener('mouseup', stopDrag);
});
</script>

<style scoped>
.timeline-wrapper {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  overflow-x: auto;
  padding: 20px 0;
  margin-bottom: 40px;
  scrollbar-width: thin;
  scrollbar-color: var(--accent-color) #f0f0f0;
}

.timeline-wrapper::-webkit-scrollbar {
  height: 6px;
}

.timeline-wrapper::-webkit-scrollbar-track {
  background: #f0f0f0;
  border-radius: 3px;
}

.timeline-wrapper::-webkit-scrollbar-thumb {
  background-color: var(--accent-color);
  border-radius: 3px;
}

.timeline {
  display: flex;
  flex-direction: row;
  min-width: min-content;
  gap: 40px;
  padding: 0 20px;
  margin: 0 auto;
  position: relative;
}

/* 添加从左到右的渐变效果 */
.timeline::before {
  background: linear-gradient(to right, 
    rgba(139, 69, 19, 0.1), 
    rgba(139, 69, 19, 0.3)
  );
}

.timeline-slider {
  position: absolute;
  top: 50%;
  left: 20px;
  right: 20px;
  height: 2px;
  background-color: rgba(139, 69, 19, 0.1);
  transform: translateY(-50%);
}

.slider-handle {
  position: absolute;
  top: 50%;
  width: 16px;
  height: 16px;
  background-color: var(--accent-color);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  cursor: grab;
  z-index: 2;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
}

.slider-handle:active {
  cursor: grabbing;
}

.timeline-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  min-width: 120px;
  opacity: 0.5;
  transition: opacity 0.3s;
}

.timeline-year {
  font-weight: bold;
  font-size: 1.2em;
  color: var(--accent-color);
  margin-bottom: 10px;
}

.timeline-dot {
  width: 8px;
  height: 8px;
  background-color: var(--accent-color);
  border-radius: 50%;
  margin: 5px 0;
}

.timeline-content {
  text-align: center;
  font-size: 0.9em;
  color: var(--text-dark);
  max-width: 150px;
}

.timeline-item.active {
  opacity: 1;
}

@media (max-width: 768px) {
  .timeline-wrapper {
    padding: 20px 10px;
  }
  
  .timeline {
    gap: 30px;
    padding: 0 10px;
  }
  
  .timeline-item {
    min-width: 100px;
  }
}
</style>
