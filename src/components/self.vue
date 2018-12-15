<template>
  <div class="job ">
    <div>
      <h3 class="photo">
        <img src="../assets/img/6b6a584c510fd9f9e0a53696252dd42a2934a435.jpg" alt>
      </h3>
      <div class="selfInfo" v-for="(item, index) in list" :key="index">
        <span class="sub-title">{{item.subTitle}}</span>
        <span class="textIn" :class="item.class">{{item.skill}}</span>
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
  width: 80PX;
  height: 80PX;
  margin: 0 auto;
  margin-bottom: 20px;
}
.photo img {
  width: 100%;
  height: 100%;
}
.selfInfo{
  font-size: 16PX;
}
.textIn{
 padding-left:5px;

}
.cf {
  color: #00bfff;
}
</style>

