<template>
  <div id="app">
    <div class="header">

      <nav>
        <ul>
          <li><router-link to="/">Home</router-link>></li>
          <li><router-link to="/js">Joseph Smith</router-link></li>
          <li><router-link to="/accounts">Accounts</router-link></li>
          <li><router-link to="/art">Quotes</router-link></li>
        </ul>
      </nav>
    </div>

    <div class="content">
      <router-view/>
    </div>

    <div class="footer">
      <ul>
        <li class="github"><a href="https://github.com/stephennnnn/260_Creative_Project_First_Vision">Find Me On GitHub</a></li>
      </ul>
    </div>

  </div>
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

}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

li {
  float: left;
}

.footer {
  display: flex;
  justify-content: center;
  backGround-color: #333;
}

.github {

}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover {
  background-color: #111;
}
</style>
