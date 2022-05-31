<template>
   <div class="container nav nav-tabs justify-content-center">
 <nav class="navbar navbar-expand navbar-light">
  
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item">
        <router-link class="nav-link h4" to="/">Zoznam aktuálnych zamestnancov</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link h4" to="/archivovany">Zoznam predošlých zamestnancov</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link h4" to="/Pozicie">Zoznam pozícií vo firme</router-link>
      </li>
     
    </ul>
  </div>
</nav>
</div><router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
