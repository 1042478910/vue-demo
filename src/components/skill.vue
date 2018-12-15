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
      title: "编程技能",
      list: [
        {
          subTitle: "前端：",
          skill: "HTML/HTML5、CSS/CSS3、JS/ES6、jQuery、Vue、微信小程序……"
        },
        {
          subTitle: "后端：",
          skill: "Node、PHP"
        },
        {
          subTitle: "其他：",
          skill: "MongoDB、MySQL、Sqlserver"
        }
      ]
    };
  }
};
</script>
<style scoped>
</style>

