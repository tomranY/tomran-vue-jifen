<template>
  <div class="home">
    <!-- banner轮播图 -->
    <!-- 传值给MySwiper,取名为img -->
    <MySwiper :img="swiperImage"></MySwiper>

    <Title title="精品推荐" :boolean="true">
      <img src="../assets/img/jingpin.png" alt />
    </Title>
    <!-- 商品展示 -->
    <List :list="productInfo"></List>

    <Title title="热门兑换" :boolean="true">
      <img src="../assets/img/hot.png" alt />
    </Title>
    <img style="margin-bottom: 20px;" src="../assets/img/banner.4c6b6225.png" alt />
    <!-- 商品展示 -->
    <List :list="hotInfo"></List>

    <div class="strategy">
      <Title title="鸡腿攻略" :boolean="0">
        <img src="../assets/img/score.png" alt />
      </Title>
      <Strategy :list="drumstickInfo"></Strategy>
    </div>
  </div>
</template>

<script>
import MySwiper from "../components/home/MySwiper.vue";
import Title from "../components/home/Title.vue";
import List from "../components/List.vue";
import Strategy from "../components/Strategy.vue";
import { JinPinAPI } from "../request/api.js";
import { ReMenAPI } from "../request/api.js";

export default {
  name: "HomeView",
  async created() {
    //自动执行
    //获取精品推荐的数据
    let response1 = await JinPinAPI(); //等待该操作执行完再执行后面
    console.log("response1:", response1.data.data.records);
    this.productInfo = response1.data.data.records;

    let response2 = await ReMenAPI();
    console.log("response2", response2.data.data.records);
    this.hotInfo = response2.data.data.records;
  },
  data() {
    return {
      swiperImage: [
        "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Flmg.jj20.com%2Fup%2Fallimg%2F4k%2Fs%2F01%2F210924113GMQ8-0-lp.jpg&refer=http%3A%2F%2Flmg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1671690769&t=6630f1da7fb5b3646e99f84986249aac",
        "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F6%2F57b6799d63dcb.jpg&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1671690769&t=6ab6206d5b532a1104c9ac2a22c53d5e",
        "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg9.51tietu.net%2Fpic%2F2019-091308%2Ffugywcojmfqfugywcojmfq.jpg&refer=http%3A%2F%2Fimg9.51tietu.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1671690769&t=753c065468399616d8ed2cdc7a653fa0"
      ],
      //精品推荐数据
      productInfo: {},
      //热门推荐数据
      hotInfo: {},
      //鸡腿攻略数据
      drumstickInfo:[
          {img:require('../assets/img/integral-01.9386d4bf.png'),doThing:'签到得鸡腿',title:'去签到'},
          {img:require('../assets/img/integral-02.150d92a1.png'),doThing:'购课得鸡腿',title:'去购课'},
          {img:require('../assets/img/integral-03.9870f3f1.png'),doThing:'推荐得鸡腿',title:'去推荐'},
          {img:require('../assets/img/integral-04.afadcbdf.png'),doThing:'做任务得鸡腿',title:'做任务'},
            ],
    };
  },
  components: {
    MySwiper,
    Title,
    List,
    Strategy
  }
};
</script>
<style lang = "less" scoped>
.strategy {
  margin-top: 30px;
  padding-top: 20px;
  background-color: white;
}
.home {
  background-color: #f5f5f5;
}
</style>
