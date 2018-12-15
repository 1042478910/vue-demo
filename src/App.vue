<template>
  <div id="app">
    <banner></banner>
    <div class="main">
      <self/>
      <pagea :pieStyle="pieStyle"/>
      <echart :mapStyle="mapStyle"/>
    </div>
     <intruc/>
    <div class="main">
      <pageb :barStyle="barStyle"/>
      <skill/>
      <want/>
    </div>
  </div>
</template>

<script>
// import vuexx from './components/vuex.vue'
import self from "./components/self.vue";
import banner from "./components/banner.vue";
import pagea from "./components/a.vue";
import pageb from "./components/b.vue";
import intruc from "./components/intruc.vue";
import echart from "./components/echarts.vue";
import skill from "./components/skill.vue";
import want from "./components/want.vue";

export default {
  name: "app",
  components: {
    self,
    pagea,
    pageb,
    banner,
    echart,
    intruc,
    skill,
    want
  },
  data() {
    return {
      pieStyle: { height: "100%" },
      barStyle: { height: "100%" },
      mapStyle: { height: "100%" }
    };
  }
};
</script>

<style>
@import "./assets/css/reset.css";
@import "./assets/css/index.css";
#app {
  margin: auto;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60PX; */
}
.main {
  /* display: grid;
  grid-template-columns: 1fr 1fr 1fr; */
  display: flex;
  align-items: center;
  justify-content: center;
  /* width: 1200PX; */
  height: 500PX;
  margin: 20PX auto;
  
}
.main div {
  flex: 1;
}

@media screen and (max-width: 1200px) {
  .main {
    width: 1000px;
  }
}
</style>
