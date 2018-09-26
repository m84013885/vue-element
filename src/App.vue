<template>
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

</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import header_ from './components/common/header.vue'
import footer_ from './components/common/footer.vue'
import aside_ from './components/common/aside.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    header_,
    footer_,
    aside_
  }
}
</script>

<style lang="less">

</style>
