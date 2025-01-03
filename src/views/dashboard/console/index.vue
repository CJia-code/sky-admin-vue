<script setup lang="ts">
import SkyProjectNav from "./components/SkyProjectNav.vue";
import SkyWeather from "./components/SkyWeather.vue";
import SkyNav from "./components/SkyNav.vue";
import SkyImages from "./components/Skyimages.vue";
import SkyTimeline1 from "@/views/dashboard/console/components/SkyTimeline1.vue";
import {getAssets} from "@/utils/index.js";
import {useScreenStore} from "@/hooks/screen";

// 获取当前为[移动端、IPad、PC端]仓库，阔以使用 watchEffect(() => {}) 进行监听。
const {isScreen} = useScreenStore();
/** 适配移动端结束 */

const avatar = getAssets("images/logo/logo.jpg");
// Git地址
const handleGiTee = () => {
  window.open("", "_blank");
};
// GitHub地址
const handleGitHub = () => {
  window.open("", "_blank");
};
</script>

<template>
  <div>
    <el-card class="rounded-md dark:bg-black" shadow="hover">
      <div class="flex flex-items-center" v-waterMarker="{ text: 'SKY-ADMIN', textColor: '#D9D9D9' }">
        <img class="w-60px h-60px rounded-full select-none user-avatar" :src="avatar" alt="avatar"/>
        <div class="p-l-20px">
          <div class="font-bold p-b-8px whitespace-nowrap">
            <span>SKY-UI-ADMIN🌻</span><span class="c-#409EFF" @click="handleGiTee">[Gitee]</span><span>/</span><span
            class="c-orange" @click="handleGitHub">[GitHub]</span>
          </div>
          <div class="font-bold whitespace-nowrap">欲买桂花同载酒，终不似、少年游~🌻</div>
        </div>
      </div>
    </el-card>
    <el-row :gutter="20" class="m-t-5px">
      <el-col :span="16" :lg="16" :md="12" :sm="24" :xs="24">
        <el-card v-if="!isScreen" class="rounded-md dark:bg-black mb-2" shadow="hover" header="✨️ 项目导航">
          <SkyProjectNav></SkyProjectNav>
        </el-card>
        <el-card class="rounded-md dark:bg-black" shadow="hover" header="🐻 用户操作日志记录">
          <SkyTimeline1></SkyTimeline1>
        </el-card>
      </el-col>
      <el-col :span="8" :lg="8" :md="12" :sm="24" :xs="24">
        <SkyWeather></SkyWeather>
        <el-card class="rounded-md dark:bg-black m-t-5px" shadow="hover" header="🎀 快捷导航">
          <SkyNav></SkyNav>
        </el-card>
        <el-card v-if="!isScreen" class="rounded-md dark:bg-black m-t-5px" shadow="hover">
          <SkyImages></SkyImages>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped lang="scss">

</style>
