<script setup lang="ts">
import SkyAnCard from "./components/SkyAnCard.vue";
import SkyLineChart from "./components/SkyLineChart.vue";
import SkyLeftChart from "./components/SkyLeftChart.vue";
import SkyRightChart from "./components/SkyRightChart.vue";
</script>

<template>
  <div class="p-4px">
    <SkyAnCard></SkyAnCard>
    <SkyLineChart></SkyLineChart>
    <el-row :gutter="20" class="m-t-5px">
      <!-- 注意：如果不进行操作数组，使用index当key没有问题，若是数组会用来增删改查则不能使用index当key。 -->
      <el-col :span="12" :lg="12" :md="12" :sm="24" :xs="24">
        <el-card :class="['rounded-md', 'dark:bg-black']" shadow="hover" header="👻 地区异常订单排行">
          <SkyLeftChart></SkyLeftChart>
        </el-card>
      </el-col>
      <el-col :span="12" :lg="12" :md="12" :sm="24" :xs="24">
        <el-card class="rounded-md dark:bg-black" shadow="hover" header="🍉 近10日订单量">
          <SkyRightChart></SkyRightChart>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped lang="scss">

</style>
