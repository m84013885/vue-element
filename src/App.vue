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
#app>section{
    position: absolute;
    height: 100%;
    width: 100%;
}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header,
menu, nav, output, ruby, section, summary,
time, mark, audio, video, input {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font-weight: normal;
  vertical-align: baseline
}

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, menu, nav, section {
  display: block
}

body {
  line-height: 1
}

blockquote, q {
  quotes: none
}

blockquote:before, blockquote:after,
q:before, q:after {
  content: none

}

table {
  border-collapse: collapse;
  border-spacing: 0
}

/* custom */

a {
  color: #7e8c8d;
  -webkit-backface-visibility: hidden;
  text-decoration: none
}

li {
  list-style: none
}

body {
  -webkit-text-size-adjust: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0)
}

body, html{
  line-height: 1;
  font-family: 'PingFang SC', 'STHeitiSC-Light', 'Helvetica-Light', arial, sans-serif, 'Droid Sans Fallback';
  user-select: none;
  -webkit-tap-highlight-color: transparent;
}

textarea {
  resize: none;
  outline: 0;
}

input {
  outline: 0;
}
button {
  outline: 0;
}

</style>
