<template>
  <div id="app">
    <router-view></router-view>
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="PayPage">
        <img slot="icon" src="./assets/logo.png" />
        待缴费
      </mt-tab-item>
      <mt-tab-item id="OdersPage">
        <img slot="icon" src="./assets/logo.png" />
        缴费记录
      </mt-tab-item>
      <mt-tab-item id="UserCenterPage">
        <img slot="icon" src="./assets/logo.png" />
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selected: "PayPage"
    };
  },
  watch: {
    selected: function(val, oldVal) {
      // 这里就可以通过 val 的值变更来确定去向
      switch (val) {
        case "PayPage":
          this.$router.replace("/");
          break;
        case "OdersPage":
          this.$router.replace("/orders");
          break;
        case "UserCenterPage":
          this.$router.replace("/user");
          break;
      }
    }
  }
};
</script>
<style lang="scss">
#app {
  .mt-tab-item {
    img {
      width: 30px;
      height: 30px;
    }
  }
}
</style>
