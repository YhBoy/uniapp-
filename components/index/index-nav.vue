<template>
	<view>
		<view class="row d-flex j-center py-2">
			<block v-for="(item,index) in indexIconNav" :key="index">
				<view class="span-4 d-flex flex-column j-center a-center">
					<image class="j-center" :src="item.url" mode="widthFix" style="width: 60upx;height: 60upx;"></image>
					<view class="a-center">{{item.text}}</view>
				</view>
			</block>
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			indexIconNav:Array
		}
	}
</script>

<style>
</style>
