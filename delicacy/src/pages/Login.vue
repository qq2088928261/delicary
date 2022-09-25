<template>
  <div class='container'>
    <section>
      <div class="login-box">
        <!-- 登录框左侧 -->
        <div class="login-left">
          <a href="/" title="猿食堂线" class="logo">
            <img src="../assets/img/logo02.png" alt="猿食堂" title="猿食堂">
          </a>
          <div class="left-qrcode">
            <div id="qrcode" title="猿食堂"><canvas width="180" height="180" style="display: none;"></canvas><img src=""
                style="display: block;"></div>
            <div class="qrcode-text">扫码登录</div>
          </div>
          <div class="quick-login">快捷登录</div>
          <div class="qq-wx-wb">
            <div class="wx-login">
              <a href="/oauth/login/WECHAT_OPEN" title="微信登录"><i class="fa fa-weixin"></i></a>
            </div>
            <div class="qq-login">
              <a href="/oauth/login/qq" title="QQ登录"><i class="fa fa-qq"></i></a>
            </div>
            <div class="weibo-login">
              <a href="/oauth/login/weibo" title="微博登录"><i class="fa fa-weibo"></i></a>
            </div>
          </div>
        </div>
        <!-- 登录框右侧 -->
        <div class="login-right">
          <div class="login-form">
            <ul class="nav nav-tabs">
              <li v-for='item in loginTxt' :key='item.id' class="nav-items" :class='current == item.id ? "actives" : ""'
                @click='loginChange(item.id)'>
                <a :class='current == item.id ? "activess" : ""'>{{ item.text }}</a>
              </li>
            </ul>
            <div class="tab-content">
              <div class="tab-pane fade show active" v-if='current == 1'>
                <!-- 账号登录 -->
                <div class="tab-main">
                  <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules">
                    <el-form-item class="login-user" prop="username">
                      <el-icon>
                        <Avatar />
                      </el-icon>
                      <el-input v-model="ruleForm.username" placeholder="请输入您的用户名" />
                    </el-form-item>
                    <el-form-item class="login-password" prop="userpwd">
                      <el-icon>
                        <Lock />
                      </el-icon>
                      <el-input type='password' v-model="ruleForm.userpwd" placeholder="请输入您的密码" />
                    </el-form-item>
                    <!-- 滑块 -->
                    <div class="verify">
                      <Verify v-model:value="form.statusVerify"></Verify>
                    </div>
                    <el-form-item class="login-submit">
                      <el-button type="primary" @click='userBtn(ruleFormRef)'>登录</el-button>
                    </el-form-item>
                    <a class="forgetpwd">忘记密码？</a>

                  </el-form>
                </div>
              </div>
              <div class="tab-pane fade" v-else>
                <!-- 注册 -->
                <div class="tab-main">
                  <el-form ref="ruleFormRefRegister" :model="ruleFormRegister" :rules="rulesRegister">
                    <el-form-item class="login-user" prop="userName">
                      <el-icon>
                        <avatar />
                      </el-icon>
                      <el-input v-model="ruleFormRegister.userName" placeholder="请输入您的用户名" />
                    </el-form-item>
                    <el-form-item class="login-password" prop="passWord">
                      <el-icon>
                        <Lock />
                      </el-icon>
                      <el-input v-model="ruleFormRegister.passWord" placeholder="请输入您的密码" />
                    </el-form-item>
                    <el-form-item class="login-email" prop="eMail">
                      <el-icon>
                        <Message />
                      </el-icon>
                      <el-input v-model="ruleFormRegister.eMail" placeholder="请输入您的邮箱" />
                    </el-form-item>
                    <!--带isall参数和leave参数示例-->
                    <div class="area">
                      <p>请选择您的住址:</p>
                      <elui-china-area-dht isall :leave="3" @change="onChange"></elui-china-area-dht>
                    </div>
                    <div class="login-submit">
                      <el-button class="btn btn-primary register" type="primary"
                        @click='registerBtn(ruleFormRefRegister)'>
                        注册</el-button>
                    </div>
                  </el-form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script  setup>
//element-plus
import { ElMessage } from 'element-plus'
//api
import { loginByJson, loginByRegister } from '../api/module/login.ts'
//加密
import { Encrypt } from '../utils/aes'
//pinia
import { useUserStore } from '@/store/user.ts'
const userStore = useUserStore();

