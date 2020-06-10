import Vue from 'vue'
import Router from 'vue-router'
import Login from "@/page/Login";
import Test from '@/page/Test';
import UserIndex from '@/page/user/user_index'
import AdminIndex from '@/page/admin/admin_index'
import UserMessage from '@/page/user/user_message'
import GoodsList from '@/page/user/goods_list'
import UserTable from '@/page/admin/user_table'
import GoodsTable1 from '@/page/admin/goods_table1'
import GoodsTable2 from '@/page/admin/goods_table2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },{
      path: '/user_index',
      name: 'UserIndex',
      component: UserIndex,
      children:[
        {
          path: '/personal_message',
          name: 'UserMessage',
          component: UserMessage
        },{
          path: '/goods_list',
          name: 'GoodsList',
          component: GoodsList
        }
      ]
    },
    {
      path: '/admin_index',
      name: 'AdminIndex',
      component: AdminIndex,
      children:[
        {
          path: '/user_table',
          name: 'UserTable',
          component: UserTable
        },{
          path: '/goods_table1',
          name: 'GoodsTable1',
          component: GoodsTable1
        },{
          path: '/goods_table2',
          name: 'GoodsTable2',
          component: GoodsTable2
        }
      ]
    },
  ]
})
