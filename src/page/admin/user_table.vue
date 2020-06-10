<template>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="uid"
        label="用户编号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="uname"
        label="用户名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="uphone"
        label="电话">
      </el-table-column>
      <el-table-column
        prop="uemail"
        label="邮箱">
      </el-table-column>
      <el-table-column
        prop="uaddress"
        label="地址">
      </el-table-column>
    </el-table>
</template>

<script>
    export default {
      data() {
        return {
          tableData: []
        }
      },
      created(){
          this.$axios.get('/user/findAll',{
          params:{
            ulever: 1
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

