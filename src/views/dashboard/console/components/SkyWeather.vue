<script setup lang="ts">
const insertWeather = () => {
  window.WIDGET = {
    "CONFIG": {
      "layout": "2",
      "width": 230,
      "height": 270,
      "background": "2",
      "dataColor": "000000",
      "borderRadius": "5",
      "key": "632bf35b75f643fda4f7154697df9f47"
    }
  }
  const script = document.createElement('script');
  script.src = 'https://widget.qweather.net/standard/static/js/he-standard-common.js?v=2.0';
  document.body.appendChild(script);
};
onMounted(() => {
  insertWeather();
});
</script>

<template>
  <el-card class="weather" shadow="hover">
    <template #header>
      <span class="header">
        <img src="@/assets/images/dashboard/console/weather.svg" alt=""/>
        <span class="ml-2">今日天气</span>
      </span>
    </template>
    <div id="he-plugin-standard"></div>
  </el-card>
</template>

<style scoped lang="scss">
.weather {
  height: 350px;

  .header {
    display: flex;
    align-items: center;

    img {
      width: 30px;
      height: 30px;
    }

  }

  //  /deep/ #he-plugin-standard {
  //    width: 100% !important;
  //    background-color: var(--background-color) !important;
  //
  //    span,
  //    a {
  //      color: var(--text-color) !important;
  //    }
  //  }
}
</style>
