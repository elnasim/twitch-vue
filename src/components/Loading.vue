<template>
  <div class="loading">
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
  </div>
</template>

<script>
  export default {
    name: 'Loading',
  }
</script>

<style scoped lang="scss">
  .loading {
    display: flex;
    width: 100%;
    justify-content: center;
  }

  /* Balls */
  div.circle {
    border-radius: 50%;
    background: #fff;
    width: 13px;
    height: 13px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-top: 200px;
  }

  /* First Ball */
  div.circle:first-child {
    animation: upload 0.8s cubic-bezier(0.39, 0.56, 0.57, 1) 0s infinite alternate-reverse;
    background-color: #4285f4;
    margin-right: 6px;
  }

  /* Second Ball */
  div.circle:nth-child(2) {
    animation: upload 1.3s cubic-bezier(0.39, 0.56, 0.57, 1) 0s infinite alternate-reverse;
    background-color: #34a853;
    margin-right: 3px;
  }

  /* Third Ball */
  div.circle:nth-child(3) {
    animation: upload 1.1s cubic-bezier(0.39, 0.56, 0.57, 1) 0s infinite alternate-reverse;
    background-color: #fbbc05;
    margin-left: 3px;
  }

  /* Fourth Ball */
  div.circle:last-child {
    animation: upload 1.45s cubic-bezier(0.39, 0.56, 0.57, 1) 0s infinite alternate-reverse;
    background-color: #ea4335;
    margin-left: 6px;
  }

  /*--- Animation Keyframes ---*/
  /*-- Page Upload --*/
  @keyframes body-opacity-change {
    from {
      opacity: 0;
      background-color: transparent;
    }
    to {
      opacity: 1;
      background-color: #1b1c2c;
    }
  }

  /*-- Balls Animation --*/
  @keyframes upload {
    from {
      transform: translateY(35px);
    }
    to {
      transform: translateY(-35px);
    }
  }
</style>
