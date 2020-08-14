<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	/* // 官方ui 库 */
	@import "/common/uni.css"; 
	@import "/common/animate.min.css";
	@import "/common/icon.css";
	/* 公共文件css */
	@import "/common/common.css";
	@import "/common/zcm-main.css";
	
</style>
