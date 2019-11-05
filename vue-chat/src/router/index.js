import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'

import Login from '../components/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
	{
		path: '/chat/:nickname/:roomid/:roomname',
    name: 'Chat',
		component: () => import('../components/Chat.vue')
	},
	{
		path: '/room/:nickname',
    name: 'RoomList',
		component: () => import('../components/Room.vue')
	},
	{
		path: '/add-room',
    name: 'AddRoom',
		component: () => import('../components/AddRoom.vue')
	},
	//  {
	//path: '/about',
	//name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
	//component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
	//}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
