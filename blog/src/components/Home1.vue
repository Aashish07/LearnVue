<!-- Having advance components info-->
<template>
    <div>
        <h1>Home Component</h1>
        <Users />
        <Products />
        <Products />
    </div>
</template>
<script>
import Users from './Users.vue'
import Products from './Products.vue'
export default {
    name : "Home1",
    components:{
        Users,
        Products
    }
}
</script>

<style scoped>
    div{
        background-color: #c2c1ce;
        height: 800px;
    }
</style>