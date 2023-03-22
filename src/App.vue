<template>
  <div>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/example">TypeScript Example</router-link> |
    <router-link to="/fallthrough">fallthrough</router-link> |
    <router-link to="/twowaybinding">Two-Way Binding</router-link> |
    <router-link to="/childtoparent">ChildtoParent</router-link> |
    <router-link to="/counterapp">CounterApp</router-link> |
    <router-link to="/notesapp">NotesApp</router-link> |
    <router-link to="/quizapp">QuizApp</router-link> |

  </nav>
  <router-view/>
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
