<script setup>
const activities = [
  {
    content: "SKY-ADMIN🌻 开启了崭新的人生！",
    timestamp: "2023-11-23 18:00:00",
    type: "primary"
  },
  {
    content: "企业级中后台管理平台",
    timestamp: "2023-11-23 18:00:00",
    type: "success"
  },
  {
    content: "四种布局方式，多种主题",
    timestamp: "2023-11-23 18:00:00",
    type: "warning"
  },
  {
    content: "ElementPlus + Vue3 + JavaScript + Pinia",
    timestamp: "2023-11-23 18:00:00",
    type: "info"
  },
  {
    content: "欢迎大家star和fork，可以自定义喜欢的布局哦🌻",
    timestamp: "2023-11-23 18:00:00",
    type: "danger"
  },
  {
    content: "欢迎大家star和fork，喜欢的可以捐献哟🌻",
    timestamp: "2023-11-23 18:00:00",
    type: "danger"
  }
];
</script>

<template>
  <el-timeline>
    <el-timeline-item v-for="(activity, index) in activities" :key="index" :type="activity.type" :timestamp="activity.timestamp">
      {{ activity.content }}
    </el-timeline-item>
  </el-timeline>
</template>

<style scoped>

</style>
