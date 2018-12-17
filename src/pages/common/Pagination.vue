<template>
  <el-pagination
    :pageSize="20"
    :pagerCount="11"
    layout="prev, pager, next"
    :total="1000">
  </el-pagination>
</template>
<script>
export default {
  name : 'pagination',
  data () {
    return {
      pageSize : 20,
      pagerCount : 11,
      total : 1000
    }
  }
}
</script>