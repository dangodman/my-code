<template>
	<view class="index">
		<wyheader>
			<!-- 将内容填充到名为content的插槽中 -->
			<template v-slot:content>
			<view class="search"><uni-easyinput prefixIcon="search" v-model="value" placeholder="请输入内容" @iconClick="onClick"></uni-easyinput></view>		
			</template>
		</wyheader>
		<!-- menu -->
		<menuLeft></menuLeft>
		<view class="text-area">
			<text class="title">hello</text>
		</view>
	</view>
</template>

<script setup>
	
</script>

<style lang='scss' scoped>
	.index {
		.search{
			width: 500rpx;
			height: 60rpx;
		}
	}
</style>
<style>
:deep(.search .uni-easyinput__content-input){
	height: 60rpx;
	padding: 0;
}
</style>
