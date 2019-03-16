<template>
  <div id="app">
    <div class="app">
      <Sidebar/>
      <div class="app-body">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
  import Sidebar from './components/Sidebar'

  export default {
    components: { Sidebar },
  }
</script>

<style lang="scss">
  @import "assets/style";

  .app {
    display: flex;
    min-height: 100vh;
  }

  .app-body{
    flex: 1;
    background-color: #181c20;
    padding: 30px 0;
  }
</style>
