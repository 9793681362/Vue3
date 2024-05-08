<script setup>
import { ref } from 'vue'
import navBar from './navBar.vue'

const isDrawerOpen = ref(false)

const toggleDrawer = () => {
  isDrawerOpen.value = !isDrawerOpen.value
}

// 监听来自navBar的事件，关闭抽屉
const onCloseDrawer = () => {
  isDrawerOpen.value = false
}
</script>

<template>
  <div class="drawer-container">
    <!-- 触发打开抽屉的按钮 -->
    <button @click="toggleDrawer" class="toggle-button">Toggle Drawer</button>

    <navBar
      @close-drawer="onCloseDrawer"
      class="drawer"
      :class="{ open: isDrawerOpen }"
    ></navBar>
  </div>
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
  transition: left 0.5s; /* 滑动动画 */
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
