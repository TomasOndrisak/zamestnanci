<template>

   <div class="container nav nav justify-content-center">
 <nav class="navbar navbar-expand navbar">
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
</div>
<router-view/>

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
  color: #92a0af;
}

nav a.router-link-exact-active {
  color: #000000;
  font-weight: bolder;
}
</style>
