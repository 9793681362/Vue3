<script setup>
import axios from 'axios'
import { useRouter } from 'vue-router'
import { defineEmits, reactive } from 'vue'

const router = useRouter()

const emit = defineEmits(['toggle'])

const switch_toggle = () => {
  console.log('toggle 方法被调用了')
  console.log('emit 函数是否存在：', emit)
  emit('toggle')
}

const rules = reactive({
  username: [
    {
      require: true,
      message: '请输入密码',
      trigger: 'blur'
    }
  ],
  password: [
    {
      require: true,
      message: '请输入密码',
      trigger: 'blur'
    }
  ]
})

const loginForm = reactive({
  username: '',
  password: '',
  email: '',
  phone_number: ''
})

const login = () => {
  const formData = new FormData()
  formData.append('username', loginForm.username)
  formData.append('password', loginForm.password)

  axios
    .post('http://139.196.213.64:8000/api/login_view', formData)
    // .post('http://127.0.0.1:8000/api/login_view', formData)
    .then((response) => {
      console.log(response.data)
      if (response.status === 200) {
        router.push('/home')
      }
    })
    .catch((error) => {
      console.error(error)
    })
}
</script>

<template>
  <div class="login">
    <el-button class="regsiter-button" @click="switch_toggle"
      >Register</el-button
    >
    <div class="logo"><h1>R</h1></div>
    <h1 class="wbc-gin">Welcome back please Sign in</h1>

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
    </el-form>
    <el-button class="login-button" @click="login">Login</el-button>
  </div>
</template>

<style lang="scss" scoped>
.login {
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
