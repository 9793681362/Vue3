<script setup>
import { registrationRequest } from '@/api/login/login'
import { ElMessage, ElForm, ElFormItem, ElInput, ElButton } from 'element-plus'
import { reactive, defineEmits, ref } from 'vue'

const loginForm = reactive({
  username: '',
  password: '',
  email: '',
  phone_number: ''
})

const emit = defineEmits('toggle')
const toggle = () => {
  emit('toggle')
}

const rules = reactive({
  username: [
    {
      required: true,
      message: '请输用户名',
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
  ],
  email: [
    {
      pattern: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
      message: '请输入有效的电子邮件',
      trigger: 'blur'
    }
  ],
  phone_number: [
    {
      pattern: /^\d{11}$/,
      message: '请输入有效的11位电话号码',
      trigger: 'blur'
    }
  ]
})

const loginFormRef = ref(null) // 创建一个ref来引用表单

const register = () => {
  // 获取表单实例
  const form = loginFormRef.value

  // 手动触发表单验证
  form.validate(async (valid) => {
    if (valid) {
      // 如果表单验证通过，执行注册逻辑
      try {
        const res = await registrationRequest(
          loginForm.username,
          loginForm.password,
          loginForm.email,
          loginForm.phone_number
        )
        if (res.status === 200) {
          ElMessage({
            message: 'Registration successful! Welcome aboard',
            type: 'success'
          })
          for (const key in loginForm) {
            loginForm[key] = ''
          }
        }
      } catch {
        console.log('Registration failed')
      }
    }
  })
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
      ref="loginFormRef"
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
      <el-form-item prop="email">
        <el-input v-model="loginForm.email" placeholder="Email"></el-input>
      </el-form-item>
      <el-form-item prop="phone_number">
        <el-input
          v-model="loginForm.phone_number"
          placeholder="Phone"
        ></el-input>
      </el-form-item>
      <el-button class="login-button" :plain="true" @click="register"
        >Rigster</el-button
      >
    </el-form>
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
  margin-top: 20px;
  width: 350px;
  height: 30px;
}
</style>
