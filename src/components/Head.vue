<template>
  <div class="wrap header">
    <!-- 左边logo -->
    <h1>
      <img src="@/assets/img/indexLogo.6f8ac4f0.png" alt />
    </h1>
    <!-- 中间菜单 -->
    <div class="nav">
      <ul>
        <!-- $router操作路由对象，可以通过它.push()去做路由跳转, /?就是路由里面的path 
        $route记录路由信息对象
        -->
        <li @click="$router.push('/')" :class="$route.path=='/'?'active':' '">首页</li>
        <li @click="$router.push('/goods')" :class="$route.path=='/goods'?'active':' '">全部礼品</li>
        <li @click="$router.push('/user')" :class="$route.path=='/user/cart'?'active':' '">个人中心</li>
        <li @click="$router.push('/order')" :class="$route.path=='/order'?'active':' '">我的订单</li>
        <li @click="$router.push('/free')" :class="$route.path=='/free/person'?'active':' '">专属福利</li>
      </ul>
    </div>
    <!-- 右边搜索框 -->
    <div class="search">
      <input type="text" placeholder="输入关键字" v-model="inputVal" @keyup.13="search()"/>
      <span @click="search()">
        <img width="18" height="18" src="@/assets/img/search.png" alt="" />
      </span>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      inputVal:'',//用户输入的内容
    }
  },
  methods: {
    search(){
        this.$router.push(`/goods?keyword=${this.inputVal}`);
    }
  },
}
</script>

<style lang="less" scoped>
/**点击路由的样式 */
.active{
  color: #1d338f;
  font-weight: 700;
}
.header {
  height: 118px;
  display: flex;/**弹性布局 */
  justify-content: space-between;/**水平方向两端对齐 */
  align-items: center;/**垂直方向居中对齐 */
  .nav ul {
    width: 500px;
    display: flex;
    justify-content: space-between;
    li {
      cursor: pointer;/**光标改为手指 */
    }
  }
  .search {
    display: flex;
    input {
      width: 214px;
      height: 40px;
      /* line-height: 40px; */
      padding-left: 19px;
      box-sizing: border-box;
      border-radius: 20px 0 0 20px;
      border: solid 1px #dedede;
    }
    span {
      width: 50px;
      height: 40px;
      background-color: #0a328e;
      border-radius: 0px 20px 20px 0px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
  }
}
</style>
