<template>
    <div>
        <table>
            <tr>
                <td>用户编号</td>
                <td>用户密码</td>
                <td>电话</td>
                <td>邮件</td>
                <td>地址</td>
            </tr>
            <tr v-for="item in user" :key="item.uid">
                <td>{{item.uid}}</td>
                <td>{{item.uname}}</td>
                <td>{{item.uphone}}</td>
                <td>{{item.uemail}}</td>
                <td>{{item.uaddress}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    name:"Test",
    data(){
        return{
            user:[]
        }
    },
    created(){
        //let that = this;
        this.$axios.get('findAll').then(resp=>{
            this.user = resp.data
        })
        // axios.get('http://localhost:8081/user/findAll').then(resp=>{
        //     this.user = resp.data
        // })
    }
}
</script>