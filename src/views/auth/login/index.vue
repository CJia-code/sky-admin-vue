<script setup lang="ts">
import Text from "./components/text.vue";
import Form from "./components/form.vue";
/** 适配移动端开始 */
import {useScreenStore} from "@/hooks/screen";
// 获取当前为[移动端、IPad、PC端]仓库，阔以使用 watchEffect(() => {}) 进行监听。
const {isScreen} = useScreenStore();
/** 适配移动端结束 */
</script>

<template>
  <el-row class="min-h-screen">
    <el-col v-if="!isScreen" :span="12">
      <Text></Text>
    </el-col>
    <el-col :span="isScreen ? 24 : 12">
      <Form></Form>
    </el-col>
    <el-col v-if="isScreen" :span="24">
      <div class="bei-an flex">
        <a>网站备案号：豫ICP备2022022094号-1</a>
      </div>
    </el-col>
  </el-row>
</template>

<style scoped lang="scss">
.bei-an {
  position: absolute;
  bottom: 10px;
  left: auto;
  width: 100%;
  font-size: 12px;
  font-weight: bold;
  justify-content: center;
}
</style>
