<template>
    <el-container>
        <el-header>
            <el-menu :default-active="activeIndex" router class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
              <el-row :gutter="20">
              <el-col :span="12"><el-menu-item index="/goods_list">首页</el-menu-item></el-col>
              <el-col :span="12"><el-menu-item index="/personal_message" >个人中心</el-menu-item></el-col>
              </el-row>
            </el-menu>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
    </el-container>
</template>

<style scoped>
    .el-header, .el-footer {
    text-align: center;
    line-height: 60px;
    }
    
    .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
    }

</style>

<script>
export default {
    data() {
      return {
        activeIndex: '1',
        squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png"
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
    }
}
</script>