<template>
  <div class="wrap">
    <ul class="list-ul">
        <li class="list-li" v-for="item,index in list" :key="index" @click="changeShowLoginModal(true)">
            <img :src="item.img" alt="">
            <div class="title">
                {{item.doThing}}
                <p>{{item.title}}</p>
            </div>
        </li>
    </ul>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    data(){
        return{
            
        }
    },
    props: ['list'],
    methods: {
    ...mapMutations(['changeShowLoginModal'])

  },
}
</script>

<style lang="less" scoped>
// .wrap{
//     background-color:#ffffff;
// }
.list-ul{
    display: grid;
    grid-template-columns: 285px 285px 285px 285px;
    justify-content: space-between;
    margin-bottom: 47px;
}

.list-li{
    position: relative;
    overflow: hidden;
    width: 285px;
    height: 168px;
    margin-right: 19px;
    margin-top: -10px;
    cursor: pointer;
}
.list-li:hover img{
    transform: scale(1.1,1.1);
    transition: all .2s ease;
}
.title{
    position: absolute;
    top: 20px;
    left: 20px;
    margin-top: 20px;
    font-size: 24px;
    color: #ffffff;
    p{
    margin-top: 15px;
    width: 96px;
    height: 27px;
    line-height: 27px;
    display: block;
    font-size: 16px;
    text-align: center;
    border: solid 1px #ffffff;
    }
}
</style>