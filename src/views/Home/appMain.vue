<script setup>
import { ref, reactive } from 'vue'

const form = reactive({
  inputValue: ''
})

const value1 = ref('')
</script>

<template>
  <div class="main">
    <div class="record-container">
      <el-form class="record-form" ref="myForm" :model="form" v-if="form">
        <div class="block">
          <span class="demonstration"></span>
          <el-date-picker
            v-model="value1"
            type="datetime"
            placeholder="Select date and time"
          />
        </div>
        <el-select placeholder="Project"><el-option></el-option> </el-select>
        <el-select placeholder="Time"><el-option></el-option> </el-select>

        <!-- v-if 确保 form 已定义 -->
        <el-form-item label="">
          <el-input v-model="form.inputValue" placeholder="remark"></el-input>
        </el-form-item>

        <el-button type="primary">Send</el-button>
      </el-form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main {
  position: relative;
  padding: 20px 16px;
  height: 500px;
  .record-container {
    .record-form {
      display: flex;
      gap: 20px;
      padding: 20px;
      flex-direction: column;
      border: 1px solid #dee3e8;
      border-radius: 3px;
      box-shadow: 0 4px 10px -2px rgba(0, 0, 0, 0.1);
      position: absolute;
      right: 20px;
    }
  }
}
</style>
