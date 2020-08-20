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
				<uniListItem >
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
				<uniListItem >
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
		<view class="p-2">
			<scroll-view scroll-y="true" class="scroll-row " >
				<view class="scroll-row-item rounded bg-light-secondary mr-2" style="width: 620px;height: 380upx;">
					
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import swiperImage from '@/components/index/swiper-image.vue'
	import price from '@/components/common/price.vue'
	import uniListItem from '@/components/common/uni-list-item/uni-list-item.vue'
	export default {
		components:{
			swiperImage,
			price,
			uniListItem
		},
		data() {
			return {
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
		methods: {
			
		}
	}
</script>

<style scoped>
.scroll {
        width: 100%;
        overflow: hidden;
        white-space: nowrap;
    }
 
    .box {
        display: inline-block;
        width: 520upx;
        height: 600upx;
        background: #0062CC;
        margin-right: 30upx;
    }
 
    .box:last-child {
        margin-right: 0;
    }
 
    .images {
        width: 520upx;
        height: 360upx;
        border-radius: 16upx;
    }
</style>
