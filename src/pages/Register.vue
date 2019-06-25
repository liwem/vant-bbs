<template>
  <div>
    <div>
      <van-cell-group>
        <van-field
          v-model="username"
          required
          clearable
          label="Name"
          placeholder="创建用户名"
          @click-right-icon="$toast('question')"
        />

        <van-field
          v-model="password"
          type="password"
          label="Password"
          placeholder="创建密码"
          required
        />

        <van-field
          v-model="phone"
          type="phone"
          label="Tel"
          placeholder="手机号码"
          required
        />
      </van-cell-group>
      <div class="register">
        <van-button :disabled="!username||!password||!phone" class="register-btn" type="info" @click="register">注册</van-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      phone: '',
    };
  },
  methods: {
    register() {
      this.$http.post('users', {
        username: this.username,
        password: this.password,
        phone: this.phone,
      })
      .then(resp => {
        this.$router.push('/my');
      })
      .catch(err => {
        this.$toast.fail(err.response.data.message);
      })
    },
  },
};
</script>


<style>
  .register {
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
  }
  .register-btn {
    margin-right: 10px;
  }
</style>
