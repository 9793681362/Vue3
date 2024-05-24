<script setup>
import { defineEmits } from 'vue'

// 定义事件
const emit = defineEmits(['switch-drawer'])
const switchDarwer = () => {
  console.log('发送事件', emit)
  emit('switch-drawer') // 发送关闭抽屉事件
}
</script>

<template>
  <div class="header-contianer">
    <div class="header-left">
      <button class="togger-drawer" @click="switchDarwer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-list"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      </button>
      <div class="logo"><a href="">R</a></div>
      <div class="dashboard">Dashboard</div>
    </div>
    <div class="header-right">
      <button class="search-input">
        <div><span>Type to search</span></div>
      </button>
      <router-link to="/login" class="goLogin">Log in</router-link>
      <a href="" class="sign-up">Sign up</a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header-contianer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f6f8fa;
  padding: 16px;
  border-bottom: 1px solid #d0d7de;
  .header-left {
    display: flex;
    align-items: center;
    gap: 20px;
    .togger-drawer {
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid #d0d7de;
      height: 30px;
      width: 30px;
      border-radius: 5px;
      svg {
        color: #757575;
      }
    }
    .logo {
      font-size: 32px;
      font-weight: 700;
    }
    .dashboard {
      font-size: 15px;
      font-weight: 700;
    }
  }
  .header-right {
    display: flex;
    align-items: center;
    gap: 20px;
    .search-input {
      border-radius: 5px;
      padding: 5px 8px 5px 31px;
      border: 1px solid #d0d7de;
      div {
        position: relative;
        height: 20px;
        width: 309px;
        font-size: 14px;
        color: #646d77;
        span {
          position: absolute;
          line-height: 20px;
          left: 0;
        }
        span::before {
          position: absolute;
          left: -20px;
          content: '\F52A';
          font-family: 'bootstrap-icons';
        }
      }
      div::after {
        position: absolute;
        content: '\F234';
        font-family: 'bootstrap-icons';
        right: 0px;
        line-height: 20px;
      }
    }
    .log-in {
      font-size: 14px;
    }
    .sign-up {
      display: flex; /* 布局 */
      align-items: center;

      height: 38px; /* 大小和间距 */
      padding: 0 14px;

      border: 1.5px solid #222; /* 边框和装饰 */
      border-radius: 999px;

      background-color: #222; /* 颜色和背景 */
      color: white;

      font-size: 14px; /* 文本属性 */
    }
  }
}
</style>
