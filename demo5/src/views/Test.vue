<template>
  <div class="test">
    <mt-header title="缴费记录">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <!-- <Grid datas="[]"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import Grid from '@/components/Grid.vue'

export default {
  name: 'test',
  components: {
    Grid
  }
}
</script>
<style lang="scss" scoped>
</style>