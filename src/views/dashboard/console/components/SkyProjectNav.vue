<script setup lang="ts">
import {getAssets} from "@/utils/index.js";

const cardList = reactive([
  {
    logo: getAssets("images/dashboard/console/github-fill.svg"),
    title: "Github",
    secondary: "不要等待机会，而要创造机会。",
    group: "开源组"
  },
  {logo: getAssets("images/dashboard/console/Vue.svg"), title: "Vue", secondary: "现在的你决定将来的你。", group: "算法组"},
  {
    logo: getAssets("images/dashboard/console/html.svg"),
    title: "HTML5",
    secondary: "没有什么才能比努力更重要。",
    group: "上班摸鱼"
  },
  {
    logo: getAssets("images/dashboard/console/python.svg"),
    title: "Python",
    secondary: "热情和欲望可以突破一切难关。",
    group: "技术"
  },
  {
    logo: getAssets("images/dashboard/console/React.svg"),
    title: "React",
    secondary: "健康的身体是实现目标的基石。",
    group: "技术牛"
  },
  {logo: getAssets("images/dashboard/console/js.svg"), title: "JS", secondary: "路是走出来的，而不是空想出来的。", group: "架构组"},
]);
</script>

<template>
  <div class="sky-flex">
    <el-card class="card-item" v-for="item in cardList" :key="item.title" shadow="hover">
      <span class="flex">
        <span style="width: 30px; height: 30px; display: inline-flex;">
          <img :src="item.logo" alt=""/>
        </span>
        <span class="text-4 ml-4">{{ item.title }}</span>
      </span>
      <div class="flex mt2 h-10">
        {{ item.secondary }}
      </div>
      <div class="flex mt2 justify-between text text-secondary">
        <span>{{ item.group }}</span>
        <span>2024-10-01</span>
      </div>
    </el-card>
  </div>
</template>

<style scoped lang="scss">
.sky-flex {
  height: 350px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;

  .card-item {
    flex: 1 1 calc(30% - 20px); /* 每个卡片占据1/3宽度，减去间距 */
    margin: 10px; /* 添加间距 */

    .flex {
      display: flex;
      align-items: center;
    }

    .justify-between {
      justify-content: space-between;
    }

    .text {
      font-size: 13px;
    }

    .text-secondary {
      color: #00000073;
    }
  }
}

</style>
