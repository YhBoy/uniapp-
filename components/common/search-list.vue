<template>
	<view>
		<view class="row p-2 border-bottom border-light-secondary" v-for="(item,index) in goodsList" :key="index">
					 
						 <view class="span24-6">
										 <image :src="item.titlepic" mode="widthFix" class="w-100"></image>
						 </view>
						 <view class="span24-18 px-2">
										 <view class="font-md font-weight">{{item.title}}</view>
										 <view class="font-md text-light-muted" style="line-height: 1;">{{item.desc}}</view>
										 <price>{{item.price}}</price>
										 <view class="font-sm text-light-muted" style="line-height: 1;">{{item.comment_num}}   {{item.good_num}}</view>
						 </view>
					 
		</view>
	</view>
</template>

<script>
	import price from '@/components/common/price.vue'
	export default{
		components:{price},
		props:{
			goodsList:Array
		}
	}
</script>

<style>
</style>
