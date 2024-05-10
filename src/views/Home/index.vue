<script setup>
// import { ref } from 'vue'
// import navBar from './navBar.vue'
// import appHeader from './appHeader.vue'
import appMain from './appMain.vue'
import appCarousel from './appCarousel.vue'
// const isDrawerOpen = ref(false)

// 监听来自navBar的事件，关闭抽屉
// const onCloseDrawer = () => {
//   isDrawerOpen.value = false
// }

// // 监听来自appHeader的事件，切换抽屉的打开与关闭
// const changeDrawer = () => {
//   isDrawerOpen.value = !isDrawerOpen.value
// }
</script>

<template>
  <!-- <appHeader @switch-drawer="changeDrawer"></appHeader> -->
  <appMain></appMain>
  <appCarousel></appCarousel>
  <!-- <div class="drawer-container">
    <navBar
      @close-drawer="onCloseDrawer"
      class="drawer"
      :class="{ open: isDrawerOpen }"
    ></navBar>
  </div> -->
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
