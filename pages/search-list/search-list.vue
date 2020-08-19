<template>
	<view>
		 <view class="d-flex border-top border-bottom a-center" style="height: 100upx;">
				<view class="flex-1 a-center j-center d-flex " v-for="(item,index) in screen.list" :key="index"
					@tap="changeScreen(index)">
					<text :class="screen.currentIndex === index ?'main-text-color':'text-muted'">{{item.name}}</text>
					<view >
						<view class="iconfont icon-shijiantoushang" :class="item.status === 1 ? 'main-text-color':'text-muted'" style="line-height: 0.7;"></view>
						<view class="iconfont icon-shijiantouxia" :class="item.status === 2 ? 'main-text-color':'text-muted'" style="line-height: 0.7;"></view>
					</view>
				</view>

				<view class="flex-1 a-center j-center d-flex" @tap="open ">
					<text class="text-muted">综合</text>
				</view>
		 </view>
		 <uniDrawer :visible="showRight" mode="right" @close="showRight = false" >
				<cusRadioGroup :radioList="label" @change="change"></cusRadioGroup>	
				<view class="d-flex position-fixed bottom-0 right-0 w-100">
					<view class="flex-1 main-bg-color text-white font-md py-2 text-center">确定</view>
					<view class="flex-1 font-md py-2 text-center">充值</view>
				</view>
		 </uniDrawer>
		 
		 <!--  列表组件  -->
		  <view>
				<searchList :goodsList="goodsList"></searchList>
		  </view> 
	</view>
</template>

<script>
	import uniDrawer from "@/components/uni-ui/drawer/drawer.vue"
	import cusRadioGroup from "@/components/common/radio-group.vue"
	import searchList from '@/components/common/search-list.vue'
	
	export default {
		components:{
			uniDrawer,cusRadioGroup,searchList
		},
		data() {
			return {
				goodsList:[
					{
						titlepic:'/static/images/demo/demo6.jpg',
						title:'真无线蓝牙耳机',
						desc:'20小时持久续航 / 双麦克风通话降噪，无惧干扰 / 开盒弹窗',
						price:'100',
						comment_num:'122条',
						good_num:'90%'
					}
				],
				label:{
					selected:0,
					list:[
						{name:'选项一'},
						{name:'选项二'},
						{name:'选项三'}
					]
				},
				showRight:false,
				screen:{
					currentIndex:0,
					list:[
						{name:'综合',status:1},
						{name:'价格',status:0},
						{name:'销量',status:0}
					]
				}
				
			}
		},
		methods: {
			change(index){
				this.label.selected = index
			},
			open(){
				this.showRight = true
				console.log( this.showRight)
			},
			changeScreen(index){
				// 当前点击是否已经是激活状态
				let oldIndex = this.screen.currentIndex
				let oldItem = this.screen.list[oldIndex]
				if( oldIndex === index ) {
						return oldItem.status = oldItem.status === 1 ? 2 : 1
				}
				
				let newItem = this.screen.list[index]
				oldItem.status = 0
				this.screen.currentIndex = index
				newItem.status = 1
			}
			
		}
	}
</script>

<style scoped>
.radio-active{
	background: #fce0d5 !important;
	color: #eb7320 !important;
	border-color:1upx solid  #eb7320 !important;
}
</style>
