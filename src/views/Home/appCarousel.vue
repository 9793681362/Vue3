<script setup>
const items = Array.from({ length: 10 }, (_, index) => ({ id: index + 1 }))
</script>

<template>
  <div class="carousel">
    <div class="carousel-content">
      <div
        class="carousel-item"
        v-for="item in items.concat(items)"
        :key="item.id"
      >
        <div class="project-message">
          <p class="project-name">Jesse Sjpwater</p>
          <p class="project-info">Design Educator</p>
          <div>
            <span class="project-title">Ul</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.carousel {
  overflow: hidden;
  width: 100%;
  .carousel-content {
    display: flex;
    animation: scroll 20s linear infinite; /* 滚动动画 */
    gap: 20px;
    .carousel-item {
      position: relative;
      padding: 16px 20px;
      height: 340px;
      width: 275px;
      background-color: #e7e7e7;
      border-radius: 25px;
      flex-shrink: 0;
      .project-message {
        display: flex;
        flex-direction: column;
        justify-content: flex-end; // 这个属性应该让内容靠底部对齐
        height: 100%; // 确保容器有足够的高度
        color: white;
        gap: 5px;
        .project-title {
          border: 0.5px solid white;
          padding: 1px 10px;
          border-radius: 999px;
        }
      }
    }
  }
}

/* 定义动画，实现从右到左的滚动，并在循环结束时恢复初始位置 */
@keyframes scroll {
  0% {
    transform: translateX(0); /* 初始位置 */
  }
  100% {
    transform: translateX(calc(-100% / 10 * 10)); /* 滚动到最后一项 */
  }
}
</style>
