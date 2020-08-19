<template>
	<view>
		<card :showhead="false">
			<block slot="热门搜索"></block>
			<image src="../../static/images/bg.jpg" mode="widthFix"></image>
		</card>
		<view class="px-1 mb-2">
			<block v-for="(item ,index) in hot" :key="index"> 
				<view class="px-2 py-1 border d-inline-block m-1" :style="getStyle">{{item.name}}</view>
			</block>
		</view>
		<card >
			<block slot="常用功能"></block>
		</card>
	</view>
</template>

<script>
	import card from '@/components/index/card.vue'
	export default {
		components:{card},
		props:{
			hot:Array
		},
		computed:{
			getStyle(){
				let color = {
					borderColor:["#eea6aa","#dd6a4b","#98d5d8","#9dbe93","#bccd99"],
					backgroundColor:["#f8eae9","#ffbc6","#e8f6f6","#e4f5e2","#d2f6e8"]
				}
				let index = Math.floor(Math.random()*color.borderColor.length)
				let borderColor = color.borderColor[index]
				let backgroundColor = color.backgroundColor[index]
				return `backgroundColor:${backgroundColor};border-color:${borderColor}`
			}
		}
	}
</script>

<style>
</style>
