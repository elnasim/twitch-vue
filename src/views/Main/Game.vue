<template>
  <router-link :to="`game/${id}`" class="game">
    <!--<img :src=getImg alt="" class="game__img">-->
    <div class="game__img" :style="`background-image: url(${getImg});`"></div>
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
    display: block;
    margin: auto;
    margin-bottom: 20px;
    overflow: hidden;
    background-size: cover;
    background-position: center;
    &::before {
      content: '';
      padding-top: 130%;
      float: left;
    }
  }
</style>
