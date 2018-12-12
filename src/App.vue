<template>

  <div id="app">
    <header>
      <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <router-link class="navbar-brand" :to="{ name: 'contact-list' }">Contacts</router-link>
        <!-- <a class="navbar-brand">Contacts</a> -->
      </nav>
    </header>

    <main class="container">
      <router-view />
    </main>

    <footer class="footer">
      <div class="container">
        Created by Biljana Carica 2018
      </div>
    </footer>
  </div>
</template>

<script>

export default {
  name: 'app',

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 60px;
    line-height: 60px;
    background-color: #f5f5f5;
}
</style>
