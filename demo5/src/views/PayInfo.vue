<template>
  <div class="pay-info">
    <mt-header :title="payname">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <h1>
      <v-icon name="building" color="#26a2ff"></v-icon>
      {{payname}}
    </h1>
    <mt-cell title="应缴金额">
      <span class="pay-money">{{paymoney}}</span>
    </mt-cell>
    <mt-cell title="缴费单位" :value="payunit"></mt-cell>
    <mt-cell title="缴费户号" :value="payno"></mt-cell>
    <mt-cell title="户名" :value="householder"></mt-cell>
    <mt-cell title="住址信息" :value="payaddress"></mt-cell>
    <mt-button type="primary" size="large">立即缴费</mt-button>
  </div>
</template>
<script>
export default {
  name: "PayInfo",
  data() {
    return {
      id: this.$route.params.id,
      payname: "物业费",
      paymoney: 765,
      payunit: "济南热力集团有限公司",
      payno: "123456789",
      householder: "*荣",
      payaddress: "一期一号楼1单元101"
    };
  }
};
</script>
<style lang="scss" scoped>
.pay-info {
  h1 {
    .fa-icon {
      width: 35px;
      height: 35px;
      vertical-align: bottom;
    }
  }
  .pay-money {
    font-size: 40px;
    font-weight: bolder;
  }
}
</style>