<script setup>
import { ref } from 'vue'
const isActive = ref(false)
import { useRouter } from 'vue-router' // 导入 useRouter 以获取路由实例
import { defineEmits } from 'vue'
import { getMessage } from '@/api/layout/layout'

// 获取路由器实例
const router = useRouter()

// 使用 ref 定义一个响应式变量来存储导航数据
const nav_value = ref()

// 获取用户数据并更新导航数据
const getUser = async () => {
  const res = await getMessage() // 请求获取数据
  nav_value.value = res.data
}

// 在组件加载时调用 getUser 函数
getUser()

// const nav_value = [
//   { id: 0, nav: 'Home', content: '\uF425', route: '/home' },
//   { id: 1, nav: 'English', content: '\uF658', route: '/english' },
//   { id: 2, nav: 'Master', content: '\uF7CD', route: '/master' },
//   { id: 3, nav: 'Javascript', content: '\uF74C', route: '/javascript' },
//   { id: 4, nav: 'Vue', content: '\uF8C4', route: '/vue' },
//   { id: 5, nav: 'Python', content: '\uF75C', route: '/python' },
//   { id: 6, nav: 'Django', content: '\uF7CE', route: '/django' },
//   { id: 7, nav: '', content: '' },
//   { id: 8, nav: 'GitHub', content: '\uF3ED', route: '/github' },
//   { id: 10, nav: 'Plane', content: '\uF1A2', route: 'plane' },
//   { id: 11, nav: '', content: '' }
// ]

const repositories = [
  {
    id: 1,
    text: '9793681362/ClearEleganceGathering',
    img: 'src/assets/images/1.png'
  },
  { id: 2, text: '9793681362/Vue', img: 'src/assets/images/1.png' },
  { id: 3, text: '9793681362/rickblunt', img: 'src/assets/images/1.png' },
  { id: 4, text: '9793681362/open', img: 'src/assets/images/1.png' }
]

// 在列表项上添加点击事件以跳转到相应的路由
const handleNavClick = (route) => {
  if (route) {
    // 如果该项目有对应的路有，则跳转
    router.push(route)
  }
  close()
}

// 鼠标移入时设置 `isActive` 为当前项的 `id`
const handleMouseOver = (id) => {
  isActive.value = id
}

// 鼠标移出时将 `isActive` 置空
const handleMouseOut = () => {
  isActive.value = null
}

// 定义事件
const emit = defineEmits(['close-drawer'])
const close = () => {
  emit('close-drawer') // 发送关闭抽屉事件
}
</script>

<template>
  <div>
    <div class="nav-home">
      <div class="Overlay-header">
        <div class="nav-title">R</div>
        <div class="nav-close">
          <button @click="close">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-x"
              viewBox="0 0 16 16"
            >
              <path
                d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div class="navigation-bar">
        <ul>
          <li
            v-for="item in nav_value"
            :key="item.id"
            @mouseover="handleMouseOver(item.id)"
            @mouseout="handleMouseOut()"
            @click="handleNavClick(item.route)"
            :class="[
              'nav-value-container',
              {
                separator: item.id === 7 || item.id === 11,
                isActive:
                  item.id !== 7 && item.id !== 11 && isActive === item.id
              }
            ]"
            :data-content="item.content"
          >
            {{ item.nav }}
          </li>
          <li class="repositories">
            <div class="repositories-search">
              <p>Repositories</p>
              <button class="search-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                  />
                </svg>
              </button>
            </div>
            <div class="search-inpt"></div>
            <ul class="repositories-container">
              <li v-for="item in repositories" :key="item.id">
                <a href="">
                  <span>
                    <img
                      :src="item.img"
                      alt=""
                      class="avatar"
                      style="margin-right: 8px"
                    />
                  </span>
                  <span class="avatar-text">{{ item.text }}</span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.nav-home {
  background-color: #fff;
  position: absolute;
  border-radius: 0 12px 12px 0;
  top: 0;
  left: 0;
  height: 100vh; // 确保整个视窗高度
  .Overlay-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 8px 0 8px;
    .nav-title {
      padding-left: 10px;
      font-size: 32px;
      font-weight: 700;
    }
    .nav-close {
      button {
        position: relative; /* 父容器设置为相对定位 */
        cursor: pointer;
        width: 30px;
        height: 30px;
        /* 其他样式可以根据需要添加 */
        svg {
          position: absolute; /* 绝对定位 */
          width: 20px;
          height: 20px;
          top: 50%; /* 垂直居中 */
          left: 50%; /* 水平居中 */
          transform: translate(-50%, -50%); /* 水平和垂直居中 */
          color: #636c76;
        }
      }
      button:hover {
        background-color: #eef1f4;
        border-radius: 5px;
      }
    }
  }
  .navigation-bar {
    padding: 0 8px 16px 8px;
    ul {
      padding: 8px;
      font-size: 16px;
      .nav-value-container {
        cursor: pointer;
        display: flex;
        align-items: center;
        padding: 6px 8px;
        color: #636c76;
      }
      .nav-value-container::before {
        content: attr(data-content); /* 从属性获取Unicode值 */
        font-family: 'bootstrap-icons'; /* 引用字体库 */
        font-size: 19px;
        margin-right: 8px;
      }
      .separator {
        margin: 7px -8px 8px -8px;
        padding: 0;
        height: 1px;
        width: 100%;
        background-color: #d0d7deb3;
      }
    }
  }
}

.repositories {
  font-size: 12px;
  .repositories-search {
    display: flex;
    align-items: center;
    p {
      flex: 1;
    }
    .search-button {
      cursor: pointer;
      svg {
        width: 13px;
      }
    }
  }
  .repositories-container {
    li {
      padding: 6px 8px;
      a {
        display: flex;
        align-items: center;
        .avatar {
          width: 16px;
          height: 16px;
          border-radius: 50%;
        }
        .avatar-text {
          flex: 1;
        }
      }
    }
  }
}

.isActive {
  background-color: #f6f8fa; /* 使用 `!important` 提高优先级 */
}
</style>
