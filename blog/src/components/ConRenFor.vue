<template>
    <div>
        <h1>Conditional Rendering For</h1>
        <h2>For loop in vuejs</h2>
        <table border="1px">
            <tr>
                <td>Id</td>
                <td>Name</td>
                <td>Email</td>
            </tr>
            <tr v-for="user in users" :key="user.id">
                 <td>{{user.id}}</td>
                <td>{{user.name}}</td>
                <td>{{user.email}}</td>
            </tr>
        </table>
    </div>
</template>
<script>
export default {
    name : 'ConRenFor',
    data(){
        //users object is taken -->>just an example
        return {
            users:[
                {id:1,name:'Aashish',email:"ab54@gmail.com"},
                {id:2,name:'Sameer',email:"ab94@gmail.com"},
                {id:3,name:'Rishabh',email:"ab74@gmail.com"},
                {id:4,name:'Arham',email:"ab64@gmail.com"}
            ]
        }
    }
}
</script>