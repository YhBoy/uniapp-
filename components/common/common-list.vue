<template>
	<view class="row" style="width: 100%;">
		<block v-for="(item,index) in dataList" :key="index">
			<view style="width: 372.5upx;" class="" @tap="openDetail">
				<image :src="item.url" mode="widthFix" lazy-load></image>
				<view class="p-2">
					<view class="font-md">{{item.name}}</view>
					<text class="d-block font-sm text-light-muted ">1.5匹变频</text>
					<view class="d-flex">
						<price>{{item.price}}</price>
						<view  class="text-light-muted font-sm line-through " style="align-self: flex-end;margin-left: 6upx;">
							￥2399
						</view>
					</view>
				</view>
			</view>
		</block>
	</view>
</template>

<script>
	import price from "@/components/common/price.vue"
	export default {
		components:{
			price
		},
		props:{
			dataList:Array
		},
		methods:{
			openDetail(){
				uni.navigateTo({
					url:'../../pages/detail/detail'
				})
			}
		}
	}
</script>

<style>
</style>
