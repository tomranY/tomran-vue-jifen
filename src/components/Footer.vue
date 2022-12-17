<template>
  <div class="footer">
    <div class="wrap footer-wrap">
      <div class="l">
        <img src="@/assets/img/slogan.7730f7f2.png" alt />
        <p>
          叩丁狼是一家专注于培养高级IT技术人才，为学员提供定制化IT职业规划方案及意见咨询服务
          的教育科技公司，
          为您提供海量优质课程，以及创新的线上线下学习体验，帮助您获得全新的个人发展和能力提
          升。
        </p>
      </div>
      <div class="c">
        <ul>
          <li class="relation-text">微信公众号</li>
          <li class="relation-text">新浪微博</li>
          <li class="relation-text footer-waiter">
            <img src="@/assets/img/service.848ec511.png" alt />
            <span>在线客服</span>
          </li>
        </ul>
      </div>
      <div class="r">
        <p>全国免费咨询热线：</p>
        <h2>020-85628002</h2>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.footer {
  font-size: 12px;
  color: #7d879a;
  background-color: #242b39;
  height: 240px;
  .footer-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    /*左边*/
    .l {
      width: 425px;
      height: 240px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      img {
        margin-bottom: 20px;
      }
    }
    /*中间*/
    .c {
      ul {
        display: flex;
        align-items: center;
        font-size: 16px;
        .relation-text {
          padding: 0px 8px;
          border-right: 1px solid #7d879a;
          cursor: pointer;
          &.footer-waiter {
            display: flex;
            border-right: 0px;
            flex-direction: column;
            position: relative;
            img {
              position: absolute;
              display: none;
              top: -110px;
              left: -5px;
            }
          }
          &.footer-waiter:hover > img {
            display: block;
          }
        }
      }
    }
    /*右边*/
    .r {
      p {
        font-size: 16px;
        margin-bottom: 10px;
      }
      h2 {
        font-size: 28px;
        color: white;
      }
    }
  }
}
</style>