<template>
  <div class="app">

    <div class="top">
      <div class="icon">
        <van-icon class="icon1" name="wap-nav" size="20"/>
        <span>{{ $store.state.nick }}</span>
        <van-icon class="icon2" name="weapp-nav" size="20"/>
      </div>
    </div>

    <div>
      <van-swipe class="photo" :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img :src="image" style="height: 100%; width: 100%;" />
        </van-swipe-item>
      </van-swipe>

      <van-tabs v-model="active" @click='goto'>
        <van-tab title="标签 1">
          <div class="label-top" v-for="thread in threads" :key="thread.id">
            <!-- <van-image
              width="3rem"
              height="3rem"
              fit="cover"
              :src="post.user.avator"
            /> -->
            <div>


              <router-link :to="'/threads/' + thread.id">
                  {{ thread.title }}
              </router-link>
              <div>
                {{ thread.content }}
              </div>




            </div>

          </div>
        </van-tab>
        <van-tab title="标签 2">
          <div class="label-top" v-for="thread in threads" :key="thread.id">
            <!-- <van-image
              width="3rem"
              height="3rem"
              fit="cover"
              :src="post.user.avator"
            /> -->
            {{ thread.title }}
          </div>
        </van-tab>
        <van-tab title="标签 3">
          <div class="label-top" v-for="thread in threads" :key="thread.id">
            <!-- <van-image
              width="3rem"
              height="3rem"
              fit="cover"
              :src="post.user.avator"
            /> -->
            {{ thread.title }}
          </div>
        </van-tab>
        <van-tab title="标签 4">
          <div class="label-top" v-for="thread in threads" :key="thread.id">
            <!-- <van-image
              width="3rem"
              height="3rem"
              fit="cover"
              :src="thread.user.avator"
            /> -->
            {{ thread.title }}
          </div>
        </van-tab>
      </van-tabs>
    </div>

    <!-- <div class="all">
      <div class="box1">
        <van-image
          width="3rem"
          height="3rem"
          fit="cover"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
      </div><hr>
      <div class="box2">
        <van-image
          width="3rem"
          height="3rem"
          fit="cover"
          src="https://cdn.v2ex.com/avatar/8475/681e/133302_normal.png?m=1536558052"
        />
      </div><hr>
      <div class="box3">
        <van-image
          width="3rem"
          height="3rem"
          fit="cover"
          src="https://cdn.v2ex.com/avatar/b449/1430/363395_normal.png?m=1558747669"
        />
      </div><hr>
      <div class="box4">
        <van-image
          width="3rem"
          height="3rem"
          fit="cover"
          src="https://cdn.v2ex.com/avatar/542e/2ce2/337985_normal.png?m=1556616029"
        />
      </div><hr>
      <div class="box5">
        <van-image
          width="3rem"
          height="3rem"
          fit="cover"
          src="https://cdn.v2ex.com/avatar/2b48/30a2/18392_normal.png?m=1392345536"
        />
      </div><hr>
      <div class="box6">
        <van-image
          width="3rem"
          height="3rem"
          fit="cover"
          src="https://cdn.v2ex.com/gravatar/93e119404bc4913f7f4c91f27cf502f1?s=48&d=retro"
        />
      </div><hr>
      <div class="box7">
        <van-image
          width="3rem"
          height="3rem"
          fit="cover"
          src="https://cdn.v2ex.com/avatar/542e/2ce2/337985_normal.png?m=1556616029"
        />
      </div><hr>
      <div class="box8">
        <van-image
          width="3rem"
          height="3rem"
          fit="cover"
          src="https://cdn.v2ex.com/avatar/bbd6/61c1/378007_normal.png?m=1548571435"
        />
      </div><hr>
      <div class="box9">
        <van-image
          width="3rem"
          height="3rem"
          fit="cover"
          src="https://cdn.v2ex.com/avatar/ec19/3600/274670_normal.png?m=1516169504"
        />
      </div><hr>
      <div class="box10">
        <van-image
          width="3rem"
          height="3rem"
          fit="cover"
          src="https://cdn.v2ex.com/gravatar/4a01ade148d5360fa3320ea91eec3683?s=48&d=retro"
        />
      </div><hr>

    </div> -->
  </div>
</template>

<style scoped>
  .label-top {
    margin-top: 15px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    border-bottom: 1px solid #e2e2e2;
    padding-bottom: 5px;
  }
  .photo {
    height: 200px;
  }

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

</style>

<script>
export default {
  data() {
    return {
      active: 0,
      threads: [],
      images: [
        'http://img.kutoo8.com//upload/image/74899520/7_960x540.jpg',
        'https://images2.alphacoders.com/545/54542.jpg',
      ]
    };
  },
  methods: {
    goto(index, title) {
      this.getThreads(index + 1);
    },
    getThreads(nodeId) {
      this.$http.get('threads', {
          params: {
            node_id: nodeId,
          },
        })
        .then(resp => {
          this.threads = resp.data.data;
        })
    }
  },
  created() {
    this.getThreads(1);
  },
};
</script>

