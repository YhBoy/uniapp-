<template>
	<view class="">购物车
		<view>{{this.a}}</view>
		<view>{{this.$store.getters.activeList}} {{this.activeList}} </view>
		<view>
			----------------------
			{{this.getList}}
		</view>
		<view>
			{{this.inc}}
		</view>
		<view>
			{{this.asyncInc}}
		</view>
	</view>
</template>

<script>
	import { mapState, mapGetters , mapMutations,mapActions} from 'vuex'
	export default{
		computed:{
			...mapState(['a']),
			...mapGetters(['activeList','getList']),
			...mapMutations(['inc']),
			...mapActions(['asyncInc'])
		},
		onLoad() {
			console.log(this.asyncInc.then(res=>{
				console.log(res)
			}))
		}
	}
 </script>

<style>
</style>
