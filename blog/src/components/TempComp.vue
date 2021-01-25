<!-- Template Component-->

<template>
    <div>
        <p v-html="rowHtml"></p>
        <h1>Template Component</h1>
        <h3 v-once>{{name}}</h3>   <!-- v-once disable the change-->
        <h3>{{name}}</h3>
        <h3>{{a+b}}</h3>
        <h3>{{ok?"Yes":"No"}}</h3>
        <button v-bind:disabled="disabledBtn" v-on:click="updateText">Click-me</button>
    </div>
</template>
<script>
export default {
    name: "TempComp",
    data(){  //For making properties we use "data"
        return {
            name : 'Aashish',
            a:10,
            b:20,
            ok:true,
            rowHtml:"<h1>This is it</h1>",
            disabledBtn :false
        }
    },
    methods:{
        updateText(){
            this.name = "Peter"
        }
    }
}
</script>