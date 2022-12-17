<template>
  <div class="person_page">
    <div class="person wrap">
      <!--面包屑START-->
      <!--面包屑END-->
      <main>
        <aside>
          <div
            class="avatar"
            :style="{ backgroundImage: `url(${userInfo.headImg})` }"
          ></div>
          <div class="name">{{ userInfo.nickName }} <span @click="loginOut" style="cursor:pointer;">[退出]</span></div>
          <div class="title">
            <img
              src="../assets/img/transaction.png"
              width="20"
              alt="交易管理"
            />
            交易管理
          </div>
          <ul class="list">
            <li :class="/\/person1/g.test($route.path) ? 'active' : ''">
              个人中心
            </li>
            <li :class="/\/person1/g.test($route.path) ? 'active' : ''">
              我的订单
            </li>
            <li :class="/\/cart/g.test($route.path) ? 'active' : ''">购物车</li>
            <li :class="/\/person1/g.test($route.path) ? 'active' : ''">
              消息通知
            </li>
            <li :class="/\/person1/g.test($route.path) ? 'active' : ''">
              积分明细
            </li>
            <li :class="/\/person1/g.test($route.path) ? 'active' : ''">
              积分攻略
            </li>
          </ul>
          <div class="title">
            <img
              src="../assets/img/transaction.png"
              width="20"
              alt="交易管理"
            />
            个人信息管理
          </div>
          <ul class="list">
            <li>地址管理</li>
            <li>账号安全</li>
          </ul>
        </aside>
        <article><router-view></router-view></article>
      </main>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
  data() {
    return {

    };
  },
  computed: {
    ...mapState(['userInfo'])
  },
  components: {
    
  },
  methods: {
    loginOut(){
      localStorage.removeItem('x-auth-token');
      this.$router.push('/');
      //3.刷新页面
      this.$router.go(0);
    }
  },
  // beforeRouteEnter(to, from, next) {
  //   // 在渲染该组件的对应路由被 confirm 前调用
  //   // 不！能！获取组件实例 `this`
  //   // 因为当守卫执行前，组件实例还没被创建
  //   // 不！能！获取组件实例 `this`
  //   // 因为当守卫执行前，组件实例还没被创建
  //   let myToken = localStorage.getItem("x-auth-token");
  //   if (myToken) {
  //     // 放行
  //     next();
  //   } else {
  //     // 没有登录，不放行
  //     // 提示用户登录
  //     alert("请先登录！");
  //   }
  // }

};
</script>
<style lang="less" scoped>
.person_page {
  background: #fff;
  main {
    border-top: 1px solid #e1e1e1;
    padding: 28px 0 48px;
    display: flex;
    justify-content: space-between;
    background: #fff;
    aside {
      width: 200px;
      height: 740px;
      background: #e7e7e7;
      margin-right: 60px;
      box-sizing: border-box;
      padding: 30px 18px 0;
      .avatar {
        width: 100px;
        height: 100px;
        margin: auto;
        background-size: 100% 100%;
        background-repeat: no-repeat;
      }
      .name {
        text-align: center;
        margin-top: 19px;
        margin-bottom: 43px;
        span {
          text-decoration: underline;
          color: #2a5df1;
        }
      }
      .title {
        font-size: 16px;
        color: #333333;
        display: flex;
        align-items: center;
        margin-bottom: 14px;
        img {
          margin-right: 6px;
        }
      }
      .list {
        li {
          margin-bottom: 17px;
          font-weight: 300;
          color: #666666;
          cursor: pointer;
          &.active {
            color:#0a328e;
            font-weight: bold;
            &::before {
              width: 2px;
              height: 14px;
              background:#0a328e;
              display: inline-block;
              content: "";
              margin-right: 10px;
            }
          }
        }
      }
    }
    article {
      flex: 1;
      //padding: 20px 0 0 0px;
      box-sizing: border-box;
      background: #fff;
    }
  }
}
</style>