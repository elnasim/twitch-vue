<template>
  <router-link :to="`game/${id}`" class="game">
    <img :src=getImg alt="" class="game__img">
  </router-link>
</template>

<script>
  export default {
    name: 'Game',
    props: ['img', 'id'],
    computed: {
      getImg () {
        return this.img.slice(0, -20) + '180x220.jpg'
      },
    },
  }
</script>

<style scoped lang="scss">
  .game__img {
    width: 100%;
    height: auto;
    display: block;
    margin-bottom: 20px;
  }
</style>
