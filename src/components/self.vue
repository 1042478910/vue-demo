<template>
  <div class="job">
    <div>
      <h3 class="photo">
        <img src alt>
      </h3>
      <div v-for="(item, index) in list" :key="index">
        <span class="sub-title">{{item.subTitle}}</span>
        <span :class="item.class">{{item.skill}}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        {
          subTitle: "姓名：",
          skill: "周云",
          class: ""
        },
        {
          subTitle: "学历：",
          skill: "本科",
          class: ""
        },
        {
          subTitle: "工作年限：",
          skill: "2年半",
          class: ""
        },
        {
          subTitle: "年龄：",
          skill: "25",
          class: ""
        },
        {
          subTitle: "联系电话：",
          skill: "18210662212",
          class: ""
        },
        {
          subTitle: "电子邮箱：",
          skill: "xiaoxiaoyun1113@163.com",
          class: "cf"
        },
        {
          subTitle: "简书：",
          skill: "vicky丶筱妘",
          class: "cf"
        },
        {
          subTitle: "网站：",
          skill: "http://www.vickyamor.cn",
          class: "cf"
        }
      ]
    };
  }
};
</script>
<style scoped>
.photo {
  width: 50px;
  height: 70px;
  margin: 0 auto;
}
.photo img {
  width: 100%;
  height: 100%;
}
.cf {
  color: #00bfff;
}
</style>