//地址选择器
import { EluiChinaAreaDht } from 'elui-china-area-dht'
//滑块验证
import Verify from '@/components/common/verify.vue'
const form = reactive({
  statusVerify: false, // 滑块验证结果
})
//账号登录和注册切换
let current = ref(1);
//账号登录和注册
let loginTxt = ref([
  { id: 1, text: '账号登录' },
  { id: 2, text: '注册' }
])
const loginChange = (id) => {
  current.value = id;
}
//账号密码登录
const ruleFormRef = ref('');
let ruleForm = reactive({
  username: '',
  userpwd: ''
})
let rules = reactive({
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 3, max: 11, message: '请输入3-11位用户名', trigger: 'blur' },
  ],
  userpwd: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 3, max: 11, message: '请输入3-11位密码', trigger: 'blur' },
  ]
});
//账号密码点击登录
const userBtn = (formEl) => {
  if (!formEl) return
  if (!form.statusVerify) {
    ElMessage({
      showClose: true,
      message: '请滑块验证',
      type: 'warning',
    })
    return
  }
  formEl.validate((valid, fields) => {
    if (valid) {
      loginByJson({
        userName: Encrypt(ruleForm.username),
        password: Encrypt(ruleForm.userpwd)
      }).then(res => {
        //登录成功
        if (res.meta.code != "10006") {
          ElMessage({
            showClose: true,
            message: res.meta.msg,
            type: 'error',
          })

          return;
        }
        userStore.setToken(res.data.accessToken);
      })
    } else {
      ElMessage({
        showClose: true,
        message: '请输入正确格式',
        type: 'warning',
      })
    }
  })
}
//注册
const ruleFormRefRegister = ref('');
let ruleFormRegister = reactive({
  userName: '',
  passWord: '',
  eMail: '',
  address: ''
})
let rulesRegister = reactive({
  userName: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 3, max: 11, message: '请输入3-11位用户名', trigger: 'blur' },
  ],
  passWord: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 3, max: 11, message: '请输入3-11位密码', trigger: 'blur' },
  ],
  eMail: [
    { required: true, message: '请输入邮箱', trigger: 'blur', },
    { pattern: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/, message: '邮箱格式不正确', },
  ],
});




//点击注册
const registerBtn = (formEl) => {
  if (!formEl) return
  formEl.validate((valid, fields) => {
    if (valid) {
      //用户输入的用户名
      let userName = Encrypt(ruleFormRegister.userName);
      //用户输入的密码
      let passWord = Encrypt(ruleFormRegister.passWord);
      //用户输入的邮箱
      let eMail = ruleFormRegister.eMail
      //用户输入的地址
      let address = ruleFormRegister.address
      loginByRegister({ userName, passWord, eMail, address }).then(res => {
        //注册
        if (res.meta.code != "10006") {
          ElMessage({
            showClose: true,
            message: 注册成功,
            type: 'error',
          })
          return;
        }
        userStore.setToken(res.data.accessToken);
      })

    } else {
      ElMessage({
        showClose: true,
        message: '请输入正确格式',
        type: 'warning',
      })
    }
  })
}
//地址选择器
const chinaData = new EluiChinaAreaDht.ChinaArea().chinaAreaflat
const onChange = (e) => {
  const one = chinaData[e[0]]
  const two = chinaData[e[1]]
  const three = chinaData[e[2]]
  ruleFormRegister.address = one.label + two.label + three.label

}


</script>

<style lang="scss" scoped >
.container {
  position: relative;
  width: 100vw;
  height: 100vh;
  background: url(../assets/img/bjt.png) center;
}

section {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.3);
  z-index: 10;
}

.login-box {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 950px;
  height: 500px;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  box-shadow: 0px 0px 5px #777;
}

.login-left {
  width: 475px;
  height: 500px;
  background: #388fff;
}

.login-right {
  position: relative;
  width: 475px;
  height: 500px;
  background: #ffffff;
}

.nav-tabs {
  border-bottom: none;
}

