<script setup lang="ts">
import * as echarts from "echarts";

const main = ref();
const init = () => {
  const myChart = echarts.init(main.value, 'null', {width: 1680, height: 320});
  var time = ["6:00", "7:00", "8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"];
  var sportData = [111, 222, 4444, 18888, 32332, 55455, 66666, 31313, 14444, 36012, 66666, 44444, 22222, 11111, 4000, 2000, 555, 323];
  var sportTime = [111, 222, 333, 3333, 5000, 18000, 3000, 1200, 14444, 22000, 11000, 2221, 1202, 3100, 398, 198, 555, 222];
  const option = {
    legend: {
      icon: 'rect',
      bottom: 5,
      left: 'center',
      itemWidth: 20,
      itemHeight: 5,
      itemGap: 60,
      textStyle: {
        color: '#666',
      },
    },
    tooltip: {
      trigger: 'axis',
    },
    grid: {
      top: '5%',
      left: '3%',
      right: '4%',
      bottom: '15%',
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        data: time,
        axisLine: {
          show: false,

        },
        axisLabel: {
          textStyle: {
            color: '#666',
          },
        },
        boundaryGap: false,
        axisTick: {
          //坐标轴刻度相关设置。
          show: false,
        },
      },
    ],
    yAxis: [
      {
        type: 'value',
        axisTick: {
          show: false,
        },
        axisLine: {
          show: false,

        },
        axisLabel: {
          textStyle: {
            color: '#666',//左侧数标
          },
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: '#ff0000',
            type: 'dashed',
            opacity: 0.1,
          },
        },
      },
      {
        type: 'value',
        position: 'right',
        axisTick: {
          show: false,
        },
        axisLabel: {
          textStyle: {
            color: '#666', //右侧数标
          },
          formatter: '{value}',
        },
        axisLine: {
          show: false,
        },
        splitLine: {
          show: false,
        },
      },
    ],
    series: [
      {
        name: '2023年每天访问流量数',
        type: 'line',
        data: sportTime,
        symbolSize: 1,
        symbol: 'circle',
        smooth: true,
        yAxisIndex: 0,
        showSymbol: false,
        lineStyle: {
          width: 1,
          color: '#00CA94', //绿线颜色
        },
        itemStyle: {
          normal: {
            color: 'rgba(0, 202, 148, 1)', //绿线渐变颜色
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                {
                  offset: 0,
                  color: 'rgba(0, 202, 148, 0)',
                },
                {
                  offset: 1,
                  color: 'rgba(0, 202, 148, 1)',
                },
              ]),
            },
          },
        },
      },
      {
        name: '2023年每每小时访问流量数',
        type: 'line',
        data: sportData,
        symbolSize: 1,
        yAxisIndex: 1,
        symbol: 'circle',
        smooth: true,
        showSymbol: false,
        lineStyle: {
          width: 1,
          color: '#1E9FFF',//黄线颜色
        },
        itemStyle: {
          normal: {
            color: 'rgba(30, 1159, 255, 1)',
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                {
                  offset: 0,
                  color: 'rgba(30, 1159, 255, 0)',
                },
                {
                  offset: 1,
                  color: 'rgba(30, 1159, 255, 1)',
                },
              ]),
            },
          },
        },
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
