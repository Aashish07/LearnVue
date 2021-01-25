<template>
    <div>  <!--1. Outline 2.Inline -->
        <h1 class="classStyle">Class and Style Bindings</h1>
        <h1 v-bind:style="{color:blue}">Class and Style Bindings</h1>
        <h1 v-bind:class="{display:show}">class Binding with objects</h1>
    </div>
</template>

<script>
export default {
    name: "ClassNStyle",
    data(){
        //It returns the properties
        return {
            show:false
        }
    }
}
</script>

<style scoped>
.classStyle{
    color:orange
}
.display{
    background-color: brown
}
</style>