<template>
    <div>
        <input type="text" v-model="newMenuItem"/>
        <button @click="addNewItem()">Submit</button>
    </div>
</template>
<script>
export default {
    name:"ItemForm",
    data(){
       return { newMenuItem: ""}
    },
    methods:{
        addNewItem(){
            this.$store.dispatch("addNewItem", this.newMenuItem);
            this.newMenuItem = "";
        }
    }
}
</script>