<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Home />
    <Home data="Aashish is here" msg="Hi from Aashish"/>
    <ConditionalRenderingIf />
    <ConRenFor />
    <Home1 />
     <TempComp />
    <class-n-style /> 
    <data-bind />
    <child v-bind:users="users"/> -->
  <!-- Common for all routing pages -->
    <nav>
      <ul>
        <li>
          <router-link to="/">Home</router-link>  
        </li>
        <li>
          <router-link to="/About">About</router-link>  
        </li>
        <li>
          <router-link to="/settings">Settings</router-link>  
        </li>
      </ul>
    </nav>
    <router-view></router-view>

  </div>
</template>

<script>
//import About from './components/About.vue'
// import Child from './components/Child.vue'
//import ClassNStyle from './components/ClassNStyle.vue'
//import HelloWorld from './components/HelloWorld.vue'
//import Home from './components/Home.vue'
//import ConditionalRenderingIf from './components/ConditionalRenderingIf.vue'
//import ConRenFor from './components/ConRenFor.vue'
//import Home1 from './components/Home1.vue'
//import TempComp from './components/TempComp.vue'
//import ClassNStyle from './components/ClassNStyle.vue'
//import DataBind from './components/DataBind.vue'


export default {
  name: 'App',
  components: {
    //About
  //  HelloWorld,
  //  Home
  //ConditionalRenderingIf
  //ConRenFor
  //Home1
  //TempComp
   // ClassNStyle,
   // DataBind,
   // Child
  },
  data(){
    return {
      // users: [
      // {name:"Sam",email:"sam@345"},
      // {name:"San",email:"sam@346"},
      // {name:"Sak",email:"sam@348"},
      // {name:"Sal",email:"sam@349"}
      // ]
      }
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
