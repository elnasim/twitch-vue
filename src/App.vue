<template>
  <div id="app">
    <div class="app">
      <Header/>
      <div class="app-body">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header'

  export default {
    components: { Header },
  }
</script>

<style lang="scss">
  @import "assets/style";

  .app {
    min-height: 100vh;
  }

  .app-body {
    flex: 1;
    background-color: #181c20;
    padding: 30px 0;
  }
</style>
