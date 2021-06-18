<template>
  <div id="app">
    <div id="nav">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <router-link class="navbar-brand" to="/">Essensplan</router-link>
        <div class="" id="navbarNav">
          <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/manage">⚙</router-link>
          </li>
      </ul>  
    </div>
  </nav>
  </div>
    <router-view/>
  </div>
  
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

$primary-color: #007bff;
$second-color: #343a40;

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $second-color;
}


#nav a {
  font-weight: bold;
  color: $second-color;
  margin-right: 15px;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: $primary-color;
}
</style>
