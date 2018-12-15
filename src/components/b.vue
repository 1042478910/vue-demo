<template>
  <div id="myBar" class="myChars" :style="barStyle">}</div>
</template>

<script>
//按需引入
let echarts = require("echarts/lib/echarts");
// 引入柱状图
require("echarts/lib/chart/bar");
// 引入提示框和标题组件
require("echarts/lib/component/tooltip");
require("echarts/lib/component/title");
export default {
  props: ["barStyle"],
  data() {
    return {};
  },
  methods: {
    drawBar() {
      let myBar = echarts.init(document.getElementById("myBar"), "");

      //绘制图表
      myBar.setOption({
        top: "middle",
        left: "center",
        title: {
          text: "在vue中使用Echarts",
          textStyle: {
            color: "#fff"
          },
          left: "center",
          top: "0"
        },
        tooltip: {},
        xAxis: {
          axisLabel: {
            color: "#fff"
          },
          data: ["衬衫", "羊毛衫", "袜子", "雪纺衫", "裤子"]
        },
        yAxis: {
          axisLabel: {
            color: "#fff"
          }
        },
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 15, 50, 30]
          }
        ]
      });
    }
  },
  mounted() {
    this.drawBar();
  }
};
</script>

<style scoped>
</style>