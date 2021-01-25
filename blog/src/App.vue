<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <Home /> -->
    <!-- <Home data="Aashish is here" msg="Hi from Aashish"/> -->
    <!--<ConditionalRenderingIf /> -->
    <!-- <ConRenFor /> -->
    <!-- <Home1 /> -->
    <TempComp />
    <class-n-style />
  </div>
</template>

<script>
//import ClassNStyle from './components/ClassNStyle.vue'
//import HelloWorld from './components/HelloWorld.vue'
//import Home from './components/Home.vue'
//import ConditionalRenderingIf from './components/ConditionalRenderingIf.vue'
//import ConRenFor from './components/ConRenFor.vue'
//import Home1 from './components/Home1.vue'
//import TempComp from './components/TempComp.vue'
import ClassNStyle from './components/ClassNStyle.vue'


export default {
  name: 'App',
  components: {
  //  HelloWorld,
  //  Home
  //ConditionalRenderingIf
  //ConRenFor
  //Home1
  //TempComp
    ClassNStyle
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
