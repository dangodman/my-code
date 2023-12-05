<template>
  <div class="container">
    <div class="nav">
      <div class="time">{{ localTime }}</div>
      <div class="city">切换城市</div>
    </div>
    <div class="city-info">
      <div class="city-name">{{ cityName }}</div>
      <p class="weather">{{ res.weather }}</p>
      <h2 class="temp">
        <em>{{ res.temperature }}</em> ℃
      </h2>
      <div class="detail">
        <span>风力: {{ res.windPower }}级</span> |
        <span>风向: {{ res.windDirection }}</span> |
        <span>空气湿度: {{ res.humidity }}%</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import AMapLoader from '@amap/amap-jsapi-loader';
const localTime = ref('')
const cityName = ref('')
const res = ref({})
onMounted(() => {
  setInterval(() => {
    localTime.value = new Date().toLocaleTimeString()
  }, 1000)
})
window._AMapSecurityConfig = {
  securityJsCode: "287fce75785e5a98573d0cab404fcd1c",
};
onMounted(() => {
  AMapLoader.load({
    key: "1b3b24391d8e044ce7bebf1de882d244", // 申请好的Web端开发者Key，首次调用 load 时必填
    version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
    plugins: ['AMap.CitySearch'], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
  })
    .then((AMap) => {
      AMap.plugin('AMap.CitySearch', function () {
        var citySearch = new AMap.CitySearch()
        citySearch.getLocalCity(function (status, result) {
          if (status === 'complete' && result.info === 'OK') {
            // 查询成功，result即为当前所在城市信息
            cityName.value = result.city
            //加载天气查询插件
            AMap.plugin('AMap.Weather', function () {
              //创建天气查询实例
              var weather = new AMap.Weather();

              //执行实时天气信息查询
              weather.getLive(cityName.value, function (err, data) {
                res.value = data
              });
            });
          }
        })
      })
    })
    .catch((e) => {
      console.log(e);
    });
})
</script>

<style lang="css" scoped>
.container {
  min-height: 100vh;
  background-color: #000;
  opacity: 0.6;
  color: #fff;
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}

.city-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.temp {
  font-size: 26px;
}

.temp em {
  font-style: normal;
  font-size: 34px;
}
</style>