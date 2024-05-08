<script setup></script>

<template>
  <div class="box-container">
    <div v-for="item in 10" :key="item.id" class="my-project-progress"></div>
  </div>
</template>

<style lang="scss" scoped>
.box-container {
  display: flex;
  gap: 10px; /* 注意 gap 应该加单位 */
  width: 100%; /* 宽度占据整个视口 */
  overflow-x: auto; /* 启用横向滚动 */
  background-color: plum;
}

.my-project-progress {
  padding: 16px 20px;
  height: 324px;
  width: 253px;
  background: url('@/assets/images/2.webp') no-repeat center center / cover;
  border-radius: 15px;
  flex-shrink: 0; /* 防止子项缩小 */
}
</style>