.login-form {
  padding: 10px 40px;
  width: 350px;
  height: 440px;
  background: #ffffff;
  box-shadow: 0 0 8px #cccccc;
  border-radius: 8px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.nav-tabs {
  display: flex;
  justify-content: space-between;
  text-align: center;
}

.nav-tabs li {
  width: 40%;
  padding: 0px 0;
  font-size: 17px;
  font-weight: bold;
}

.nav-tabs li a {
  color: #333;
  display: block;
  height: 45px;
  line-height: 45px;
}

.actives {
  color: #388eff;
  border-bottom: 4px solid #388eff;
}

.activess {
  color: #388eff !important;
}

.nav-tabs li a:hover {
  text-decoration: none;
}

.tab-main {
  height: 360px;
  padding: 1px 0 0 0;
}

.login-user {
  width: 100%;
  height: 40px;
  border-bottom: 1px solid #666;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.login-user i {
  font-size: 18px;
  color: #666;
  margin-left: 5px;
}

.login-user input {
  width: calc(100% - 30px);
  height: 35px;
  outline: none;
  color: #666666;
  border: 0;
  padding: 0 5px;
}

.login-password {
  width: 100%;
  height: 40px;
  border-bottom: 1px solid #666;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.login-password i {
  font-size: 18px;
  color: #666;
  margin-left: 5px;
}

.login-password input {
  width: calc(100% - 30px);
  height: 35px;
  outline: none;
  color: #666666;
  border: 0;
  padding: 0 5px;
}

.login-email {
  width: 100%;
  height: 40px;
  border-bottom: 1px solid #666;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.login-email i {
  font-size: 18px;
  color: #666;
  margin-left: 5px;
}

.login-email input {
  width: calc(100% - 30px);
  height: 35px;
  outline: none;
  color: #666666;
  border: 0;
  padding: 0 5px;
}

.area {
  width: 100%;
  height: 40px;
  border-bottom: 1px solid #666;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.area p {
  font-size: 14px;
  color: #666;
}




.login-submit {
  width: 100%;
  height: 40px;
  margin-top: 30px;
  display: flex;
  align-items: center;
}

.login-submit button {
  width: 100%;
  height: 35px;
  outline: none;
  border: none;
  letter-spacing: 5px;
  border-radius: 18px;
  font-weight: bold;
  margin-bottom: 5px;
}

.forgetpwd {
  float: right;
  color: #888;
  transform: translateY(-15px);
}



.login-left {
  padding: 20px;
}

.login-left .logo img {
  width: 120px;
}

.left-qrcode {
  width: 200px;
  margin: 30px auto 0 auto;
}

.left-qrcode #qrcode {
  width: 200px;
  height: 200px;
  padding: 10px;
  background: #ffffff;
}

.left-qrcode #qrcode img {
  width: 100% !important;
  height: 100% !important;
}

.login-left .qrcode-text {
  text-align: center;
  color: white;
  line-height: 35px;
  margin-top: 10px;
}

.quick-login {
  text-align: center;
  margin: 20px 0;
  color: #dddddd;
  position: relative;
}

.quick-login:before {
  content: '';
  width: 80px;
  height: 1px;
  background: #dddddd;
  position: absolute;
  left: 100px;
  top: 50%;
}

.quick-login:after {
  content: '';
  width: 80px;
  height: 1px;
  background: #dddddd;
  position: absolute;
  right: 100px;
  top: 50%;
}

.qq-wx-wb {
  width: 180px;
  height: 55px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}

.qq-wx-wb .qq-login {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  overflow: hidden;
  font-size: 18px;
  text-align: center;
  line-height: 30px;
  background: #e5ffe1;
}

.qq-wx-wb .qq-login a {
  color: #368afe;
}

.qq-wx-wb .wx-login {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  overflow: hidden;
  font-size: 18px;
  text-align: center;
  line-height: 30px;
  background: #e5ffe1;
}

.qq-wx-wb .wx-login a {
  color: #09bb07;
}

.qq-wx-wb .weibo-login {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  overflow: hidden;
  font-size: 18px;
  text-align: center;
  line-height: 30px;
  background: #e5ffe1;
}

.qq-wx-wb .weibo-login a {
  color: #d81e06;
}

:deep(.el-form-item__content) {
  flex-wrap: nowrap;
}

:deep(.el-input__wrapper) {
  border: none !important;
  box-shadow: none !important;
}

:deep(.el-input__inner) {
  border: none !important;
  box-shadow: none !important;
}

:deep(.el-select) {
  --el-select-input-focus-border-color: transparent;
}

:deep(.el-form-item__error) {
  top: 120%;
}

.example-block {
  margin: 1rem;
}

.example-demonstration {
  margin: 1rem;
}

.el-input__inner {
  font-size: 18px;
}
</style>