<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title" @click="changeTitle">{{title}}</text>
			<text>{{reverseTitle}}</text>
		</view>
	</view>
	<Song />
</template>

<script setup>
import {ref,computed} from "vue"
import song from '../../components/song/song.vue'
const title = ref("你好")
const changeTitle = () => {
	title.value = title.value === '你好' ? 'Hello' : '你好'
}
const reverseTitle  = computed(() =>{
	return title.value.split('').reverse().join('')
})
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
