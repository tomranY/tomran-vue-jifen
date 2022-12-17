<template>
  <div class="wrap">
    <ul class="list-ul">
        <!-- 每一个商品 -->
        <!-- $router.push({path:'/detial',query:{id:item.id}})这种写法参数会显示在地址栏上
        id是参数名，item.id是值 等效于$router.push(`/detail?id=${item.id}`)
        $router.push({path:'/detial',param:{id:item.id}})参数不会显示在地址栏上-->
        <li class="list-li" v-for="item,index in list" :key="index"
        @click="$router.push(`/detail?id=${item.id}`)"
        >
           <!-- imgUrl是在main.js里面定义的全局属性，以便后期维护 若在export default中使用要加this-->
            <img :src=" imgUrl+item.coverImg " alt="" >
            <div class="img2">
                <img v-show='item.isHotSale' src="../assets/img/section_hot.png" alt="">
                <img v-show='item.isLatest' src="../assets/img/section_new.png" alt="">
            </div>
            <p class="title">{{item.name}}</p>
            <div class="price">
                <p>{{item.coin}}</p>
                <img src="../assets/img/monad.png" alt="">
            </div>
            <div class="dh">立即兑换</div>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
    props: ['list'],

}
</script>

<style lang="less" scoped>
.list-ul{
    display: grid;
    grid-template-columns: 285px 285px 285px 285px;
    justify-content: space-between;
}
.list-li:hover{
	transform: translateY(-10px); 
    .dh{
        color: white;
        background-color: #0a328e;
    }
}
.list-li{
    
    transition: all 1s;/**过渡 */
    width: 285px;
    height: 515px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    background-color: white;
    cursor: pointer;
    margin-right: 15px;
    /**照片 */
    img{
        width: 285px;
        height: 330px;
    }
    .img2{
        align-self: flex-start;
        position:absolute;
        img{
        width: 50px;
        height: 50px;
        }
    }
    /**标题 */
    .title{
        font-size: 18px;
    }
    /**价钱 */
    .price{
        display: flex;
        justify-content: space-between;
        align-items: center;
        img{
            width: 20px;
            height: 20px;
        }
        p{
            color: #fd604d;
            font-weight: 700;
        }
    }
    /**立即兑换 */
    .dh{
        width: 102px;
        height: 38px;
        line-height: 38px;
        text-align: center;
        color: #0a328e;
        border: 1px solid #0a328e;
        margin-bottom: 30px;
    }
}

</style>