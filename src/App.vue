<template>
  <div id="app">
    <div class="header">
      <Header />
    </div>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Header from "./components/page-assets/Header";

  export default {
    name: "App",
    components: {
      Header,
    },
  };
</script>

<style>
  #app {
    height: 100vh;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: black;
    padding-top: 10px;
    background: rgb(138, 138, 138);
    background: linear-gradient(90deg, rgba(138, 138, 138, 1) 0%, rgba(236, 240, 241, 1) 100%);
  }
  h1 {
    font-size: 2.6rem;
    font-weight: 700;
  }
  h2 {
    font-size: 2rem;
    font-weight: 600;
  }
  .header {
    height: 15%;
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
  .main {
    height: 85%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
</style>
