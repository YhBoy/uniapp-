<template>
	<view class="d-flex border-top border-light-secondary" style=";box-sizing: border-box;" :style="{'height':scrollHeight+'px'}">
		<scroll-view scroll-y="true" style="flex: 1;height: 100%;" class="border-right" :style="{'height':scrollHeight+'px'}">
			<view class="border-bottom border-light-secondary left-scroll-item" >
				<view  v-for="(item,index) in cate" :key="index" class=" py-1 font-md text-muted text-center " :class="activeIndex ===index? 'scroll-active':'' " @tap="changeCate(index)">{{item.name}}</view>
			</view>
			 
		</scroll-view>
		<scroll-view scroll-y="true" style="flex: 3.5;height: 100%;" :style="{'height':scrollHeight+'px'}" :scroll-with-animation="true" :scroll-top="rightScrollTop" @scroll="onRightScroll">
			<view class="row right-scroll-item" v-for="(item,index) in list" :key="index">
				<view class="span24-8 text-center py-2" v-for="(item2,index2) in item.list" :key="index2">
					<image style="height: 120upx;width: 120upx;" :src="item2.src" mode=""></image>
					<text class="d-block">商品一</text>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default{
		onLoad() { 
			uni.getSystemInfo({
				success: (res) => {
					/* 设置当前滚动容器的高，若非窗口的告诉，请自行修改 */
					this.scrollHeight = `${res.windowHeight}px`;
					console.log('gaodu', res.windowHeight)
				}
			});
			this.getData()
		},
		onReady() {
			const query = uni.createSelectorQuery().in(this);
			let left = []
			query.selectAll('.left-scroll-top').boundingClientRect(data => {
			  // console.log("得到布局位置信息" + JSON.stringify(data));
			  // console.log("节点离页面顶部的距离为" + data.top);
				  left = data.map((v)=>{
					  return v.top
				  })
				  this.leftDomsTop = left
			}).exec();
			let right = []
			query.selectAll('.right-scroll-top').boundingClientRect(data => {
				  right = data.map((v)=>{
					  return v.top
				  })
				  this.rightDomsTop = right
			}).exec();
			
		},
		data(){
			return{
				scrollHeight:"500px",
				rightScrollTop:0,
				leftDomsTop:[],
				rightDomsTop:[],
				list:[],
				activeIndex:0,
				cate:[
					{name:'小米手机'},
					{name:'Redmi手机'},
					{name:'黑鲨手机'},
					{name:'5G合约'},
					{name:'小米众筹'},
					{name:'电视'},
					{name:'大家电'},
					{name:'小爱智能'},
					{name:'路由器'},
					{name:'生活电器'},
					{name:'厨房电器'},
					{name:'智能穿戴'},
					{name:'智能家居'},
					{name:'个护健康'},
					{name:'数码配件'},
					{name:'日用百货'},
					{name:'优品精选'},
					{name:'小米服务'},
					{name:'米粉卡'},
					{name:'零售店'},
					{name:'其他'},
				]
			}
		},
		methods:{
			onRightScroll(e){  // 监听右边的滚动事件
				this.rightDomsTop.for((v,k)=>{
						if( v < e.detail.scrollTop) {
							this.activeIndex = k 
							return false
						}
				})
			},
			changeCate(index){
				this.activeIndex = index
				this.rightScrollTop = this.rightDomsTop[index]
			},
			getData(){ 
				for( var i=0; i<19; i++){
					this.list.push({
							list:[
									{src:'/static/images/demo/cate_04.png',name:'商品一'},
									{src:'/static/images/demo/cate_04.png',name:'商品一'},
									{src:'/static/images/demo/cate_04.png',name:'商品一'},
									{src:'/static/images/demo/cate_04.png',name:'商品一'},
									{src:'/static/images/demo/cate_04.png',name:'商品一'},
									{src:'/static/images/demo/cate_04.png',name:'商品一'},
									{src:'/static/images/demo/cate_04.png',name:'商品一'},
									{src:'/static/images/demo/cate_04.png',name:'商品一'}
							]
					})
				} 
			}
		}
	}
</script>

<style scoped>
	.scroll-active{
		border-left:8upx solid #fd6801 !important
	}
</style>
