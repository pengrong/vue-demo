<template>
  <div class="order-info">
    <mt-header :title="ordername">
      <router-link to="" slot="left">
        <mt-button icon="back" @click.native="$router.back(-1)">返回</mt-button>
      </router-link>
    </mt-header>
    <h1>
      <v-icon name="building" color="#26a2ff"></v-icon>
      {{ordername}}
    </h1>
    <mt-cell title="应缴金额">
      <span class="order-money">{{ordermoney}}</span>
    </mt-cell>
    <mt-cell title="缴费单位" :value="orderunit"></mt-cell>
    <mt-cell title="缴费户号" :value="orderno"></mt-cell>
    <mt-cell title="户名" :value="householder"></mt-cell>
    <mt-cell title="住址信息" :value="orderaddress"></mt-cell>
    <mt-button type="primary" size="large">立即缴费</mt-button>
  </div>
</template>
<script>
export default {
  name: "OrderInfo",
  data() {
    return {
      id: this.$route.params.id,
      ordername: "物业费",
      ordermoney: 765,
      orderunit: "济南热力集团有限公司",
      orderno: "123456789",
      householder: "*荣",
      orderaddress: "一期一号楼1单元101"
    };
  }
};
</script>
<style lang="scss" scoped>
.order-info {
  h1 {
    .fa-icon {
      width: 35px;
      height: 35px;
      vertical-align: bottom;
    }
  }
  .order-money {
    font-size: 40px;
    font-weight: bolder;
  }
}
</style>