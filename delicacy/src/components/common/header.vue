<template>
  <header>
    <div class="header-content">
      <h1 class="content-logo">
        <img src="">
        <p>黄杰</p>
      </h1>
      <div class="content-nav">
        <ul>
          <li>
            <router-link to="/">首页</router-link>
          </li>
          <li>
            <router-link to="/course">菜谱分类</router-link>
          </li>
          <li>
            <router-link to="/course">健康美食</router-link>
          </li>
          <li>
            <router-link to="/course">美食圈</router-link>
          </li>
          <li>
            <router-link to="/course">家居用品</router-link>
          </li>

        </ul>
      </div>
      <div class="search-food-login">
        <div class="content-search">
          <input placeholder="请输入搜索美食">
          <el-icon :size="22" color="#808080">
            <Search />
          </el-icon>
        </div>
        <div class="content-login" v-if="!isLogin">
          <router-link to="/login">登录/注册</router-link>
        </div>
        <div class="content-login-success" v-else>
          <div @mouseenter='isShow=true' @mouseleave='isShow=false'>
            <el-avatar :size="50" :src="userInfo.avatar" v-if="userInfo.avatar" />
            <el-avatar :size="50" :src="circleUrl" v-else />
          </div>
        </div>
        <div class="user-info" v-if="isShow">
          <div class="popover">
          </div>
        </div>
      </div>
    </div>

  </header>
</template>
<script setup>
import { createToken } from '@/api/module/login.ts'
import { indexGetInfo } from '@/api/module/index.ts'
const state = reactive({
  circleUrl:
    'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
  squareUrl:
    'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
})
const { circleUrl, squareUrl, sizeList } = toRefs(state)
//判断用户登录状态
let isLogin = ref(true);
//用户信息
let userInfo = ref({});
//显示用户更多数据
let isShow = ref(false);
onBeforeMount(() => {
  createToken().then(res => {
    getInfo({ token: res.data.token }).then(res => {
      if (res.meta.code === '200') {
        userInfo.value = res.data.data;
        isLogin.value = true;

      }
    })
  })
})
</script>
<style scoped>
header {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1519.2px;
  height: 75px;
  background-color: #fff;
  box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.16);
}

.header-content {
  display: flex;
  justify-content: space-around;
  width: 1536px;
}

.content-logo {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 165px;
  height: 55px;
  margin: 10px 0;
  cursor: pointer;
}

.content-logo p {
  margin-left: 15px;
}

.content-logo img {
  height: 100%;
}

.content-nav {
  width: 495px;
  height: 75px;
}

.content-nav ul {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 75px;
}

.content-nav li {
  font-size: 18px;
  color: #808080;
  cursor: pointer;
}

.content-nav a {
  font-size: 18px;
  color: #808080;
  cursor: pointer;
  text-decoration: none;
}

.search-food-login {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 600px;
}

.content-search {
  display: flex;
  align-items: center;
  padding: 5px 10px;
  width: 350px;
  height: 35px;
  background-color: #F0F2F4;
  opacity: 1;
  border-radius: 8px;
}

.content-search input {
  padding: 0 10px;
  width: 430px;
  height: 40px;
  border: 0;
  border-radius: 8px;
  background-color: #F0F2F4;
  color: #808080;
  outline: none;
}

.content-login {
  font-size: 18px;
  color: #808080;
  text-align: center;
  cursor: pointer;
}

.content-login a {
  font-size: 18px;
  color: #808080;
  text-align: center;
  cursor: pointer;
  text-decoration: none;
}

.content-login-success {
  height: 53px;
  color: #808080;
  text-align: center;
  width: 180px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #707070;
  cursor: pointer
}

.avator {
  height: 53px;
  width: 53px;
  cursor: pointer;
  border-radius: 50%;
}

/* 头像 */
.demo-basic {
  text-align: center;
}

.demo-basic .sub-title {
  margin-bottom: 10px;
  font-size: 14px;
  color: var(--el-text-color-secondary);
}

.demo-basic .demo-basic--circle,
.demo-basic .demo-basic--square {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.demo-basic .block:not(:last-child) {
  border-right: 1px solid var(--el-border-color);
}

.demo-basic .block {
  flex: 1;
}

.demo-basic .el-col:not(:last-child) {
  border-right: 1px solid var(--el-border-color);
}

.user-info {
  position: absolute;
  top: 80px;
  right: 60px;
  width: 200px;
  height: 200px;
  background-color: aqua;
  z-index: 2;
}

.popover {}
</style>