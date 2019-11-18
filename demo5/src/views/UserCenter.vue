<template>
  <div class="userinfo">
    <mt-header title="用户信息">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <h1>用户信息</h1>
    <div class="cell">
      <span>姓名</span>
      <span>{{user.name}}</span>
    </div>
    <div class="cell">
      <span>位置</span>
      <span>{{user.location}}</span>
    </div>
    <mt-checklist title="" v-model="value" :options="options"></mt-checklist>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: {
        id: "1",
        name: "彭荣",
        location: "一期一号楼一单元101号"
      },
      value: ["值A"],
      options: [
        {
          label: "选项A",
          value: "值A"
        },
        {
          label: "选项B",
          value: "值B"
        }
      ]
    };
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
.userinfo {
  .cell {
    display: flex;
    justify-content: space-between;
  }
}
</style>