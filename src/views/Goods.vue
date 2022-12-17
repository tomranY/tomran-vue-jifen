<template>
  <div class="goods">
    <div class="wrap">
      <!--导航框-->
      <!-- <Crumb> </Crumb> -->
      <img src="../assets/img/banner.4c6b6225.png" width="100%" alt />
      <ul class="options">
        <li>
          <strong>排序：</strong>
          <span :class="orderActive==index?'active':''"
          @click="orderClick(index,item.min,item.max)"
          v-for="item,index in orderArr" :key="index"
          >{{item.txt}}</span>
          
        </li>
        <li>
          <strong>分类：</strong>
          <span :class="classifyActive==index?'active':''" v-for="item,index in classifyArr"
          @click="classifyClick(index,item.type)"
           :key="index">{{item.txt}}</span>
        </li>
      </ul>
      <!--商品详情信息-->
      <List :list="goodsList"></List>
    </div>
  </div>
</template>                            
<script>
import {GoodsSearchAPI} from '../request/api'
import List from '../components/List.vue'
export default {
  data() {
    return {
      //栏目，1是精品，2是热门，0是全部
      did:0,
      //类型，1是实体，2是虚拟，0是全部
      type:0,
      //最少积分，需要大于它
      min:0,
      //最多积分，当传入的是0，会直接返回所有商品，无视后台逻辑
      max:0,
      //搜索关键字
      keyword:this.$route.query.keyword,
      //存放商品的
      goodsList:[],
      //定义存储分类数据的数组
      classifyArr:[
        {txt:'全部',type:0},
        {txt:'实物礼品',type:1},
        {txt:'虚拟礼品',type:2}
      ],
      classifyActive:0, //分类当前项
      //定义排序
      orderArr:[
        {txt:'全部',min:0,max:10000},
        {txt:'我还可以兑换',min:0,max:0},
        {txt:'0-500个',min:0,max:500},
        {txt:'500-1000个',min:500,max:1000},
        {txt:'1000-1500个',min:1000,max:1500},
        {txt:'1500-2500个',min:1500,max:2500},
      ],
      orderActive:0,//排序当前项
        
    };
  },
  components: {
    List
  },
  methods: {
    orderClick(index,min,max){
        this.orderActive = index;
        this.min = min;
        this.max = max;
        this.goodsSearch();
    },
    classifyClick(index,type){
      //把分类的当前项改了 更新为当前索引
      this.classifyActive = index;
      this.type = type;//更新分类
      //调用发送请求刷新数据
      this.goodsSearch();
    },
   async goodsSearch(){
    //发送商品搜索的请求
      let res = await GoodsSearchAPI({
        did:this.did,
        type:this.type,
        min:this.min,
        max:this.max,
        keyword:this.keyword||this.$route.query.keyword
      });
      console.log("搜索后的商品：",res);
      this.goodsList = res.data;//所有商品数据更新
    }
  },
  watch: {
    "$route.query.keyword":{//监听里面是否有keyword
        handler(){
            this.goodsSearch();
        }
    }
  },
  created(){
    this.goodsSearch();//调用发送请求的方法
      
  }
};
</script>
 
<style lang = "less" scoped>
.goods {
  text-align: left;
  padding-bottom: 50px;
  background: #efefef;
  padding-top: 20px;
  .options {
    padding-top: 20px;
    padding-bottom: 40px;
    li {
      margin-top: 20px;
      strong {
        color: #000;
        font-weight: bold;
      }
      span {
        margin-right: 20px;
        margin-left: 10px;
        cursor: pointer;
        color: #999;
        &.active {
          color: #0a328e;
          font-weight: bold;
        }
      }
    }
  }
}
</style>