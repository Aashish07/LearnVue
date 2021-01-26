<template>
    <div>
        <h1>User Component</h1>
        <h2>User Id is {{userId}}</h2>
    </div>
</template>
<script>
export default {
    name:'User',
    data (){
        return {
            userId : this.$route.params.id
        }
    }

}
</script>