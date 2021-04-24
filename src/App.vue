<template>
  <router-link :to="{name : 'EventList'}">Event  </router-link> |
  <router-link :to="{name : 'About'}">About</router-link>
  <br>
  <br>
<router-view></router-view>
</template>

<script>


export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h4{
  font-size: 20px;
}
</style>
