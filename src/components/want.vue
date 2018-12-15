<template>
  <div class="job">
    <common :title="title" :list="list"/>
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
      title: "求职意向",
      list: [
        {
          subTitle: "期望职位：",
          skill: "前端工程师"
        },
        {
          subTitle: "工作技能：",
          skill: "vue"
        },
        {
          subTitle: "目标城市：",
          skill: "北京"
        },
        {
          subTitle: "期望薪资",
          skill: "15K-17K"
        },
        {
          subTitle: "入职时间",
          skill: "随时入职"
        }
      ]
    };
  }
};
</script>
<style scoped>
</style>

