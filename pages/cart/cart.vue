<template>
	<view style="background: #F5F5F5;height: 100%;">
		<uniNavBar fixed @click-right="isEdit = !isEdit" :right-text="isEdit ? '编辑':'完成'" title="购物车" statusBar :shadow="false"></uniNavBar>
		
		<!-- 购物车为空 -->
		<view v-if="this.list.length<=0" class="py-5 a-center j-center d-flex">
			<view class="iconfont icon-gouwuchekong text-light-muted" style="font-size: 50upx;"></view>
			<view class="text-light-muted mx-2">购物车还是空的</view>
			<view class="px-2 py-1 border border-light-secondary rounded" hover-class="bg-light-secondary">去逛逛</view>
		</view>
		
		<!--购物车列表  -->
		
		<view class="bg-white px-2">
					 <!-- 列表 -->
				 	<view class="d-flex a-center py-3 border-bottom border-light-secondary"
					v-for="(item,index) in this.list" :key="index">
				 		<label class="radio d-flex a-center j-center flex-shrink" 
						style="width: 80upx;height: 80upx;" @click="selectItem(index)">
				 			<radio :value="item.id" :checked="item.checked" color="#FD6801"/>
				 		</label>
						
						<image :src="item.cover" 
						mode="widthFix" style="height: 150rpx;width: 150rpx;"
						class="border border-light-secondary rounded p-2 flex-shrink">
						</image>
						
						<view class="flex-1 d-flex flex-column pl-2">
							<view class="text-dark" style="font-size: 35upx;">
								{{item.title}}
							</view>
							<view class="d-flex text-light-muted mb-1">
								<text class="mr-1"
								v-for="(attr,attrIndex) in item.attrs"
								:key="attrIndex">{{attr.list[attr.selected].name}}</text>
							</view>
							<view class="mt-auto d-flex j-sb">
								<price>{{item.pprice}}</price>
								<view class="a-self-end">
									<uni-number-box :min="item.minnum" 
									:value="item.num" :max="item.maxnum"
									@change="changeNum($event,item,index)">
									</uni-number-box>
								</view>
							</view>
						</view>
						
				 	</view>
				 </view>
		<!-- 合计 -->
		 <view class="d-flex a-center position-fixed left-0  right-0 border-top w-100" style="height: 100upx;z-index: 100;">
			<label class="radio d-flex a-center j-center flex-shrink"
				style="width: 120upx;height: 100upx;" @click="doSelectAll">
					<radio value="1" color="#FD6801" :checked="checkedAll"  />
			</label>
			<view class="d-flex flex-1 a-center j-center">合计 <price>{{totalPrice}}</price></view>
			<view class="d-flex flex-1 a-center j-center main-bg-color text-white" style="height: 100%;">结算</view>
		</view>
	</view>
</template>

<script>
	import uniNavBar from '@/components/common/uni-nav-bar/uni-nav-bar.vue'
	import price from '@/components/common/price.vue'
	import uniNumberBox from '@/components/common/uni-number-box/uni-number-box.vue'
	import { mapState , mapGetters,mapActions, mapMutations} from 'vuex'
	export default{
		components:{
			uniNavBar,
			price,
			uniNumberBox
		},
		methods:{
			changeNum(e,item,index){
				item.num = e
			},
			...mapActions(['doSelectAll']),
			...mapMutations(['selectItem'])
		},
		
		data(){
			return{
				isEdit: false,
				
			}
		},
		computed:{
			...mapState({
				list:state=>state.cart.list
			}),
			...mapGetters(['checkedAll','totalPrice'])
			
		}
		
	}
 </script>

<style>
</style>
