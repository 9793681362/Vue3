<script setup>
import { useRouter } from 'vue-router'
import { defineEmits, reactive, ref } from 'vue'
import { loginRequest } from '@/api/login/login'
import { ElMessage } from 'element-plus'

const router = useRouter()

const emit = defineEmits(['toggle'])

const switch_toggle = () => {
  console.log('toggle 方法被调用了')
  console.log('emit 函数是否存在：', emit)
  emit('toggle')
}
const loginForm = reactive({
  username: '',
  password: '',
  email: '',
  phone_number: ''
})

const rules = reactive({
  username: [
    {
      required: true,
      message: '请输入用户名',
      trigger: 'blur'
    },
    {
      pattern: /^[a-zA-Z0-9_-]{3,16}$/,
      message: '用户名为3-16位字母、数字、下划线或减号',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '请输入密码',
      trigger: 'blur'
    },
    {
      pattern: /^(?=.*[a-zA-Z])(?=.*\d).{6,20}$/,
      message: '密码必须要包含大小写字幕和数字，长度在6-20之间',
      trigger: 'blur'
    }
  ]
})

const loginData = ref(null)

const login = () => {
  const form = loginData.value
  form.validate(async (valid) => {
    if (valid) {
      try {
        const res = await loginRequest(loginForm.username, loginForm.password)
        if (res.status === 200) {
          router.push('/home')
          ElMessage({
            message: 'Login successful! Welcome back!',
            type: 'success'
          })
        }
      } catch {
        ElMessage({
          message: 'Login failed. Please check your username and password.',
          type: 'error'
        })
      }
    }
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
