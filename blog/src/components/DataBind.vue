<template>
    <div>
        <h1>Bind</h1>
        <h1 style="white-space:pre-line">{{message}}</h1> <!-- for next line inclusion-->
        <!-- <input type="text" v-model="message" >   1 way data binding -->
        <!--  for next line input, use textarea-->
        <textarea type="text" v-model="message" />
    </div>
</template>
<script>
export default {
    name: "DataBind",
    data() {  // defining property
    return {
        message : "Hi"
    }
    }
}
</script>