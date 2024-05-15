<script setup>
import { ref } from 'vue'
import regsiterHome from './regsiterHome.vue'
import loginHome from './loginHom.vue'

const showRegister = ref(false)

const toggleComponents = () => {
  showRegister.value = !showRegister.value
}
</script>

<template>
  <div class="page-container">
    <h1 class="home">Home</h1>
    <div class="login-container">
      <loginHome
        v-if="!showRegister"
        class="login"
        :showRegister="showRegister"
        @toggle="toggleComponents"
      ></loginHome>
      <regsiterHome
        v-if="showRegister"
        class="register"
        :showRegister="showRegister"
        @toggle="toggleComponents"
      ></regsiterHome>
    </div>
  </div>
</template>

<style lang="scss" scoped>
template {
  background-color: #fbfbfd;
}
.home {
  position: absolute;
  top: 0;
  left: 0;
  padding: 35px;
  font-size: 30px;
}
.page-container {
  display: flex;
  margin-top: 150px;
  justify-content: center;
}

.login,
.register {
  display: flex; /* 可以使用 Flex 布局 */
  position: relative;
  flex-direction: column; /* 子元素垂直排列 */
  align-items: center;
  padding: 80px;
  border-radius: 15px;
  box-shadow: 0 5px 10px 4px rgba(0, 0, 0, 0.2);
  background-color: #ffffff;
  gap: 30px;
}
</style>
