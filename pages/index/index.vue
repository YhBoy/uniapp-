<template>
	<view class="content">
		<scroll-view scroll-x="true" class="border-bottom scroll-row" :scroll-into-view="scrollInto">
			<view v-for="(item,index) in tabBars" :key="index" class="scroll-row-item px-3" @click="changeTab(index)">
					<text class="font-md" :class="tabIndex === index ? 'main-text-color':''">{{item.name}}</text>
			</view>
		</scroll-view>
		
		<swiper :duration="150" :current="tabIndex" style="width: 100%;"  :style="'height:'+scrollH+'px;'" @change="onChangeTab" >
			<swiper-item v-for="(item,index) in tabBars" :key="index" :id="'tab'+index">
				<view class="swiper-item">
					<scroll-view scroll-y="true"  :style="'height:'+scrollH+'px;'">
						<!-- 轮播图组件 -->
						<swiperImage :swiperList="swipers" />
						<indexNav :indexIconNav="indexIconNav" />
						<divider></divider>
						<threeAdv :threeAdvObj="threeAdvObj"></threeAdv>
						<divider></divider>
						<card :showhead="false">
							<block slot="title">每日精选1</block>
							<image src="../../static/images/bg.jpg" mode="widthFix"></image>
						</card>
						<commonList :dataList="dataList"></commonList>
					</scroll-view>
				</view>
			</swiper-item>
			
		</swiper>
		
		
	</view>
</template>

<script>
	import swiperImage from '@/components/index/swiper-image.vue'
	import indexNav from '@/components/index/index-nav.vue'
	import threeAdv from '@/components/index/three-adv.vue'
	import card from "@/components/index/card.vue"
	import commonList from "@/components/common/common-list.vue"
	export default {
		components:{
			swiperImage,
			indexNav,
			threeAdv,
			card,
			commonList
		},
		data() {
			return {
				scrollInto:"tab1",
				scrollH:500,
				tabIndex:0,
				tabBars:[
					{name:'推荐'},
					{name:'手机'},
					{name:'智能'},
					{name:'电视'},
					{name:'笔记本'},
					{name:'家电'},
					{name:'生活周边'}
				],
				swipers:[
					{url:'../../static/images/indexBanner/1.jpg'},
					{url:'../../static/images/indexBanner/2.jpg'},
					{url:'../../static/images/indexBanner/3.jpg'}
				],
				indexIconNav:[
					{url:'../../static/images/indexnav/1.png',text:'新品发布'},
					{url:'../../static/images/indexnav/2.png',text:'小米众筹'},
					{url:'../../static/images/indexnav/3.png',text:'以旧换新'},
					{url:'../../static/images/indexnav/4.png',text:'一份拼团'},
					{url:'../../static/images/indexnav/5.png',text:'超值特卖'},
					{url:'../../static/images/indexnav/6.png',text:'小米秒杀'},
					{url:'../../static/images/indexnav/7.png',text:'真心想要'},
					{url:'../../static/images/indexnav/8.png',text:'电视热卖'},
					{url:'../../static/images/indexnav/9.png',text:'家电热卖'},
					{url:'../../static/images/indexnav/10.png',text:'米粉卡'},
				],
				threeAdvObj:{
					big:{url:'../../static/images/demo/demo1.jpg'},
					smalltop:{ url:'../../static/images/demo/demo2.jpg' },
					smallbottom:{ url:'../../static/images/demo/demo3.jpg' }
				},
				dataList:[
					{
						url:'../../static/images/demo/list/1.jpg',
						name:'小米空调',
						price:1200
					},{
					
						url:'../../static/images/demo/list/2.jpg',
						name:'小米空调',
						price:1200
					},{
						url:'../../static/images/demo/list/3.jpg',
						name:'小米空调',
						price:1200
					},{
						url:'../../static/images/demo/list/4.jpg',
						name:'小米空调',
						price:1200
					}
				]
			}
		},
		onLoad() {
				// 获取可视区高度
				uni.getSystemInfo({
					success:(res)=>{
						this.scrollH = res.windowHeight - uni.upx2px(80)
					}
				})
				
		},
		onNavigationBarSearchInputClicked(){
			uni.navigateTo({
				url:'/pages/search/search'
			})
		},
		methods: {
				changeTab(index){
					if(this.tabIndex === index){
						 return
					}
					this.tabIndex = index
					this.scrollInto= "tab"+index
				},
				onChangeTab(e){
					// 监听滑动列表
					this.changeTab(e.detail.current)
					this.scrollInto= "tab"+e.detail.current
				}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
