import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
	state:{
		a:1,
		list:[
			{
				id:1,status:true
			},
			{
				id:2,status:false
			},
			{
				id:3,status:true
			},
			{
				id:4,status:true
			}
		]
	},
	getters:{
		// 类似于计算属性
		activeList:(state)=>{
			return state.list.filter((item)=>item.status)
		},
		getList:(state,getters)=>{
			return getters.activeList.filter((item)=>{
				return item.id >= 3
			})
		}
	},
	mutations:{
		// 异步
		inc(state){
			state.a ++
		}
		
	},
	actions:{
		// 同步
		asyncInc(context){
			setInterval(()=>{
				context.commit('inc')
			},2000)
		}
	}
})