<template>
  <div class="orders">
    <mt-header title="缴费记录">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <mt-loadmore
      :top-method="loadTop"
      :bottom-method="loadBottom"
      :bottom-all-loaded="allLoaded"
      ref="loadmore"
    >
      <mt-cell
        v-for="item in datas"
        :title="item.payname"
        :label="item.paytime"
        is-link
        v-bind:key="item.id"
        :to="'/orderinfo/'+item.id"
      >
        <span style="font-weight:bolder;color:black;">{{item.paymoney}}</span>
      </mt-cell>
    </mt-loadmore>
  </div>
</template>

<script>
export default {
  name: "orders",
  data() {
    return {
      datas: [
        {
          id: "1",
          uid: "1",
          billtype: "多层物业费",
          billstime: "2019-01-01",
          billetime: "2019-01-31",
          unitprice: 1,
          quantity: 100,
          totalprice: 100,
          haspay: true,
          paytime: "2019-01-10 10:10:10"
        },
        {
          id: "2",
          uid: "1",
          billtype: "多层物业费",
          billstime: "2019-02-01",
          billetime: "2019-02-31",
          unitprice: 1,
          quantity: 100,
          totalprice: 100,
          haspay: true,
          paytime: "2019-01-10 10:10:10"
        }
      ],
      allLoaded: false
    };
  },

  methods: {
    toDetail(id) {
      this.$router.push({ "path": "/orderinfo/" + id });
    },
    loadTop() {
      // 加载更多数据
      this.$refs.loadmore.onTopLoaded();
    },
    loadBottom() {
      // 加载更多数据
      this.allLoaded = true; // 若数据已全部获取完毕
      this.$refs.loadmore.onBottomLoaded();
    }
  }
};
</script>
<style lang="scss" scoped>
</style>