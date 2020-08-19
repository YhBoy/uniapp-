<template>
	<view>
		<colorTag :hot="hot"></colorTag>
	</view>
</template>

<script>
	import colorTag from '@/components/search/color-tag.vue'
	export default {
		components:{
			colorTag
		},
		data() {
			return {
				hot:[
					{"name":'积木'},
					{"name":'K40'},
					{"name":'手机'},
					{"name":'电冰箱'}
				]
			}
		},
		methods: {
			
		},
		
		onNavigationBarButtonTap(e){
			if( e.index === 0 ){
				uni.navigateTo({
					url:'../search-list/search-list'
				})
			}
			
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
