<template>
  <div class="main-page">

    <Loading v-if="loading"/>

    <div v-else class="main-page-col" v-for="item in data" :key="item.id">
      <Game
              :img=item.box_art_url
              :id=item.id
      />
    </div>

  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex'
  import Game from './Game'
  import Loading from '../../components/Loading'

  export default {
    name: 'index',
    components: { Loading, Game },
    methods: {
      ...mapActions(['getData']),
    },
    computed: {
      ...mapState(['data', 'loading']),
    },
    created () {
      this.getData('https://api.twitch.tv/helix/games/top')
    },
  }
</script>

<style scoped lang="scss">
  .main-page {
    display: flex;
    flex-wrap: wrap;
  }

  .main-page-col {
    width: 20%;
    padding: 0 10px;
    @media (max-width: 1200px) {
      width: 50%;
    }
    @media (max-width: 768px) {
      width: 100%;
    }
  }
</style>
