<template>
    <div style="width:250px; margin:5px auto;">
        <div style="display:flex; justify-content:space-between">
            <span :class="{completed :MenuItem.completed}" @click="toggleToDoStatus(MenuItem)">{{MenuItem.title}}</span>
            <!-- <button @click="deleteItem">Delete Item</button> -->
            <!-- if we are use mapActions, we have to pass parameters also-->
            <button @click="deleteItem(MenuItem)">Delete Item</button>
        </div>
    </div>
</template>
<script>
import { mapActions } from 'vuex';
export default {
    name:"MenuItem",
    props:["MenuItem"],
    //for rendering the actions from the storejs,
    //We can use mapActions from vuex
    methods: {
        // deleteItem() {
        //     this.$store.dispatch('deleteItem',this.MenuItem)
        // },
        // toggleToDoStatus(){
        //     this.$store.dispatch('toggleToDoStatus', this.MenuItem)
        // }
        ...mapActions({
            deleteItem : "deleteItem",
            toggleToDoStatus: "toggleToDoStatus"
        })
    }
}
</script>

<style scoped>
.completed {
    text-decoration: line-through;
}
</style>