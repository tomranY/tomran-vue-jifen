import { signInsAPI, userProfilesAPI } from '@/request/api';
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {//定义数据
    isToday:0,
    showLoginModal:false,//登录框是否显示
    IsLogined:localStorage.getItem("x-auth-token")?true:false,//登录状态
    cartTotal:0,//购物车数量
    userInfo:{
      nickName:'游客',//用户昵称，未登录游客
      coin:0,//积分，未登录0积分
      headImg:require('@/assets/img/userImg.f8bbec5e.png'),//头像
    }
  },
  getters: {//类比计算属性
  },  
  mutations: {//唯一可以改变数据的地方
    changeCartTotal(state,val){//修改购物车数量
      state.cartTotal=val;
    },
    changeUserInfo(state,val){//修改用户信息
      state.userInfo=val;
    },
    changeShowLoginModal(state,val){
      //state是上面的state对象 val是传入的参数
      state.showLoginModal = val;
    },
    changeIsLogined(state,val){
      state.IsLogined = val;
    },
    changeIsToday(state,val){
      state.isToday = val;
    }
  },
  actions: {//异步获取数据的地方  发送请求获取数据
    async getUserInfo(context){//context相当于store
      let res = await userProfilesAPI();//发送请求获取数据
      console.log("获取用户数据",res);
      //改变vuex里面的数据
      context.commit('changeCartTotal',res.data.cartTotal);//调用mutation修改购物车
      context.commit('changeUserInfo',res.data.userInfo);//调用mutation修改用户
      
    },
    // async sign(context){//context相当于store
    //   let res = await signInsAPI();//发送请求获取数据
    //   console.log("index的签到信息",res);
    //   //改变vuex里面的数据
    //   context.commit('changeCartTotal', );//调用mutation修改购物车
      
    // }

  },
  modules: {//模块
  }
})
