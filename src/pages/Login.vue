<template>
  <div>
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
    <div class="login-all">
      <div>
        <van-cell-group>
          <van-field
            v-model="phone"
            required
            clearable
            label="手机号"
            placeholder="请输入手机号"
          />

          <van-field
            v-model="password"
            type="password"
            label="密码"
            placeholder="请输入密码"
            required
          />
      </van-cell-group>
      </div>

      <div class="btn">
        <van-button class="register-btn" type="default" @click="register">注册</van-button>
        <van-button :disabled="!phone||!password" class="login-btn" type="info" @click="login">登录</van-button>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .btn {
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
  }

  .login-btn {
    margin-left: 10px;
  }

  .login-all {
    margin: 10px;

  }
  .loading {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
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
      phone: '',
      password: '',
      images: [
        'http://img.kutoo8.com//upload/image/74899520/7_960x540.jpg',
        'https://images2.alphacoders.com/545/54542.jpg',
      ],
    };
  },
  methods: {
    register() {
      this.$router.push('/register');
    },
    login() {
      this.$http
        .post('tokens', {
          phone: this.phone,
          password: this.password,
        })
        .then(resp => {
          let token = resp.data.token;
          this.$http.defaults.headers.common['Authorization'] = `Bearer ${token}`;
          this.$http
            .get('users/me')
            .then(resp => {
              this.$store.commit('setNick', resp.data.username);
              this.$router.push('/post');
            });
        })
        .catch(error => {
          alert(error.response.data.message);

        });
    },
  },
};
</script>
