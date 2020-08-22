export default{
	state:{
		list:[
			{
				checked:false,
				id:"1",
				title:"商品标题111",
				cover:"/static/images/demo/list/1.jpg",
				// 选中商品属性
				attrs:[
					{
						title:"颜色",
						selected:0,
						list: [
							{ name:'火焰红', },
							{ name:'炭黑', },
							{ name:'冰川兰', }
						]
					},
					{
						title:"容量",
						selected:0,
						list: [
							{ name:'64GB', },
							{ name:'128GB', },
						]
					},
					{
						title:"套餐",
						selected:0,
						list: [
							{ name:'标配', },
							{ name:'套餐一', },
							{ name:'套餐二', }
						]
					},
				],
				pprice:336,
				num:1,
				minnum:1,
				maxnum:10, // 该商品最大商品数，跟库存有关
			},
			{
				checked:false,
				id:"2",
				title:"商品标题111",
				cover:"/static/images/demo/list/1.jpg",
				// 选中商品属性
				attrs:[
					{
						title:"颜色",
						selected:0,
						list: [
							{ name:'火焰红', },
							{ name:'炭黑', },
							{ name:'冰川兰', }
						]
					},
					{
						title:"容量",
						selected:0,
						list: [
							{ name:'64GB', },
							{ name:'128GB', },
						]
					},
					{
						title:"套餐",
						selected:0,
						list: [
							{ name:'标配', },
							{ name:'套餐一', },
							{ name:'套餐二', }
						]
					},
				],
				pprice:336,
				num:1,
				minnum:1,
				maxnum:10, // 该商品最大商品数，跟库存有关
			}
		],
		// 选中数据的id
		selectedList:[]
	},
	getters:{
		// 判断是否全选
		checkedAll( state ){
			return state.list.length === state.selectedList.length
		},
		// 合计
		totalPrice(state){
			var total = 0
			state.list.forEach((v)=>{
				if( state.selectedList.indexOf(v.id > -1 ) ){
						total+= v.pprice*v.num
				}
			})
			return total
		}
		
	},
	mutations:{
		// 选中或者取消选中某个商品
		selectItem(state,index,getters){
			let id = state.list[index].id
			let i = state.selectedList.indexOf(id)
			if( i>-1 ){  // 已经选中
				state.list[index].checked = false
				return state.selectedList.splice(i,1)
			}
			// 没有选中
			state.list[index].checked = true
			state.selectedList.push(id)
		},
		// 全选
		selectAll(state){
			state.selectedList = state.list.map((v)=>{
				v.checked = true
				return v.id
			})
		},
		unSelectAll(state){
			state.list.forEach((v)=>{
				v.checked = false
			})
			state.selectedList = []
		}
	},
	actions:{
		doSelectAll({commit,getters}){
			getters.checkedAll ? commit('unSelectAll') : commit('selectAll')
		}
	}
}