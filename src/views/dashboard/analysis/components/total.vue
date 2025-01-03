<script setup lang="ts">
import * as echarts from "echarts";

const main = ref();
const init = () => {
  const myChart = echarts.init(main.value, 'null', {width: 1680, height: 320});
  var data1 = [3210, 1898, 3333, 5000, 3651, 4200, 3200, 2300, 3000, 4544, 6500, 3200];
  var data2 = [720, -260, 473, -372, -540, -50, 340, 230, -857, 666, 520, -520];
//定义两个上下箭头的矢量路径
  var up = "path://M286.031,265l-16.025,3L300,223l29.994,45-16.041-3-13.961,69Z";
  var down =
    "path://M216.969,292l16.025-3L203,334l-29.994-45,16.041,3,13.961-69Z";
//遍历data2里面元素的正负定义一个矢量路径的数组
  var path = [up, down, up, down, down, down, up, up, down, up, up, down];
  const option = {
    color: ["#3398DB"],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
      },
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
        axisTick: {
          alignWithLabel: true,
        },
      },
    ],
    yAxis: [
      {
        type: "value",
      },
    ],
    series: [
      {
        name: "",
        type: "pictorialBar",
        symbol: function (data, params) {
          return path[params.dataIndex];
        },
        symbolSize: [20, 30],
        symbolOffset: [0, -40],
        color: "orange",
        symbolPosition: "end",
        label: {
          show: true,
          position: "top",
          formatter: function (params) {
            return data2[params.dataIndex];
          },
          fontSize: 30,
          fontWeight: "bold",
          color: "#34DCFF",
        },
        data: data1,
      },
      {
        name: "直接访问",
        type: "bar",
        barWidth: "40%",
        data: data1,
      },
    ],
  };
  myChart.setOption(option);
};

onMounted(() => {
  init();
})
</script>

<template>
  <div id="main" ref="main" style="height: 350px;"></div>
</template>

<style scoped lang="scss">

</style>
