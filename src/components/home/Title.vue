<template>
  <div class="title wrap">
    <!--左边-->
    <div class="l">
      <!--设置插槽,将左边的照片做为插槽-->
      <slot></slot>
      <div>{{title}}</div>
    </div>
    <!--右边-->
    <div class="r" v-if="boolean">
      <div>更多</div>
      <img src="@/assets/img/arrow.png" alt />
    </div>
  </div>
</template>

<script>
export default {
    props: ['title','boolean'],

};
</script>

<style lang="less" scoped>
.title {
  padding-top: 30px;
  height: 40px;
  line-height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  .l {
    height: 40px;
    display: flex;
    align-items: center;
    div {
      margin-left: 10px;
      font-size: 30px;
      color: #242b39;
    }
  }
  .r {
    cursor: pointer;
    display: flex;
    align-items: center;
    font-size: 14px;
    color: #666666;
    div {
      margin-right: 5px;
    }
  }
}
</style>