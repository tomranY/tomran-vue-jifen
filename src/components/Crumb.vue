<template>
  <div class="crumb">
    <span v-for="item,index in nav" :key="index">
      <!-- 判断颜色，最后一个加黑色，不是最后一个灰色 -->
      <span :style="{color:index!=nav.length-1?'#999999':'#000000'}">{{item.name}}</span>
      <!-- 判断下标是否不是最后一个，如果不是则添加 -->
      <i v-show="index!=nav.length-1">/</i>
    </span>
  </div>
</template>

<script>
export default {
    props: ['nav'],
}
</script>

<style lang="less" scoped>
.crumb{
  text-align: left;
  margin-bottom: 20px;
  margin-top: 20px;
  span{
    font-size: 16px;
  }
  i{
    margin-left: 8px;
    margin-right: 8px;
  }
}
</style>