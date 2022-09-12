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
      <div class="search-buy-login">
        <div class="content-search">
          <input placeholder="请输入搜索美食">
          <el-icon :size="22" color="#808080">
            <Search />
          </el-icon>
        </div>
        <div class="content-shopping">
          <el-icon :size="24" color="#808080">
            <ShoppingCart />
          </el-icon>
        </div>
        <div class="content-login">登录/注册</div>
      </div>
    </div>
  </header>
</template>
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
  width: 450px;
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

.search-buy-login {
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
</style>