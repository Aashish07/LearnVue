<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <h1>My ToDo List</h1>
    <h3>Completed: {{ completedItems }}</h3>
    <h3>Pending:  {{ pendingItems }}</h3>
    <to-do-menu />
    <item-form />
  </div>
</template>

<script>
import { mapGetters } from "vuex"
import ItemForm from './components/ItemForm.vue'
import ToDoMenu from './components/ToDoMenu.vue'


export default {
  name: 'App',
  components: {
    ToDoMenu,
    ItemForm
  },
  //we can also use mapGetters to get the getters value from storejs
  computed:{
    // completedItems(){
    //   return this.$store.getters.completedItems;
    // },
    // pendingItems(){
    //   return this.$store.getters.pendingItems;
    // }
    ...mapGetters({
      completedItems: "completedItems",
      pendingItems: "pendingItems"
    })
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
