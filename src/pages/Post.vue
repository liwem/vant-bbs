<template>
  <div>

    <div v-if="$store.state.nick">
      标题：<input><br><br>
      内容：<input><br><br>
      <van-button class="send" type="default">发送</van-button>
    </div>

  </div>
</template>

<style>
  .send {
    display: flex;
    margin-right: 10px;
  }
</style>
