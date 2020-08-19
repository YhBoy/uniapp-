<template>
	<view class="row">
		<view class="span24-8 px-2 mb-20" v-for="(item,index) in radioList.list" :key="index" @tap="changeRadio(index)">
			<view  class="rounded px-2 py-1 bg-light-secondary font-md text-center " :class="radioList.selected == index ?'radio-active':'' ">{{item.name}}</view>
		</view>
		
	</view>
</template>

<script>
	export default{
		props:{
			radioList:Object
		},
		data(){
			return {
				
			}
		},
		methods:{
			changeRadio(index){
				this.$emit('change',index)
			}
		}
	}
</script>

<style scoped>
	.radio-active{
		background: #fce0d5 !important;
		color: #eb7320 !important;
		border-color:1upx solid  #eb7320 !important;
	}
</style>
