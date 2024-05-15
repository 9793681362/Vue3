<script setup>
import { registrationRequest } from '@/api/login/login'
import { ElMessage } from 'element-plus'
import { reactive, defineEmits } from 'vue'

const emit = defineEmits('toggle')

const loginForm = reactive({
  username: '',
  password: '',
  email: '',
  phone_number: ''
})

const rigster = async () => {
  const { username, password, email, phone_number } = loginForm
  const res = await registrationRequest(username, password, email, phone_number)
  console.log(res)
  ElMessage({
    message: 'Registration successful! Welcome aboard!',
    type: 'success'
  })
  for (const key in loginForm) {
    loginForm[key] = ''
  }
}

const toggle = () => {
  emit('toggle')
}
</script>

<template>
  <div class="register-home">
    <el-button class="regsiter-button" @click="toggle">Login</el-button>
    <div class="logo"><h1>R</h1></div>
    <h1 class="wbc-gin">Welcome! Please create an account to join us.</h1>

    <el-form
      :model="loginForm"
      :rules="rules"
      ref="loginData"
      class="input-form"
    >
      <el-form-item prop="username">
        <el-input
          v-model="loginForm.username"
          placeholder="username"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="loginForm.password"
          placeholder="password"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="loginForm.email" placeholder="Email"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="loginForm.phone_number"
          placeholder="Phone"
        ></el-input>
      </el-form-item>
    </el-form>
    <el-button class="login-button" :plain="true" @click="rigster"
      >Rigster</el-button
    >
  </div>
</template>

<style lang="scss" scoped>
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

  .regsiter-button {
    position: absolute;
    top: 40px;
    right: 50px;
    border: none;
    font-weight: 700;
    color: #222;
  }

  .logo {
    font-size: 50px;
  }
  .wbc-gin {
    font-size: 30px;
  }
}

.input-form {
  width: 350px;
}

.login-button {
  width: 350px;
  height: 30px;
}
</style>
