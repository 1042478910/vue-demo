<template>
  <div id="app">
    <div class="main">
      <self/>
      <pagea :pieStyle="pieStyle"/>
      <echart :mapStyle="mapStyle"/>
    </div>
    <div class="main">
      <pageb :barStyle="barStyle"/>
      <intruc/>
      <skill/>
      <want/>
    </div>
  </div>
</template>

<script>
// import vuexx from './components/vuex.vue'
import self from "./components/self.vue";
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
    echart,
    intruc,
    skill,
    want
  },
  data() {
    return {
      pieStyle: { height: "400px" },
      barStyle: { height: "400px" },
      mapStyle: { height: "400px" }
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
  margin-top: 60px;
}
.main {
  /* display: grid;
  grid-template-columns: 1fr 1fr 1fr; */
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1200px;
  margin: 0 auto;
}
.main div {
  flex: 1;
}
@media scroll and (min-width: 700px) {
  .main {
    background-color: red;
    flex-direction: columns;
  }
}
@media scroll and (min-width: 800px) and (max-width: 1000px) {
  .main {
    background-color: blue;
  }
}
</style>
