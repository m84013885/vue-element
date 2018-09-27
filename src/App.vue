<template>
  <div id="app">

    <el-container direction="vertical">
      <header_/>  
      <el-container>
        <aside_/>
        <el-container direction="vertical">
          <router-view></router-view>
          <footer_/>
        </el-container>
      </el-container>
    </el-container>

  </div>
</template>

<script>
import header_ from './components/common/header.vue'
import footer_ from './components/common/footer.vue'
import aside_ from './components/common/aside.vue'

export default {
  name: 'app',
  components: {
    header_,
    footer_,
    aside_
  }
}
</script>

<style lang="less">

</style>
