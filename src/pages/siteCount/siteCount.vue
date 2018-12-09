<template>
  <el-container direction="vertical" style="height: 700px; border: 1px solid #eee">
    <CommonHeader />
    <el-container direction="horizontal">
      <CommonSider />
      <SiteInfo />
    </el-container>
  </el-container>
</template>
<style lang="stylus" scoped>
</style>
<script>
import CommonHeader from '../common/CommonHeader'
import CommonSider from '../common/CommonSider'
import SiteInfo from './components/SiteInfo'
import CommonFooter from '../common/CommonFooter'
export default {
  name : "siteCount",
  data () {
    return {
      msg : ""
    }
  },
  components : {
    CommonHeader,
    CommonSider,
    SiteInfo,
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