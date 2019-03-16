<template>
  <div>
    <Loading v-if="loading"/>

    <div v-else class="top-streams">

      <div class="top-streams-col" v-for="item in data" :key="item.id">
        <Stream
                :img=item.thumbnail_url
                :title=item.title
                :userName=item.user_name
                :online=item.viewer_count
                :id=item.user_id
        />
      </div>

    </div>
  </div>

</template>

<script>
  import Stream from './Stream'
  import { mapActions, mapState } from 'vuex'
  import Loading from '../../components/Loading'

  export default {
    name: 'index',
    components: { Loading, Stream },
    methods: {
      ...mapActions(['getData']),
    },
    computed: {
      ...mapState(['data', 'loading']),
    },
    created () {
      this.getData('https://api.twitch.tv/helix/streams')
    },
  }
</script>

<style scoped lang="scss">

  .top-streams {
    display: flex;
    flex-wrap: wrap;
  }

  .top-streams-col {
    width: 25%;
    padding: 0 10px;
  }

</style>
