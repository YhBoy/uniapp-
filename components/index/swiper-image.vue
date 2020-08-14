<template>
	<view style="width: 100%;">
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" circular style="width: 100%;">
			<block v-for="(item,index) in swiperList" :key="index" style="width: 100%;">
				<swiper-item>
					<view class="swiper-item">
						<image  :src="item.url" mode="scaleToFill"  lazy-load></image>
					</view>
				</swiper-item>
			</block>
		</swiper>
	</view>
</template>

<script>
	export default{
		props:{
			swiperList:Array
		}
	}
</script>

<style>
</style>
