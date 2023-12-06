<template>
  <div class="login">
    <div class="login-wrap">
      <h1>登录</h1>
      <div class="item">
        <label for="username">账号: </label>
        <input type="text" id="username" v-model="username">
      </div>
      <div class="item">
        <label for="password">密码: </label>
        <input type="password" id="password" v-model="password">
      </div>
      <div class="item">
        <button @click="login">登录</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: 'admin',
      password: '123456'
    }
  },
  methods: {
    login() {
      if (this.username === '' || this.password === '') {
        alert('账号密码不能为空')
        return 
      }
      if (this.username === 'admin' && this.password === '123456') {
        console.log(this.$router)
        this.$router.push({path:'/home',query:{username:this.username}})
      } else {
        alert('登录失败')
      }
    }

  }
}
</script>

<style lang="less" scoped>
.login {
  min-height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #aaa;

  .login-wrap {
    width: 400px;
    height: 300px;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 0 100px #fff;
    padding: 20px;
    font-size: 30px;

    // box-sizing: border-box;
    h1 {
      font-weight: bold;
      text-align: center;
      font-size: 30px;
    }

    .item {
      display: flex;
      margin-top: 30px;

      label {
        margin-right: 10px;
      }

      input {
        outline: none;
        flex: 1;
        padding: 0 10px;
      }

      button {
        font-size: 26px;
        flex: 1;
        border-radius: 25px;
        border: none;
        background-color: skyblue;
        color: #fff;
        padding: 5px 0;
        cursor: pointer;
      }
    }
  }
}
</style>