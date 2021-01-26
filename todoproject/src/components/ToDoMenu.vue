<template>
    <div>
        <MenuItem v-for="(item,index) in items" :key="index" :MenuItem="item"/>
    </div>
</template>
<script>
import { mapState } from "vuex";
import MenuItem from './MenuItem.vue'

export default {
    name: "ToDoMenu",
    components: { 
        MenuItem 
    },
    //here we have used a computed property to fetch the computed items
    //here instead of this , we can also use mapState from vuex
    computed: {  
        // items(){
        //     return this.$store.state.items;
        // }
        ...mapState({
            items:'items'
        })
    }
}
</script>