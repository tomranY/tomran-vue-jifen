<template>
  <div class="login-modal">
      <div class="mask" ></div>
      <div class="login-box">
          <img class="close"   src="../assets/img/close.png" alt="" @click="changeShowLoginModal(false)">
           <ul class="title">
            <li :class="isShowForm?'active':''" @click="isShowForm=true">手机号码登录</li>
            <li style="margin:-2px 10px 0;cursor:auto;">|</li>
            <li :class="!isShowForm?'active':''" @click="isShowForm=false">微信扫码登录</li>
          </ul>
          <div class="body">
            <div class="form" v-show="isShowForm">
              <div class="input-group uname">
                <input ref="phone" type="text" placeholder="请输入手机号" v-model="phoneNum">
              </div>
              <div class="input-group mb20 slide-box">
                <!--滑块-->
                  <slide-verify 
                :l="42"
                :r="20"
                :w="360"
                :h="139"
                :slider-text="msg"
                :imgs="imgs"
                @success="onSuccess"
                @fail="onFail"
                @refresh="onRefresh"
                ></slide-verify>
               </div>
              <div class="input-group code mb20" >
                <input type="text" placeholder="请输入短信验证码">
                <div class="btn"><!-- has-count是灰色背景-->
                  <span @click="sendSMCode">获取验证码</span>
                  <span v-show="false">18</span>
                </div>
              </div>
              <div class="btn login-btn" @click="submitLogin">登录</div>
            </div>
            <div class="wx-qrcode" v-show="!isShowForm">微信二维码</div>
          </div>
      </div>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from 'vuex'
import {verifyPhone} from '../utils/index'
import { PhoneLoginAPI } from '../request/api'
export default {
  data () {
    return {
      // 控制表单盒子的显示和隐藏
      isShowForm:true,
      // 用户输入的手机号
      phoneNum:"19881693051",
      msg:'向右滑动填充拼图',
      imgs:[
        'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic_source%2F64%2F4c%2F7b%2F644c7b6c1a42fac7d48b517084bfb02c.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1672797762&t=ca1e043113576e77e5aade36cb0470f2',
        'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic_source%2Fb0%2Fd1%2Ff3%2Fb0d1f35504e4106d48c84434f2298ada.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1672797872&t=ed89c2bef2cece9ec7113e8e8cc3326d',
        'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2Fc9%2F08%2F4a%2Fc9084a6750e3293e6aeaf981f653b734.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1672797762&t=0716e90b2b462de4e30d74ba66b1f057'
      ],
    }
  },
  methods:{
    sendSMCode(){//发送手机验证码
    //1.验证手机号和滑块
      if(!this.verify()){//验证不通过，结束方法，不执行后面的代码
        return;
      }
      //2.发送手机号
    },
    async submitLogin(){//登录功能
    //1.验证手机号和滑块
      if(!this.verify()){
        return;
      }
      //2.登录
      let res = await PhoneLoginAPI({
        verifyCode:'12345',
        phone:this.phoneNum
      });
      if(res.code == 0){
        console.log("登录后的数据：",res);
      //3.存储token，把token放在请求头里面，每一次发送请求都携带该token
      localStorage.setItem("x-auth-token", res['x-auth-token']);//把token存储在localStorage中
      //4.关闭登录
      this.changeShowLoginModal(false);
      //5.显示对应的用户信息（登录框隐藏，个人信息）
      this.changeIsLogined(true);
      //6.获取用户信息
      this.getUserInfo();
      }else{
        alert("登录失败，请重新登录！！！");
      }
    },
    verify(){//验证手机号和滑块是否成功，如果不成功返回false，成功返回true
    //1.验证手机号  19881693051
      if(!verifyPhone(this.phoneNum)){
        alert("输入的必须是手机号码！！！");
        this.$refs.phone.focus();//输入框聚焦
        return false;
      }
      //2.验证滑块
      if(this.msg=="再试一次"||this.msg=="向右滑动填充拼图"){
        alert("带块必须验证成功！！！");
        return false;//验证滑块不成功
      }
      return true;//验证成功
    },
    ...mapMutations(['changeShowLoginModal','changeIsLogined']),
    ...mapActions(['getUserInfo']),
    onSuccess(){
                this.msg = '验证成功'
            },
            onFail(){
                this.msg = '再试一次'
            },
            onRefresh(){
                this.msg = '再试一次'
            }
  },
  computed: {
    ...mapState(['showLoginModal'])
  },
}
</script>
<style lang = "less" scoped>

  .login-modal{
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 999;
    .mask{
      width: 100%;
      height: 100%;
      background-color: rgba(0,0,0,.5);
    }
    .login-box{
      width: 555px;
      height: 423px;
      background: url("../assets/img/login-box-bg.png");
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
      margin: auto;

      .close{
        position: absolute;
        right: 60px;
        top: 15px;
        cursor: pointer;
      }

      .title{
        display: flex;
        justify-content: center;
        padding: 45px 0 30px;
        color: #ccc;
        font-size: 18px;
        li{
          cursor:pointer;
        }
        .active{
            color:#333;
        }
      }

      .body{
        width: 360px;
        margin: 0 auto;

        .form{
          .uname{
            margin-bottom: 5px;
          }
          .input-group{
            display: flex;
            
            input{
              height: 48px;
              width: 100%;
              text-indent:10px;
              border: 1px solid #ccc;
            }
          }
          .code input{
              width: 260px;
              margin-right: 8px;
          }

          .code .btn{
            flex:1
          }
          .btn{
            height: 50px;
            line-height: 50px;
            background-color: #0a328e;;
            color: #fff;
            text-align: center;
            cursor: pointer;
            &.login-btn{
              margin-top: 10px;
            }
          }
          .has-count{
            background-color: #ccc;
          }
        }
      }
    }
  }

  /deep/.slide-box {
    width: 100%;
    position: relative;
    box-sizing: border-box;
    canvas {
        position: absolute;
        left: 0;
        top: -120px;
        display: none;
        width: 100%;
        box-sizing: border-box;
    }
    .slide-verify-block{
        width: 85px;
        height: 136px;
    }
    .slide-verify-refresh-icon {
        top: -120px;
        display: none;
    }
    &:hover {
        canvas {
            display: block;
        }
        .slide-verify-refresh-icon {
            display: block;
        }
    }
}
</style>