<template>
  <el-container style="height: 500px; border: 1px solid #eee">
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu router @select="handleSelect" :default-openeds="['1', '2']" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>用户管理</template>
          <el-menu-item index="/user_table">用户信息</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-menu"></i>商品管理</template>
          <el-menu-item index="/goods_table1">待审核</el-menu-item>
          <el-menu-item index="/goods_table2">已审核</el-menu-item> 
      </el-submenu>
    </el-menu>
  </el-aside>
  
  <el-container>
    <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click.native="back">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>{{currentUser.uname}}</span>
    </el-header>
    
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</el-container>
</template>

<script>
import {mapState} from 'vuex'
  export default {
    data() {
      return {

      }
    },
    computed: {
      ...mapState(['currentUser'])
    },
    methods:{
      back(){
            this.$router.push('/')
      },
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
    }
  }
</script>

<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
</style>