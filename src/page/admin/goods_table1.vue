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
    <el-table-column
      fixed="right"
      label="操作"
      width="120">
      <template slot-scope="scope">
        <el-button
          @click.native.prevent="pass(scope.row.gid)"
          type="text"
          size="small">
          通过
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    methods: {
      pass(gid) {
        this.$axios.get('/goods/release', {
          params: {
            gid: gid,
          }
        }).then(response => {
          console.log(response)
          if (response.data.status == 200) {
            this.$message.success(gid+"号商品审核通过")
          } else {
            this.$message.error("提交失败")
          }
        }).catch(error => {
          console.error(error)
          this.$message.error("提交失败")
        })
      }
    },
    data() {
      return {
        tableData: []
      }
    },
    created(){
        this.$axios.get('/goods/findAllByState',{
          params:{
            gstate: 1
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