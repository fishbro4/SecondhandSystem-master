<template>
<div>
  <el-form :model="loginForm" :rules="rules" ref="loginForm" label-width="100px" class="demo-ruleForm" style="width: 30%;margin-left:500px;margin-top:200px" align="center">
  <h2>校园二手系统</h2>
  <el-form-item label="用户名" prop="name">
    <el-input v-model="loginForm.name"></el-input>
  </el-form-item>
  <el-form-item label="密码" prop="password">
    <el-input :type="pwdType" v-model="loginForm.password" autocomplete="off">
      <span slot="suffix" @click="showPwd">
        <svg-icon icon-class="eye" class="el-icon-view"></svg-icon>
      </span>
    </el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" :loading="loading" @click="handleLogin">登录</el-button>
    <el-button type="primary" :loading="loading" @click="handleSignIn">注册</el-button>
  </el-form-item>
  </el-form>
  <el-dialog title="注册信息" :visible.sync="addFormVisible" :close-on-click-modal="false">
    <add-form></add-form>
  </el-dialog>
</div>
</template>

<script>
import UserAdd from '@/page/user/user_signin'
  export default {
    name: "Login",
    data() {
      return {
        loginForm: {
          name: '',
          password: ''
        },
        pwdType: "password",
        addFormVisible:false,
        rules: {
          name: [
            { required: true, message: '请输入用户名', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ]
        }
      };
    },
    components:{
        'add-form':UserAdd
    },
    methods: {
      showPwd() {
        if (this.pwdType === "password") {
          this.pwdType = "";
        } else {
          this.pwdType = "password";
        }
      },
      handleLogin() {
        let that = this;
        this.$axios.post('/login', {
          name: this.loginForm.name,
          password: this.loginForm.password
        }).then(function (response) {
          console.log(response)
          if (response.data.status == 200) {
            let currentUser = response.data.data;
            that.$store.dispatch('setCurrentUser', currentUser);
            that.$message.success('Hello ' + currentUser.uname);
            if(currentUser.ulever == 2){
              that.$router.push('/admin_index')
            }else{
              that.$router.push('/user_index')
            }
          } else {
            console.log(response.data.message)
            this.$message.error("登录失败，请检查用户名和密码")
          }
        }).catch(error => {
          console.log(error)
          this.$message.error("登录失败")
        })
      },
      handleSignIn(){
        this.addFormVisible = true;
      }
    }
  }
</script>