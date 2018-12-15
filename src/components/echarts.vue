<template>
  <div id="myCharts" :style="mapStyle"></div>
</template>

<script>
//按需引入
let echarts = require("echarts/lib/echarts");
// 引入柱状图
require("echarts/map/js/china.js");
// 引入提示框和标题组件
require("echarts/lib/component/tooltip");
require("echarts/lib/component/title");
export default {
  props: ["mapStyle"],
  data() {
    return {};
  },
  methods: {
    drawLine() {
      //初始化echarts实例
      let myCharts = echarts.init(document.getElementById("myCharts"), "dark");

      //绘制图表
      myCharts.setOption({
        tooltip: {
          confine: true, //确定tooltip提示框是否限制在父窗体中,默认false.
          show: true, //是否显示tooltip  true/false
          trigger: "item",
          formatter: "{a}"
        },
        visualMap: {
          //左侧小柱子的配置
          min: 0, // 最小值
          max: 50, //最大值
          left: "left", // 定位左边
          top: "bottom", // 定位底部
          text: ["高", "低"], // 上下两个文字
          seriesIndex: [1],
          inRange: {
            // color: ["#e0ffff", "#006edd"] // 深浅颜色
            color: ["yellow", "orangered"]
          },
          calculable: true // 显示与否
        },
        geo: {
          // 这个是重点配置区
          map: "china", // 表示中国地图
          roam: true,
          label: {
            normal: {
              show: true, // 是否显示对应地名
              textStyle: {
                color: "rgba(0,0,0,0.4)"
              }
            }
          },
          itemStyle: {
            normal: {
              label: { show: true },
              areaStyle: { color: "green" }, //设置地图背景色的颜色设置
              borderColor: "rgba(0, 0, 0, 0.2)"
            },
            emphasis: {
              areaColor: null,
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              shadowBlur: 20,
              borderWidth: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)"
            }
          }
        },
        series: [
          {
            type: "scatter",
            coordinateSystem: "geo" // 对应上方配置
          },
          {
            name: "启动次数", // 浮动框的标题
            type: "map",
            geoIndex: 0,
            data: [{ name: "北京", value: 20 }, { name: "山东", value: 40 }] // 这里就是数据，即数组可以单独放在外面也可以直接写
          }
        ]
      });
    }
  },
  mounted() {
    this.drawLine(); //初始化在mounted中
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