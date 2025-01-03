<script setup lang="ts">
import {CountTo} from "vue3-count-to";
import {useScreenStore} from "@/hooks/screen";

// 获取当前为[移动端、IPad、PC端]仓库，阔以使用 watchEffect(() => {}) 进行监听。
const {isScreen} = useScreenStore();
/** 适配移动端结束 */

const cardList = reactive([
  {title1: "今日访问数", unit: "日", value1: 888, title2: "总访问数", value2: 88888},
  {title1: "成交额", unit: "周", value1: 6666, title2: "总成交额", value2: 66666},
  {title1: "下载数", unit: "月", value1: 8000, title2: "总用户数", value2: 13000},
  {title1: "成交数", unit: "年", value1: 5000, title2: "总登录数", value2: 15000}
]);
</script>

<template>
  <el-row :gutter="20" class="m-t-5px">
    <!-- 注意：如果不进行操作数组，使用index当key没有问题，若是数组会用来增删改查则不能使用index当key。 -->
    <el-col :span="6" :lg="6" :md="12" :sm="12" :xs="24" v-for="(item, index) in cardList" :key="index + new Date().getTime()">
      <el-card :class="['rounded-md dark:bg-black', isScreen ? 'mt2': '']" shadow="hover">
        <div class="flex justify-between">
          <span class="text-sm">{{ item.title1 }}</span>
          <el-tag :type="index === 0 ? 'primary' : index === 1 ? 'success' : index === 2 ? 'warning' : index === 3 ?'danger': ''">
            {{ item.unit }}
          </el-tag>
        </div>
        <div class="text-2xl">
          <CountTo :startVal="0" :endVal="item.value1" :duration="2000"></CountTo>
        </div>
        <el-divider direction="horizontal" content-position="left"></el-divider>
        <div class="flex justify-between">
          <span class="text-sm">{{ item.title2 }}</span>
          <span><CountTo :startVal="0" :endVal="item.value2" :duration="2000"></CountTo></span>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<style scoped lang="scss">

</style>
