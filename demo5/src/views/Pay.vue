<template>
  <div class="pay">
    <mt-header title="待缴费">
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
      <ul class="mui-table-view">
        <li class="mui-table-view-cell" v-for="item in datas" v-bind:key="item.id">
          <div class="mui-checkbox">
            <input type="checkbox" @click="updateBill($event,item)" />
            <div class="mui-checkbox-label">
              <span>{{item.billtype}}</span>
              <span>￥{{item.totalprice}}</span>
            </div>
          </div>
          <div class="content">
            <p>
              <span>{{item.billstime}} 至 {{item.billetime}}</span>
              <span>单价：{{item.unitprice}}元</span>
              <span>使用量：{{item.quantity}}</span>
            </p>
          </div>
        </li>
      </ul>
    </mt-loadmore>

    <div class="total">
      <span>总计：{{total}}</span>
      <mt-button type="primary" size="small">付款</mt-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "pay",
  data() {
    return {
      //UID	ID	账单种类	费用开始时间	费用结束时间	单价	使用量	总价	是否缴费	缴费时间
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
          haspay: false,
          paytime: ""
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
          haspay: false,
          paytime: ""
        },
        {
          id: "3",
          uid: "1",
          billtype: "多层物业费",
          billstime: "2019-02-01",
          billetime: "2019-02-31",
          unitprice: 1,
          quantity: 100,
          totalprice: 100,
          haspay: false,
          paytime: ""
        },
        {
          id: "4",
          uid: "1",
          billtype: "多层物业费",
          billstime: "2019-02-01",
          billetime: "2019-02-31",
          unitprice: 1,
          quantity: 100,
          totalprice: 100,
          haspay: false,
          paytime: ""
        },
        {
          id: "5",
          uid: "1",
          billtype: "多层物业费",
          billstime: "2019-02-01",
          billetime: "2019-02-31",
          unitprice: 1,
          quantity: 100,
          totalprice: 100,
          haspay: false,
          paytime: ""
        },
        {
          id: "6",
          uid: "1",
          billtype: "多层物业费",
          billstime: "2019-02-01",
          billetime: "2019-02-31",
          unitprice: 1,
          quantity: 100,
          totalprice: 100,
          haspay: false,
          paytime: ""
        },
        {
          id: "7",
          uid: "1",
          billtype: "多层物业费",
          billstime: "2019-02-01",
          billetime: "2019-02-31",
          unitprice: 1,
          quantity: 100,
          totalprice: 100,
          haspay: false,
          paytime: ""
        },
        {
          id: "8",
          uid: "1",
          billtype: "多层物业费",
          billstime: "2019-02-01",
          billetime: "2019-02-31",
          unitprice: 1,
          quantity: 100,
          totalprice: 100,
          haspay: false,
          paytime: ""
        },
        {
          id: "9",
          uid: "1",
          billtype: "多层物业费",
          billstime: "2019-02-01",
          billetime: "2019-02-31",
          unitprice: 1,
          quantity: 100,
          totalprice: 100,
          haspay: false,
          paytime: ""
        }
      ],
      allLoaded: false
    };
  },
  computed: {
    total() {
      console.log(this.datas);
      var t = 0;
      this.datas.forEach(data => {
        if (data.haspay) {
          t += data.totalprice;
        }
      });
      return t;
    }
  },
  methods: {
    updateBill(e, item) {
      item.haspay = e.target.checked;
    },
    toDetail(id) {
      this.$router.push({ path: "/orderinfo/" + id });
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
.pay {
  .mui-table-view {
    height: 510px;
    overflow: auto;
    .mui-checkbox {
      input {
        top: -4px;
      }
      .mui-checkbox-label {
        display: flex;
        justify-content: space-between;
        width: 80%;
      }
    }
  }
  .content {
    p {
      font-size: 80%;
      display: flex;
      justify-content: space-between;
    }
  }
  .total {
    position: absolute;
    bottom: 60px;
    padding: 11px 15px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    span {
      vertical-align: middle;
    }
  }
}
</style>
