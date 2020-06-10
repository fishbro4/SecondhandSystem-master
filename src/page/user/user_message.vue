<template>
    <div>
        <el-row>
            <div style="line-height: 25px">
                <el-avatar :size="60" :src="circleUrl"></el-avatar>
                <p style="margin-bottom=500px">{{currentUser.uname}}</p>
                <el-link type="primary" @click="back">退出</el-link>
            </div>
            <div style="line-height: 80px">
            <el-button @click="add" style="line-height: 10px">发布</el-button>
            </div>
        </el-row>
        <el-row>
        <div class="tags" style="line-height: 80px">
        <a @click="getTypeRrel"><el-tag >已发布</el-tag></a>
        <a @click="getTypeSell"><el-tag type="info">已卖出</el-tag></a>
        <a @click="getTypeBuy"><el-tag type="success">已买到</el-tag></a>
        </div>
        </el-row>
        <el-row>
            <div>
            <el-col>
                <el-row :span="8" v-for="item in goods" :key="item.gid">
                <el-card class="box-card" :body-style="{ padding: '20px' }">
                <el-row>
                    <el-col :span="10"><img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image"></el-col>
                    <el-col :span="14">
                    <div style="padding: 14px;">
                    <div style="line-height: 50px">
                    <span>商品名：{{item.gname}}</span>
                    <span>{{item.rdare}}</span>
                    </div>
                    <div style="line-height: 150px"><span>描述：{{item.gtext}}</span></div>
                    <div class="bottom clearfix">
                    <span>价格： {{item.gprice}} 元</span>
                    </div>
                    </div>
                    </el-col>
                </el-row>
                </el-card>
                </el-row>
            </el-col>
            </div>
        </el-row>
        <el-dialog title="发布商品" :visible.sync="addFormVisible" :close-on-click-modal="false">
            <add-form></add-form>
        </el-dialog>
    </div>
</template>

<script>
import {mapState} from 'vuex'
import GoodsAdd from '@/page/user/add_goods'
  export default {
    data () {
      return {
        circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
        //squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
        //size:"50",
        type: null,
        addFormVisible: false,
        goods: []
      }
    },
    components:{
        'add-form':GoodsAdd
    },
    computed: {
      ...mapState(['currentUser'])
    },
     methods: {
        back(){
            this.$router.push('/')
        },
        add(){
            this.addFormVisible = true;
        },
        getTypeRrel(){
            this.$axios.get('/goods/findByUidAndGstate',{
                params:{
                    uid: this.currentUser.uid,
                    gstate: 2
                }
            }).then(response => {
            console.log(response)
            if (response.data.status == 200) {
                this.goods = response.data.data;
            } else {
            }
            }).catch(error => {
            console.error(error)
            })
        },
        getTypeSell(){
            this.$axios.get('/goods/findByUidAndGstate',{
                params:{
                    uid: this.currentUser.uid,
                    gstate: 3
                }
            }).then(response => {
            console.log(response)
            if (response.data.status == 200) {
                this.goods = response.data.data;
            } else {
            }
            }).catch(error => {
            console.error(error)
            })
        },
        getTypeBuy(){
            this.$axios.get('/buy/findByUid',{
                params:{
                    uid: this.currentUser.uid
                }
            }).then(response => {
            console.log(response)
            if (response.data.status == 200) {
                this.goods = response.data.data.goods;
            } else {
            }
            }).catch(error => {
            console.error(error)
            })
        }
     }
  }
  
</script>


<style scoped>
    /* .userMessage{
        height: 300px;
    } */
    .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
    }
</style>