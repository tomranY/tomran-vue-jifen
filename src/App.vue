<template>
  <div id="app">
    <!-- 顶部 -->
    <!-- 3.使用 -->
    <TopBar></TopBar>
    <!-- 头部 -->
    <Head></Head>
    <!-- 显示路由的页面 -->
    <router-view />
    <!-- 尾部 -->
    <Footer></Footer>
    <!-- 登录 -->
    <Login v-show="showLoginModal"></Login>
  </div>
</template>
<script>
/**
 * 组件使用3步骤：
 * 1.引入
 * 2.注册
 * 3.使用
 */
// 1.引入
import TopBar from "@/components/TopBar.vue";
import Head from "@/components/Head.vue";
import Footer from "@/components/Footer.vue";
import Login from "@/views/Login.vue";
import {mapState} from 'vuex';
export default {
  components: {
    // 2.注册
    TopBar,
    Head,
    Footer,
    Login
  },
  computed: {
    //利用辅助函数 获取state里面的
    ...mapState(['showLoginModal'])
    
  },
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
