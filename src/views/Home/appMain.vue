<script setup>
import { ref } from 'vue'

const value1 = ref('')
</script>

<template>
  <div class="main">
    <div class="record-info-contianer">
      <el-form class="record-info">
        <h4>Start a new repository for 9793681362</h4>
        <p>
          A repository contains all of your project's files, revision history,
          and collaborator discussion.
        </p>
        <div class="record-input">
          <el-date-picker
            class="choose-time"
            v-model="value1"
            type="datetime"
            placeholder="Select date and time"
            style="width: 100%"
          />
          <el-select>
            <el-option></el-option>
          </el-select>
          <el-select>
            <el-option></el-option>
          </el-select>

          <div class="record-remark">
            <span>Repository name *</span>
            <el-input class="focused-input"></el-input>
          </div>
        </div>
        <el-button
          style="width: 150px"
          color="#1F883D"
          class="form-send"
          type="primary"
          >Send</el-button
        >
      </el-form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main {
  display: flex;
  height: 450px;
  position: relative;
  margin: 20px 16px;
  .record-info-contianer {
    position: absolute;
    right: 0px;
    padding: 10px;
    border: 1px solid #dee3e8;
    border-radius: 3px;
    .record-info {
      display: flex;
      flex-direction: column;
      gap: 10px;
      width: 370px;
      .record-input {
        display: flex;
        flex-direction: column;
        gap: 20px;
        .record-remark {
          span {
            font-size: 14px;
          }
        }
      }
      h4 {
        font-size: 14px;
      }
      P {
        font-size: 14px;
        color: #636c76;
      }
    }
  }
}
</style>
