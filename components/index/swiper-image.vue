<template>
	<view style="width: 100%;">
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" circular style="width: 100%;" :style="getStyle">
			<block v-for="(item,index) in swiperList" :key="index" style="width: 100%;">
				<swiper-item>
					<view class="swiper-item" @tap="event(item,index)"> 
						<image :style="getStyle" :src="item.url" mode="scaleToFill"  lazy-load></image>
					</view>
				</swiper-item>
			</block>
		</swiper>
	</view>
</template>

<script>
	export default{
		props:{
			swiperList:Array,
			height:{
				type:String,
				default:'350rpx'
			},
			priview:{
				type:Boolean,
				default:true
			}
		},
		computed:{
			getStyle(){
				return `height:${this.height}`
			},
			getUrls(){
				let arr =  this.swiperList.map((v)=>{
					return v.url
				})
				return arr 
			}
		},
		methods:{
			event(item,index){
				console.log(this.getUrls)
				if(this.priview){
					uni.previewImage({ // 图片预览
						current:index, // 这个参数是当前点击的第几个图片 
						urls:this.getUrls // 这个是直接需要把数据格式处理成这样 ['baidu.com','baudu.com']
					})
				}
			}
		}
	}
</script>

<style>
</style>
