<template>
  <div class="job">
    <common :title="title" :list="list"/>
    <section>
      <div>
        <span>工作内容：</span>
        <span>{{jobContent}}</span>
      </div>
      <div>项目成就：</div>
      <ul>
        <li v-for=" (item, index) in achievement" :key="index">{{index+1}}、{{item}}</li>
      </ul>
    </section>
  </div>
</template>
<script>
import common from "@/components/common.vue";
export default {
  components: {
    common
  },
  data() {
    return {
      title: "工作经历",
      list: [
        {
          subTitle: "北京***科技有限公司",
          skill: "2016/10-2018/12"
        }
      ],
      jobContent:
        "日常操作 jQuery 编写活动页、微信小程序、Vue + ECharts 报表制作……",
      achievement: [
        "企业宝小程序。使用原生代码进行微信小程序的开发，代码已完成，尚在审核，尚未上线。",
        " ECharts 报表汇总。使用 Vue + ECharts 进行报表设计，正在开发。",
        "jQuery 活动页及 H5 活动页。"
      ]
    };
  }
};
</script>
<style scoped>
</style>

