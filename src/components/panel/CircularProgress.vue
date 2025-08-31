<template>
  <div class="radial-progress">
    <svg viewBox="0 0 36 36" class="circular-chart">
      <!-- Fundo do círculo -->
      <path
        class="circle-bg"
        d="M18 2.0845
           a 15.9155 15.9155 0 0 1 0 31.831
           a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <path 
        :style="{stroke: progress > 7 ? 'green' : progress < 5 ? 'red' : 'yellow'}"
        class="circle"
        :stroke-dasharray="(progress * 10) + ', 100'"
        d="M18 2.0845
           a 15.9155 15.9155 0 0 1 0 31.831
           a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <text x="18" y="20.35" class="percentage"  :style="{fill: progress > 7 ? 'green' : progress < 5 ? 'red' : 'yellow'}">{{ progress }}</text>
    </svg>
  </div>
</template>

<script setup>
defineProps({
    progress: {
        type: Number,
        required: true
    }
})

const test = ref(2)
</script>

<style scoped>
.circular-chart {
  width: 41.6px;
  height: 41.6px;
}

.circle-bg {
  fill: none;
  stroke: #eee;
  stroke-width: 2;
}

.circle {
  fill: none;
  stroke-width: 2;
  stroke-linecap: round;
  transition: stroke-dasharray 0.3s ease;
}

.percentage {
  fill: #666;
  font-family: sans-serif;
  font-size: 10px;
  text-anchor: middle;
}
</style>
