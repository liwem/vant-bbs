<template>
  <div class="app">

    <van-tabbar route >

      <van-tabbar-item icon="home-o" to="/">
        首页
      </van-tabbar-item>

      <van-tabbar-item icon="add-o" to='/post' >
        发帖
      </van-tabbar-item>

      <van-tabbar-item icon="setting-o" to='/tokens/create'>
        登录
      </van-tabbar-item>

      <van-tabbar-item icon="friends-o" to='/my' >
        我的
      </van-tabbar-item>



    </van-tabbar>
    <router-view></router-view>

  </div>
</template>

<style>
  .app {
    padding-bottom: 50px;
  }
</style>
