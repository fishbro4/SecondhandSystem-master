<template>
  <el-table
    :data="tableData"
    style="width: 100%"
    max-height="250">
    <el-table-column
      fixed
      prop="gid"
      label="商品编号"
      width="150">
    </el-table-column>
    <el-table-column
      prop="gname"
      label="商品名"
      width="120">
    </el-table-column>
    <el-table-column
      prop="gprice"
      label="商品价格"
      width="120">
    </el-table-column>
    <el-table-column
      prop="gtext"
      label="商品描述"
      width="400">
    </el-table-column>
    <el-table-column
      prop="rdare"
      label="发布日期"
      width="180">
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    methods: {
    },
    data() {
      return {
        tableData: []
      }
    },
    created(){
        this.$axios.get('/goods/findAllByState',{
          params:{
            gstate: 2
          }
        }).then(response => {
          console.log(response)
          if (response.data.status == 200) {
            this.tableData = response.data.data;
            console.log(this.tableData)
          } else {
          }
        }).catch(error => {
          console.error(error)
        })
    }
  }
</script>