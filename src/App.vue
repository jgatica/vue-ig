<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Cabecera></Cabecera>
    <Lista></Lista>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Cabecera from "./components/Cabecera/Cabecera";
import Lista from "./components/Lista/Lista";
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    Cabecera,
    Lista,
    HelloWorld
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
</style>
