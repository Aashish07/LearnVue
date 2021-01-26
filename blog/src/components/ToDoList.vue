<template>
    <div>
        <todo v-for="(todo, index) in todos" :key="index" :todo="todo"/>
    </div>
</template>

<script>
import Todo from './Todo';

export default {
    name:"ToDoList",
    components:{
        Todo
    },
    computed : {
        todos() {
            return this.$store.state.todos;
        }
    }
}
</script>