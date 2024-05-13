<script setup>
import appMain from './appMain.vue'
import appCarousel from './appCarousel.vue'
</script>

<template>
  <appMain></appMain>
  <appCarousel></appCarousel>
</template>

<style lang="scss" scoped>
.asd {
  position: absolute;
  right: 0;
}

.drawer-container {
  position: relative;
}

.drawer {
  position: fixed;
  top: 0;
  left: -100%; /* 初始位置在屏幕外 */
  height: 100%;
  background: white;
  transition: left 0.35s; /* 滑动动画 */
  padding: 16px;
}

.drawer.open {
  left: 0; /* 当打开时，滑入屏幕 */
}

.toggle-button {
  position: absolute;
  right: 0;
}
</style>
