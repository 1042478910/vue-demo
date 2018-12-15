<template>
  <div id="myPie" class="myChars" :style="pieStyle"></div>
</template>

<script>
//按需引入
let echarts = require("echarts/lib/echarts");
// 引入饼图
require("echarts/lib/chart/pie");
// 引入提示框和标题组件
require("echarts/lib/component/tooltip");
require("echarts/lib/component/title");
export default {
  props: ["pieStyle"],
  data() {
    return {};
  },
  methods: {
    drawPie() {
      let myPie = echarts.init(document.getElementById("myPie"), "vintage");
      myPie.setOption({
        top: "middle",
        left: "center",
        // backgroundColor: "#2c343c",
        title: {
          text: "技能分布图",
          left: "center",
          top: "0",
          textStyle: {
            color: "#fff"
          }
        },
        legend: {
          x: "center",
          y: "bottom",
          textStyle: {
            color: "#fff"
          },
          data: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "jQuery",
            "微信小程序",
            "Vue",
            "其他"
          ]
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        toolbox: {
          show: false, //是否显示工具栏
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            magicType: {
              show: true,
              type: ["pie", "funnel"]
            },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        calculable: true,
        series: {
          name: "技能分布",
          roseType: "angle", //显示成南丁格尔图
          type: "pie",
          radius: "55%",
          data: [
            { value: 10, name: "HTML5" },
            { value: 17, name: "CSS3" },
            { value: 30, name: "JavaScript" },
            { value: 20, name: "jQuery" },
            { value: 5, name: "微信小程序" },
            { value: 30, name: "Vue" },
            { value: 3, name: "其他" }
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
</style>