<template>
	<section>
		<!--新增界面-->
			<el-form :model="addForm" label-width="80px" :rules="addFormRules" ref="addForm">
				<el-form-item label="用户名" prop="name">
					<el-input v-model="addForm.uname" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="密码" prop="password">
					<el-input v-model="addForm.upassword" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="电话" prop="phone">
					<el-input v-model="addForm.uphone" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="邮箱" prop="email">
					<el-input v-model="addForm.uemail" auto-complete="off"></el-input>
				</el-form-item>
                <el-form-item label="地址" prop="address">
					<el-input v-model="addForm.uaddress" auto-complete="off"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer" style="text-align:center">
				<el-button>取消</el-button>
				<el-button type="primary" @click="addSubmit">提交</el-button>
			</div>
	</section>
</template>

<script>
import {mapState} from 'vuex'
	export default {
		name:'add_dialog',
		data() {
			return {
				//新增界面数据
				addForm: {
					name:'',
					password: '',
					phone:'',
					email: '',
					address: ''
				}

			}
		},
		methods: {
			addSubmit(){
				this.$axios.get('/user/add', {
                params: {
                uname: this.addForm.uname,
                upassword: this.addForm.upassword,
                uphone: this.addForm.uphone,
                uemail: this.addForm.uemail,
                uaddress: this.addForm.uaddress
            }
            }).then(response => {
            console.log(response)
            if (response.data.status == 200) {
                this.$message.success("注册成功")
                this.$router.push('/')
            } else {
                this.$message.error("提交失败")
            }
            }).catch(error => {
            console.error(error)
            this.$message.error("提交失败")
			})
			this.addForm={}
        }
    },
    computed: {
      ...mapState(['currentUser'])
    }
	}
</script>