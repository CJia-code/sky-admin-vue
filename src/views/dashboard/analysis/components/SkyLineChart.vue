<script setup lang="ts">
import Traffic from "./traffic.vue";
import Total from "./total.vue";

const value = ref('日交易趋势');
const options = ['日交易趋势', '访问量'];
</script>

<template>
  <SkyCard class="m-t-5px">
    🦀日交易趋势
    <el-divider></el-divider>
    <div class="auto">
      <div class="flex flex-col items-start gap-4">
        <el-segmented v-model="value" :options="options"/>
      </div>
    </div>
    <br/>
    <Traffic v-if="value === '日交易趋势'"></Traffic>
    <Total v-else></Total>
  </SkyCard>
</template>

<style scoped lang="scss">
.auto {
  width: 100%;
}

.flex {
  align-items: center;
}
</style>
