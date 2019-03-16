<template>
  <router-link :to="`/stream/${id}`" class="stream" :title=title>
    <img :src=getImg class="stream__preview">
    <div class="stream__desc">
      <div class="stream__title">{{title}}</div>
      <div class="stream__channel-name">{{userName}}</div>
      <div class="stream__online">{{online}}</div>
    </div>
  </router-link>
</template>

<script>
  export default {
    name: 'Stream',
    props: ['img', 'title', 'userName', 'online', 'id'],
    computed: {
      getImg () {
        return this.img.slice(0, -20) + '320x180.jpg'
      },
    },
  }
</script>

<style scoped lang="scss">
  .stream {
    background-color: #23272b;
    margin-bottom: 20px;
    border-radius: 2px;
    display: block;
    text-decoration: none;
  }

  .stream__preview {
    width: 100%;
  }

  .stream__desc {
    padding: 0 10px;
  }

  .stream__title {
    color: rgba(#fff, .8);
    overflow: hidden;
    white-space: nowrap;
  }

  .stream__channel-name {
    color: rgba(#fff, .8);
    overflow: hidden;
    white-space: nowrap;
  }

  .stream__online {
    color: rgba(#fff, .8);
    position: relative;
    padding-left: 14px;
    &::before {
      content: '';
      position: absolute;
      width: 10px;
      height: 10px;
      background-color: red;
      border-radius: 100%;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
    }
  }
</style>
