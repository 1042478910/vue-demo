<template>
  <div id="app">
    <div class="main">
      <pagea :pieStyle="pieStyle"/>
      <pageb :barStyle="barStyle"/>
      <echart :mapStyle="mapStyle"/>
    </div>
  </div>
</template>

<script>
// import vuexx from './components/vuex.vue'
import pagea from "./components/a.vue"; 
import pageb from "./components/b.vue";
import echart from "./components/echarts";

export default {
  name: "app",
  components: {
    pagea,
    pageb,
    echart
  },
  data() {
    return {
      pieStyle: {height: "400px" },
      barStyle: {height: "400px"},
      mapStyle: {height: "400px" }
    };
  }
};
</script>

<style>

#app {
  margin: auto;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.main{
  /* display: grid;
  grid-template-columns: 1fr 1fr 1fr; */
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1200PX;
  margin: 0 auto;
}
.main div{
  flex:1;
}
</style>
