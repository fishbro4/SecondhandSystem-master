<template>
	<section>
		<!--新增界面-->
			<el-form :model="addForm" label-width="80px" :rules="addFormRules" ref="addForm">
				<el-form-item label="商品名" prop="gname">
					<el-input v-model="addForm.gname" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="图片地址" prop="gpicture">
					<el-input v-model="addForm.gpicture" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="商品描述" prop="gtext">
					<el-input v-model="addForm.gtext" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="商品价格" prop="gprice">
					<el-input v-model="addForm.gprice" auto-complete="off" type="number"></el-input>
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
					gname:'',
					gpicture: '',
					gtext:'',
					gprice: ''
				}

			}
		},
		methods: {
			addSubmit(){
				this.$axios.get('/goods/add', {
                params: {
                gname: this.addForm.gname,
                gpicture: this.addForm.gpicture,
                gtext: this.addForm.gtext,
                gprice: this.addForm.gprice,
                uid: this.currentUser.uid
                }
                }).then(response => {
                console.log(response)
                if (response.data.status == 200) {
                    this.$message.success("提交成功")
                } else {
                    this.$message.error("提交失败")
                }
                }).catch(error => {
                console.error(error)
                this.$message.error("提交失败")
			})
			this.addFormVisible=false,
            this.addForm={};
        }
    },
    computed: {
      ...mapState(['currentUser'])
    }
	}
</script>