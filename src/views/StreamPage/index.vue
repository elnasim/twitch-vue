<template>
  <div>
    <Loading v-if="loading"/>
    <div v-else class="stream-page">

      <div class="stream-page__video-wrap">
        <div class="stream-page__video">
          <iframe
                  :src="'https://player.twitch.tv/?channel=' + data[0].user_name"
                  height="500px"
                  width="100%"
                  frameborder="0"
                  scrolling="no"
                  allowfullscreen="true">
          </iframe>
        </div>
        <div class="stream-page__desc">
          <div class="stream-page__title">{{data[0].title}}</div>
        </div>
      </div>

      <div class="stream-page__chat">
        <iframe frameborder="0"
                scrolling="yes"
                src="https://www.twitch.tv/embed/DreamHackDota2_RU/chat"
                height="100%"
                width="100%">
        </iframe>
      </div>

    </div>
  </div>

</template>

<script>
  import { mapActions, mapState } from 'vuex'
  import Loading from '../../components/Loading'

  export default {
    name: 'index',
    components: { Loading },
    methods: {
      ...mapActions(['getData']),
    },
    computed: {
      ...mapState(['data', 'loading']),

      getID () {
        return this.$route.params.id
      },
    },
    created () {
      this.getData(`https://api.twitch.tv/helix/streams?user_id=${this.getID}`)
    },
  }
</script>

<style scoped lang="scss">

  .stream-page {
    display: flex;
  }

  .stream-page__video-wrap {
    background-color: #23272b;
    flex: 1;
  }

  .stream-page__chat {
    width: 350px;
    min-height: 500px;
  }

  .stream-page__video {
    min-height: 500px;
    background-color: #040404;
  }

  .stream-page__desc {
    padding: 10px;
  }

  .stream-page__title {
    color: rgba(#fff, .8);
  }

</style>
