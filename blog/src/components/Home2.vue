<!-- Home using for routing example
-->
<template>
    <div>
        <h1>Home Page</h1>
        <p><router-link to="user/1">Aashish</router-link></p>
         <p><router-link to="user/2">Akash</router-link></p>
          <p><router-link to="user/3">Vaibhav</router-link></p>
           <p><router-link to="user/4">Tushar</router-link></p>
    </div>
</template>
<script>
export default {
    name: "Home2"
}
</script>