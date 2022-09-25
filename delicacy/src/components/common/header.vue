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
          <div class="user-avatar" @mouseover='showUser' @mouseout='hideUser' ref="getUserRef">
            <div class="avatar">
              <el-avatar :size="50" :src="userInfo.avatar" v-if="userInfo.avatar" />
              <el-avatar :size="50" :src="circleUrl" v-else />
            </div>
          </div>
        </div>
        <div class="user-info" v-show="isShow" @mouseover='showUser' @mouseout='hideUser'>
          <div class="user-name">
            <router-link to="/">网络冲浪001</router-link>
          </div>
          <div class="user-vip">
            <router-link to="/">vip</router-link>
          </div>
          <div class="user-fans">
            <router-link to="/">
              <div class="user-num">152</div>
              <div class="user-text">关注</div>
            </router-link>
            <router-link to="/">
              <div class="user-num">16</div>
              <div class="user-text">粉丝</div>
            </router-link>
            <router-link to="/">
              <div class="user-num">27</div>
              <div class="user-text">动态</div>
            </router-link>
          </div>
          <div class="user">
            <router-link to="/">
              <div class="user-index">
                <div class="user-left">
                  <el-icon class="user-icon" :size="19">
                    <User />
                  </el-icon>
                  <span>个人中心</span>
                </div>
                <div class="user-right">
                  <el-icon icon-arrow>
                    <ArrowRight />
                  </el-icon>
                </div>
              </div>
            </router-link>
          </div>
          <div class="user">
            <router-link to="/">
              <div class="user-index">
                <div class="user-left">
                  <el-icon class="user-icon" :size="19">
                    <Folder />
                  </el-icon>
                  <span>内容管理</span>
                </div>
                <div class="user-right">
                  <el-icon icon-arrow>
                    <ArrowRight />
                  </el-icon>
                </div>
              </div>
            </router-link>
          </div>
          <div class="user">
            <router-link to="/">
              <div class="user-index">
                <div class="user-left">
                  <el-icon class="user-icon" :size="19">
                    <Document />
                  </el-icon>
                  <span>我的订单</span>
                </div>
                <div class="user-right">
                  <el-icon icon-arrow>
                    <ArrowRight />
                  </el-icon>
                </div>
              </div>
            </router-link>
          </div>
          <div class="user">
            <router-link to="/">
              <div class="user-index">
                <div class="user-left">
                  <el-icon class="user-icon" :size="19">
                    <Star />
                  </el-icon>
                  <span>我的收藏</span>
                </div>
                <div class="user-right">
                  <el-icon icon-arrow>
                    <ArrowRight />
                  </el-icon>
                </div>
              </div>
            </router-link>
          </div>
          <el-divider />
          <div class="user">
            <router-link to="/">
              <div class="user-index">
                <div class="user-left">
                  <svg t="1663919587117" class="user-icon" viewBox="0 0 1024 1024" version="1.1"
                    xmlns="http://www.w3.org/2000/svg" p-id="4642" width="19" height="19">
                    <path
                      d="M482.464 512V157.536a29.536 29.536 0 0 1 59.072 0V512a29.504 29.504 0 1 1-59.072 0z m344.064-220.256a383.04 383.04 0 0 0-94.208-94.368l-0.096 0.096a29.472 29.472 0 1 0-33.824 48.384c0.128 0.096 0.288 0.096 0.416 0.192 40 28.128 50.976 39.104 79.328 79.584 102.752 146.752 66.976 349.792-79.808 452.544a325.824 325.824 0 0 1-372.736 0.064 323.84 323.84 0 0 1-79.712-79.904c-49.792-71.008-68.896-157.28-53.824-242.72s62.528-159.968 133.664-209.728c0.224-0.16 0.48-0.288 0.672-0.48l-0.16-0.16A29.504 29.504 0 0 0 291.776 197.44c-0.096 0.064-0.128 0.224-0.256 0.256l-0.032-0.032C118.016 319.36 75.904 558.656 197.472 732.256a383.04 383.04 0 0 0 94.208 94.368c128.448 89.952 304.64 95.072 440.544-0.064 173.728-121.664 215.936-361.12 94.304-534.816z"
                      p-id="4643" fill="#707070"></path>
                  </svg>
                  <span>退出登录</span>
                </div>
                <div class="user-right">
                  <el-icon icon-arrow>
                    <ArrowRight />
                  </el-icon>
                </div>
              </div>
            </router-link>
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
let userInfo = reactive({});
let getUserRef = ref();
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
const showUser = () => {
  isShow.value = true
  getUserRef.value.className = "user-avatar1"
  console.log(getUserRef);

}
const hideUser = () => {
  isShow.value = false
  getUserRef.value.className = "user-avatar2"
  console.log(getUserRef);
}


</script>
<style  lang="less" scoped>
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
  right: 32px;
  width: 300px;
  height: 330px;
  background-color: #fff;
  z-index: 2;
  border-radius: 13px;
  box-shadow: 0 0 30px rgb(0 0 0 / 10%);
  border-radius: 8px px;
  border: 1px solid #e3e5e7;
  color: #18191C;
  padding-top: 44px;
  font-size: 18px;
  text-align: center;
}

.popover {
  position: relative;
}

.avatar {
  height: 75px;
  width: 50px;
  position: absolute;
  z-index: 3;

}

.user-avatar {
  position: absolute;
  width: 75px;
  height: 53px;
  top: 12.5px;
}



.user-avatar1 {
  position: absolute;
  width: 75px;
  height: 53px;
  top: 12.5px;

  .avatar {
    top: 30px;
  }

  .el-avatar {
    width: 75px;
    height: 75px;
    animation-name: avatarMove;
    animation-duration: 0.3s;
  }

}


@keyframes avatarMove {
  from {
    width: 50px;
    height: 50px;
  }

  to {
    width: 75px;
    height: 75px;
  }
}

//回溯动画

.user-avatar2 {
  position: absolute;
  width: 75px;
  height: 53px;
  top: 12.5px;

  .el-avatar {
    width: 50px;
    height: 50px;
    animation-name: avatarMove1;
    animation-duration: 0.3s;
  }

}


@keyframes avatarMove1 {
  from {
    width: 75px;
    height: 75px;
  }

  to {
    width: 50px;
    height: 50px;
  }
}

.user-name {
  color: rgb(97, 102, 109);
  cursor: pointer;
  margin-bottom: 6px;
}

.user-vip {
  color: #f89898;
  margin-bottom: 10px;
}

.user-fans {
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  padding: 0 30px;
  margin-bottom: 12px;
}

.user-index {
  display: flex;
  align-items: center;
  // justify-content: center;
  width: 250px;
  height: 38px;
  margin: 0 25px;
  border-radius: 8px;
  font-size: 14px;
  color: #61666D;
}

.user-index:hover {
  background-color: #dedfe0;
}

.user-icon {
  vertical-align: middle;
  margin-right: 20px;
}



.user-left {
  width: 190px;
  padding-right: 30px;
}

.el-divider--horizontal {
  margin: 11px 0;
}
</style>