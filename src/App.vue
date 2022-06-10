<template>

   <div class="nav navbar-dark bg-secondary justify-content-center">
 <nav class="navbar navbar-expand navbar">
  <div id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item">
        <router-link class="nav-link" to="/">Zoznam aktuálnych zamestnancov</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/archivovany">Zoznam predošlých zamestnancov</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/Pozicie">Zoznam pozícií vo firme</router-link>
      </li>
     
    </ul>
  </div>
</nav>
</div>
<router-view/>

</template>


<style>

#app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
}

nav {
  color: rgb(0, 0, 0);
  font-size: 17px;
  
   
}
nav a {
  font-weight: bold;
}
</style>
