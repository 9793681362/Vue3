<script setup>
import { ref } from 'vue'
import navBar from './navBar.vue'
import appHeader from './appHeader.vue'
const isDrawerOpen = ref(false)
const isShadow = ref(false)

// 监听来自navBar的事件，关闭抽屉
const onCloseDrawer = () => {
  isDrawerOpen.value = false
  isShadow.value = false
}

// 监听来自appHeader的事件，切换抽屉的打开与关闭
const changeDrawer = () => {
  isDrawerOpen.value = !isDrawerOpen.value
  setTimeout(() => {
    isShadow.value = !isShadow.value
  }, 100) // 延迟为500毫秒
}
</script>

<template>
  <appHeader @switch-drawer="changeDrawer"></appHeader>
  <div class="drawer-container">
    <navBar
      @close-drawer="onCloseDrawer"
      class="drawer"
      :class="{ open: isDrawerOpen }"
    ></navBar>
    <div class="overlay" v-show="isShadow" @click="changeDrawer"></div>
  </div>
  <router-view></router-view>
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
  z-index: 1000;
}

.drawer.open {
  left: 0; /* 当打开时，滑入屏幕 */
}

.toggle-button {
  position: absolute;
  right: 0;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* 半透明黑色 */
  z-index: 999;
}
</style>
