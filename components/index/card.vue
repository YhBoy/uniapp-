<template>
	<view  class="card" style="width: 100%;">
			<view v-if="showhead" class="font-md font-weight border-bottom py-2 pl-2">
					<slot name="title">
						<text v-if="headerTitle" class="font-md font-weight">{{headerTitle}}</text>
					</slot>
			</view>
			<view>
				<image v-if="bodyCover" src="../../static/images/demo/demo4.jpg"  mode="widthFix"></image>
				<slot></slot>
			</view>
	</view>
</template>

<script>
	export default{
		props:{
			headerTitle:String,
			bodyCover:String,
			showhead:{
				type:Boolean,
				default:true
			}
		}
	}
</script>

<style>
</style>
