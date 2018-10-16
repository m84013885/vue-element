<template>
    <el-aside id="aside">
        <router-link to="/foo">Go to Foo</router-link><br>
        <router-link to="/bar">Go to Bar</router-link>
    </el-aside>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style lang="less">

</style>
