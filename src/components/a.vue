<template>
  <div id="myPie" :style="pieStyle"></div>
</template>

<script>
//按需引入
let echarts = require("echarts/lib/echarts");
// 引入柱状图
require("echarts/lib/chart/pie");
// 引入提示框和标题组件
require("echarts/lib/component/tooltip");
require("echarts/lib/component/title");
export default {
  props: ["pieStyle"],
  data() {
    return {
    
    };
  },
  methods: {
    drawPie() {
      let myPie = echarts.init(document.getElementById("myPie"), "vintage");
      myPie.setOption({
        backgroundColor: "#2c343c",
        legend: {
          x: "center",
          y: "bottom",
          data: ["视频广告", "联盟广告", "邮件营销", "直接访问", "搜索引擎"]
        },
        series: {
          roseType: "angle", //显示成南丁格尔图
          type: "pie",
          radius: "55%",
          data: [
            { value: 235, name: "视频广告" },
            { value: 274, name: "联盟广告" },
            { value: 310, name: "邮件营销" },
            { value: 335, name: "直接访问" },
            { value: 400, name: "搜索引擎" }
          ],
          label: {
            textStyle: {
              color: "rgba(255, 255, 255, 0.3)"
            }
          },
          labelLine: {
            lineStyle: {
              color: "rgba(255, 255, 255, 0.3)"
            }
          }
        }
      });
    }
  },
  mounted() {
    this.drawPie();
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
.pieStyle {
  width: 90%;
  margin: 0 auto;
}
</style>