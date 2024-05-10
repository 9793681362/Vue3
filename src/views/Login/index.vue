<script setup></script>

<template>
  <div class="page-container">
    <h1 class="home">Home</h1>

    <div class="login-container">
      <div class="logo"><h1>R</h1></div>
      <h1 class="wbc-gin">Welcome back please Sign in</h1>
      <el-input placeholder="Username" />
      <el-input placeholder="Password" />
      <el-button class="login-button">Login</el-button>
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

.login-container {
  display: flex; /* 可以使用 Flex 布局 */
  flex-direction: column; /* 子元素垂直排列 */
  align-items: center;
  padding: 80px;
  border-radius: 15px;
  box-shadow: 0 5px 10px 4px rgba(0, 0, 0, 0.2);
  background-color: #ffffff;
  gap: 30px;

  .logo {
    font-size: 50px;
  }
  .wbc-gin {
    font-size: 30px;
  }
}

.el-input {
  width: 350px;
  height: 40px;
}

.login-button {
  margin-top: 30px;
  width: 350px;
  height: 30px;
}
</style>
