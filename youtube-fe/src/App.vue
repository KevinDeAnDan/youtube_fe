<template>
  <div id="app">
    <Header id="header"></Header>
    <div id="main">
      <div>
        <Sidebar id="sidebar"></Sidebar>
      </div>
      <div>
        <router-view/>
      </div>
    </div>
    
  </div>
</template>

<script>
import Header from './components/layouts/Header.vue'
import Sidebar from './components/layouts/Sidebar.vue'

export default {
  components: {
    Header,
    Sidebar,
  }
}
</script>

<style>
#app {
  background-color: #181818;
}
html {
  font-family: 'Roboto', sans-serif;
}
#main {
  display: inline-flex;
}
#header {
  position: fixed;
  width: 100%;
}
</style>
