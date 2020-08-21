<template>
	<view>
		<swiperImage :swiperList="banner" height="750" preview></swiperImage>
		<view class="p-2">
			<view class="font-lg">小米手机</view>
			<view class="font-md text-light-muted mb-3 line-h-sm">「6GB+128GB券后到手价仅1499元；延保、碎屏保5折；+39元得黑鲨游戏手柄套装」</view>
			<price>1299</price>
		</view>
		<scroll-view scroll-x='true'  class="scroll-row">
			<view  class="scroll-row-item" v-for="(item,index) in baseAttes" :key="index">
					<view class="d-flex flex-column a-center j-center" style="width:170upx;height:110upx;">
							<view class="iconfont  line-h-sm" :class="item.icon"></view>
							<view class="line-h-sm">{{item.title}}</view>
							<view class="text-light-muted font-sm">{{item.desc}}</view>
					</view>
			</view>
		</scroll-view>
		
		<view class="p-2">
			<view class="rounded border bg-light-secondary">
				<uniListItem @tap="show('rule')">
					<view class="d-flex" >
						<text class="mr-2 text-muted">火焰红</text>
						<text>64G 标配</text>
					</view>
				</uniListItem>
				<uniListItem >
					<view class="d-flex">
						<text class="mr-2 text-muted">配送</text>
						<text>陕西西安</text>
						<text class="main-text-color">现配</text>
					</view>
				</uniListItem>
				<uniListItem @tap="show('info')">
					<view class="d-flex ">
						<view class="text-muted font-sm d-flex a-center">
							<view class="iconfont icon-xuanzhong-01 "></view>
							小米自由
						</view>
						<view class="text-muted font-sm  d-flex a-center">
							<view class="iconfont icon-xuanzhong-01"></view>
							小米自由
						</view>
						<view class="text-muted font-sm  d-flex a-center">
							<view class="iconfont icon-xuanzhong-01"></view>
							小米自由
						</view>
					</view>
				</uniListItem>
			</view>
		</view>
		<!-- 横向滚动评论 -->
		<!-- <view class="p-2">
			<scroll-view scroll-y="true" class="scroll-row " >
				<view class="scroll-row-item rounded bg-light-secondary mr-2" style="width: 620px;height: 380upx;">
					
				</view>
			</scroll-view>
		</view> -->
		
		<!-- 底部购物车 -->
		<view class="w-100" style="height: 100upx;"></view>
		<view class="d-flex a-stretch bg-white position-fixed left-0 bottom-0 w-100" style="height: 100upx;">
				<view class="d-flex flex-1 flex-column a-center j-center line-h-md">
						<view class="iconfont icon-xihuan"></view>
						收藏
				</view>
				<view class="d-flex flex-1 flex-column a-center j-center line-h-md">
						<view class="iconfont icon-gouwuchekong"></view>
						购物车
				</view>
				<view class="d-flex a-center j-center line-h-md font-md main-bg-color text-white" style="flex: 2.5;">
						加入购物车
				</view>
		</view>
		
		<!-- 弹出框 -->
		
		<commonPopup :popupClass="popupAttr.rule" @hide="hide('rule')">
			<view class="d-flex a-center" style="height: 272upx;">
				<image src="../../static/images/demo/cate_03.png" class="border" style="width: 180rpx;height: 180rpx;" mode=""></image>
				<view class="pl-2">
						<price>200</price>
				</view>
			</view>
			<!-- 表单部分 -->
			<scroll-view scroll-y="true" class="w-100" style="height: 600upx;">
				<view v-for="(item,index) in selectList" :key="index">
					<view class="font-md">{{item.title}}</view>
					<view class="d-flex  ">
						<view :class="selectListCurrent===index2?'main-text-color':''" class="border p-1 m-2" v-for="(item2,index2) in item.list" :key="index2">{{item2}}</view>
					</view>
				</view>
				<view class="d-flex j-sb">
					<text>购买数量</text>
					<uniNumberBox :min="1" :max="20" :value="1" ></uniNumberBox>
				</view>
			</scroll-view>
			<view class="main-bg-color text-white font-md d-flex a-center j-center" style="height: 100upx;">加入购物车</view>
			<!-- 输入框 -->
			
		</commonPopup>
		<commonPopup :popupClass="popupAttr.info" @hide="hide('info')">
			<view>说明组件</view>
		</commonPopup>
	</view> 
</template>

<script>
	import swiperImage from '@/components/index/swiper-image.vue'
	import price from '@/components/common/price.vue'
	import uniListItem from '@/components/common/uni-list-item/uni-list-item.vue'
	import commonPopup from '@/components/common/common-popup.vue'
	import uniNumberBox from '@/components/common/uni-number-box/uni-number-box.vue'
	export default {
		components:{
			swiperImage,
			price,
			uniListItem,
			commonPopup,
			uniNumberBox
		},
		data() {
			return {
				selectListCurrent:0,
				selectList:[
					{
						title:'颜色',
						list:['火焰红','炭黑','冰川蓝']
					},
					{
						title:'容量',
						list:['64GB','128GB','256GB']
					}
				],
				popupAttr:{
					rule:'none',
					info:'none'
				},
				baseAttes:[
					{
						icon:'icon-cpu',
						title:'CPU',
						desc:'八核CPU'
					},
					{
						icon:'icon-cpu',
						title:'CPU',
						desc:'八核CPU'
					},{
						icon:'icon-cpu',
						title:'CPU',
						desc:'八核CPU'
					},
					{
						icon:'icon-cpu',
						title:'CPU',
						desc:'八核CPU'
					},{
						icon:'icon-cpu',
						title:'CPU',
						desc:'八核CPU'
					},{
						icon:'icon-cpu',
						title:'CPU',
						desc:'八核CPU'
					},{
						icon:'icon-cpu',
						title:'CPU',
						desc:'八核CPU'
					},{
						icon:'icon-cpu',
						title:'CPU',
						desc:'八核CPU'
					},{
						icon:'icon-cpu',
						title:'CPU',
						desc:'八核CPU'
					}
				],
				banner:[
					{url:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/799066a0d7b6e5070bf6f46cec9b130b.jpg'},
					{url:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/8d53a1f12cf97f3fcf40b6cdfe311eb9.jpg'},
					{url:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/d32265f5e3eb1496adf4eb53af802906.jpg'},
					{url:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/bf0e626216800b6b47a6f0a0ed50e7f2.jpg'},
					{url:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/51701b16df1b5f7638c33f5809f0c5ad.jpg'}
				]
			}
		},
		onBackPress() { // 监听页面返回事件
			for( var key in this.popupAttr ){ 
					if( this.popupAttr[key] !== 'none' ){
						this.hide(key)
						return true
					}
			}	
		},
		methods: {
			hide(key){
				this.popupAttr[key] = 'hide'
				setTimeout(()=>{
					this.popupAttr[key] = 'none'
				},200)
			},
			show(key){
				
				this.popupAttr[key] = 'show'
			},
		}
	}
</script>

<style scoped>




</style>
