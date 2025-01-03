<script setup lang="ts">
const cardList = reactive([
  {title: "分析页"},
  {title: "控制台"},
  {title: "组件"},
  {title: "系统管理"},
  {title: "图表"},
  {title: "权限管理"},
]);
</script>

<template>
  <div class="sky-flex">
    <el-card class="card-item" v-for="item in cardList" :key="item" shadow="hover">
      <div class="flex align-center justify-center">
        <span>{{ item.title }}</span>
      </div>
    </el-card>
  </div>
</template>

<style scoped lang="scss">
.sky-flex {
  flex-wrap: wrap;
  flex-direction: row;

  .card-item {
    flex: 1 1 calc(30% - 20px);

    .flex {
      display: flex;
      flex-direction: column;
    }

    .align-center {
      align-items: center;
    }

    .justify-center {
      justify-content: center;
    }

    .text {
      font-size: 13px;
    }
  }
}
</style>
