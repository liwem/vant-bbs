<template>
  <div class="myself">

    <div class="top">
      <div class="icon">
        <van-icon class="icon1" name="wap-nav" size="20"/>
        <!-- <span>{{  }}</span> -->
        <van-icon class="icon2" name="weapp-nav" size="20"/>
      </div>
    </div>

    <div>
      <van-swipe class="photo" :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img :src="image" style="height: 100%; width: 100%;" />
        </van-swipe-item>
      </van-swipe>
    </div>

    <div>

    </div>

  </div>
</template>


<script>
export default {
  data() {
    return {
      images: [
        'http://img.kutoo8.com//upload/image/74899520/7_960x540.jpg',
        'https://images2.alphacoders.com/545/54542.jpg',
      ],
    }
  }
};

</script>

<style scoped>
  .top {
    background-color: #f2f2f2;
    height: 20px;
    padding: 10px;
    padding-left: 20px;
    padding-right: 20px;
  }

  .icon {
    display: flex;
    justify-content: space-between;
  }

  .photo{
    height: 200px;
  }
</style>



