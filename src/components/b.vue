<template>
  <div id="myBar" :style="barStyle">{{msg}}</div>
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
    return {

    };
  },
  methods: {
    drawBar() {
      let myBar = echarts.init(document.getElementById("myBar"), "dark");

      //绘制图表
      myBar.setOption({
        title: {
          text: "在vue 中使用Echarts",
          left: "center",
          top: "0"
        },
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "袜子", "雪纺衫", "裤子"]
        },
        yAxis: {},
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
#zn {
  height: 300px;
  width: 200px;

  border: 80px solid transparent;
  /* border-image: url("../assets/border.png") 30 30 stretch; */
  background: pink;
}
</style>