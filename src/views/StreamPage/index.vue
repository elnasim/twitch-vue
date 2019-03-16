<template>
  <div>
    <Loading v-if="loading"/>
    <div v-else class="stream-page">

      <div class="stream-page__video-wrap">
        <div class="stream-page__desc">
          <div class="stream-page__title">{{data[0].title}}</div>
          <div class="stream-page__title">{{data[0].user_name}}</div>
          <div class="stream-page__online">{{data[0].viewer_count}}</div>
        </div>
        <div class="stream-page__video">
          <iframe
                  :src="'https://player.twitch.tv/?channel=' + data[0].user_name"
                  width="100%"
                  frameborder="0"
                  scrolling="no"
                  allowfullscreen="true">
          </iframe>
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
    flex-wrap: wrap;
  }

  .stream-page__video-wrap {
    background-color: #23272b;
    flex: 1;
  }

  .stream-page__chat {
    width: 350px;
    @media (max-width: 991px) {
      width: 100%;
      height: 500px;
    }
  }

  .stream-page__video {
    background-color: #040404;
    iframe {
      height: 500px;
      @media (max-width: 991px) {
        height: 300px;
      }
    }
  }

  .stream-page__desc {
    padding: 10px;
  }

  .stream-page__title {
    color: rgba(#fff, .8);
  }

  .stream-page__online {
    position: relative;
    padding-left: 14px;
    color: #ffffff;
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 10px;
      height: 10px;
      background-color: red;
      border-radius: 100%;
    }
  }

</style>
