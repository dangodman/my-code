<template>
	<view class="index">
		<wyheader>
			<!-- 将内容填充到名为content的插槽中 -->
			<template v-slot:content>
			<view class="search"><uni-easyinput prefixIcon="search"  placeholder="请输入内容"></uni-easyinput></view>		
			</template>
		</wyheader>
		<!-- menu -->
		<menuLeft></menuLeft>
		<view class="banner">
			<swiper circular indicator-color="#fff" indicator-active-color="#d81e06" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
				<swiper-item v-for="item in state.banners" :key="item.encodeId">
					<view class="swiper-item"><image :src="item.pic" mode=""></image></view>
				</swiper-item>
			</swiper>
		</view>
		
		<!-- balls -->
		<view class="balls">
			<view class="ball-item" v-for="item in state.balls" :key="item.id">
				<view class="icon">
					<image :src="item.iconUrl" mode="aspectFill"></image>
				</view>
				<text>{{item.name}}</text>
			</view>
		</view>
		<!-- 专属推荐 -->
		<songList :list="state.recommendList" />
	</view>
</template>

<script setup>
import { reactive } from 'vue'
import { onLoad } from '@dcloudio/uni-app' 
import { apiGetBanner, apiGetBall, apiGetRecommendList } from '@/api/index.js'
const state = reactive({
	banners:[],
	balls:[],
	recommendList:[]
})
// 发接口请求
onLoad(() => {
	
	getBanner()
	getBall()
	getRecommendList()
})
	
const getBanner = async() =>{
	const { data } = await apiGetBanner({type:2})
	state.banners = data.banners
}
const getBall = async() =>{
	const {data:{data:balls}} =  await apiGetBall()
	state.balls = balls 
}
	
const getRecommendList = async () =>{
	const {data:{recommend:recommend}} = await apiGetRecommendList()
	console.log(recommend);
	state.recommendList = recommend
}
</script>

<style lang='scss' scoped>
.index {
	padding: 0 15rpx;
	.search{
		width: 500rpx;
		height: 60rpx;
	}
	.banner{
		.swiper-item{
					height: 100%;
					overflow: hidden;
					image{
						width: 100%;
						padding: 0 5rpx;
						height: 100%;
						border-radius: 10px;
					}
				}
	}
	.balls{
		display: flex;
		overflow-x: scroll;
		margin: 30rpx 0;
		.ball-item{
			flex: 0 0 20%;
			font-size:20rpx;
			text-align: center;
			.icon{
				width: 70rpx;
				height: 70rpx;
				margin: 0 auto;
				margin-bottom: 14rpx;
				background-color: $uni-primary-color;
				border-radius: 50%;
				image{
					width: 100%;
					height: 100%;
				}
			}
		}
	}
}
</style>
<style>
:deep(.search .uni-easyinput__content-input){
	height: 60rpx;
	padding: 0;
}
</style>
