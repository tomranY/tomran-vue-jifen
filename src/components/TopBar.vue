<template>
  <div class="top-bar">
    <div class="wrap top-bar-wrap">
      <div class="l">欢迎来到叩丁严选</div>
      <div class="r">
        <ul>
          <li>
            <img class="avatar" width="30" :src="userInfo.headImg" alt />
            用户名:{{userInfo.nickName}}
          </li>
          <li>我的鸡腿:{{userInfo.coin}}</li>
          <li>获取鸡腿</li>
          <li>叩丁狼官网</li>
          <li v-show="!IsLogined" class="login-btn" @click="changeShowLoginModal(true)">登录</li>
          <li v-show="IsLogined" class="cart-btn">
            <img src="../assets/img/cart.png" alt="">
            <span>购物车</span>
            <b>{{cartTotal}}</b>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations,mapState } from 'vuex';
export default {
  computed: {
    ...mapState(['IsLogined','cartTotal','userInfo'])
  },
  methods: {
    // openLogin(){
    //   this.$store.commit('changeShowLoginModal',true);
    // }
    ...mapMutations(['changeShowLoginModal','changeIsLogined'])
  },
  created(){//刷新前将原本vuex里面的数据存储起来，刷新后进行更换
      window.addEventListener("beforeunload",()=>{//监听页面刷新之前执行一些操作
      if(localStorage.getItem('x-auth-token')){
        //存储vuex原本的数据
        localStorage.setItem('userInfo',JSON.stringify(this.$store.state));
      }
          
      });
      //页面刷新，将vuex里面的数据替换成存储的数据
      if(localStorage.getItem('x-auth-token')){
        const userInfo = localStorage.getItem('userInfo')
          this.$store.replaceState(Object.assign({},JSON.parse(userInfo)))//Object.assign()将数据JSON.parse(userInfo)拷贝给对象{}
      }else{
        localStorage.removeItem('userInfo');
      }

  },
  watch:{
    '$route.path':{//监听路由路径是否发生变化，如果发生版画就重新设置登录状态
      handler(){
        let token = localStorage.getItem('x-auth-token');
        this.changeIsLogined(Boolean(token));
      }
    }
  }
};
</script>
<style lang="less" scoped>
.cart-btn{
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0a328e;
  width: 135px;
  height: 40px;
  span{
    margin-left: 5px;
    margin-right: 5px;
  }
  b{
    width: 25px;
    height: 25px;
    border-radius: 50%;
    line-height: 25px;
    text-align: center;
    background-color: rgba(233, 15, 15, 0.877);
  }
}
.top-bar {
  font-size: 14px;
  height: 40px;
  line-height: 40px;
  background-color: #252b39;
  color: white;
  .top-bar-wrap {
    /*后面添加的*/
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .r {
      ul {
        display: flex;
        li {
          display: flex;
          align-items: center;
          margin-left: 10px;
          cursor: pointer;
          .avatar {
            border-radius: 50%;
            margin-right: 10px;
          }
        }
        .login-btn {
          background-color: #1d338f;
          width: 124px;
          height: 40px;
          display: flex;
          justify-content: center;
        }
      }
    }
  }
}
</style>