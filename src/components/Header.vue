<template>
  <div class="sidebar">
    <router-link to="/" class="sidebar__link">Игры</router-link>
    <router-link to="/topstreams" class="sidebar__link">Топ стримы</router-link>
  </div>
</template>

<script>
  export default {
    name: 'Header',
  }
</script>

<style scoped lang="scss">

  .sidebar {
    background-color: #1a1e21;
    display: flex;
  }

  .sidebar__link {
    color: #ffffff;
    text-decoration: none;
    display: block;
    text-align: center;
    padding: 10px;
    flex: 1;
    &.router-link-exact-active {
      background-color: #56783c;
    }
  }

</style>
