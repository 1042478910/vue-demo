<template>
  <div>
    <h3 class="title">{{title}}</h3>
    <div v-for="(item, index) in list" :key="index">
      <span class="sub-title">{{item.subTitle}}</span>
      <span>{{item.skill}}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: ["title", "list"]
};
</script>

<style scoped>
.title {
  font-size: 18PX;
  text-align: center;
}

.sub-title {
  padding-right: 10PX;
  font-size: 20PX;
  color: #00bfff;
}
</style>
