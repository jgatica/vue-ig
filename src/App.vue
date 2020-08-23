<template>
  <div id="app" class="container">
    <img alt="Vue logo" src="./assets/logo.png">
    <Cabecera></Cabecera>
    <Lista></Lista>
  </div>
</template>

<script>
import Cabecera from "./components/Cabecera/Cabecera";
import Lista from "./components/Lista/Lista";

export default {
  name: 'App',
  components: {
    Cabecera,
    Lista
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
