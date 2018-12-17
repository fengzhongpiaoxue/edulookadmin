<template>
  <el-container direction="vertical" style="height: 700px; border: 1px solid #eee">
    <CommonHeader />
    <el-container direction="horizontal">
      <CommonSider />
      <Component :is="name" />
    </el-container>
  </el-container>
</template>
<style lang="stylus" scoped>
</style>
<script>
import CommonHeader from '../common/CommonHeader'
import CommonSider from '../common/CommonSider'
import SiteInfo from './components/SiteArticle'
import SiteEchart from './components/SiteEcharts'
import CommonFooter from '../common/CommonFooter'
export default {
  name : 'siteCount',
  data () {
    return {
      type : "",
      name : "SiteEchart"
    }
  },
  components : {
    CommonHeader,
    CommonSider,
    SiteInfo,
    SiteEchart,
    CommonFooter
  }
}
</script>
<style lang="stylus" scoped>
  .el-header
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  .el-aside
    color: #333;
</style>