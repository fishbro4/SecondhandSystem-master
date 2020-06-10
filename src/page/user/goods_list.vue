<template>
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
                    <el-button type="text" class="button" @click="buy(item.gid,item.gprice)">购买</el-button>
                    </div>
                </div>
            </el-col>
        </el-row>
    </el-card>
    </el-row>
</el-col>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data() {
    return {
      goods: []
    };
  },
  computed: {
      ...mapState(['currentUser'])
  },
  created(){
      this.$axios.get('/goods/findAllGoods').then(response => {
          console.log(response)
          if (response.data.status == 200) {
            this.goods = response.data.data;
          } else {
          }
        }).catch(error => {
          console.error(error)
        })
  },
  methods: {
    buy(gid,price){
        this.$axios.get('/buy',{
          params:{
            uid: this.currentUser.uid,
            gid: gid  
          }
        }).then(response => {
          console.log(response)
          if (response.data.status == 200) {
            this.products = response.data.data;
            this.$message.success("支付"+price+"元")
          } else {
          }
        }).catch(error => {
          console.error(error)
        })
      }
    }
}
</script>

<style>
  .box-card {
    height: 300px;
    width: 800px;
    margin-left: 350px;
    margin-top: 50px;
  }

  .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 80%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }

</style>


