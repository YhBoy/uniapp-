<template>
	<view class="d-flex">
		<image :src="threeAdvObj.big.url" mode="" style="width: 373upx;height: 530upx;border: 2upx solid #F5F5F5;"></image>
		<view class="d-flex flex-column ">
			<image :src="threeAdvObj.smalltop.url" mode="" style="width: 373upx;height: 264upx;border: 2upx solid #F5F5F5;"></image>
			<image :src="threeAdvObj.smallbottom.url" mode="" style="width: 373upx;height: 264upx;"></image>
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			threeAdvObj:Object
		}
	}
</script>

<style>
</style>
