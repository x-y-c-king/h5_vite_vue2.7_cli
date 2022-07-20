<template>
	<div class="home">
		{{ state.caption }}
		<p></p>
		<van-button type="primary" @click="onMain">主要按钮</van-button>
		<van-button type="info" @click="onShow">显示日历</van-button>
		<van-button type="default">默认按钮</van-button>
		<van-button type="warning">警告按钮</van-button>
		<van-button type="danger">危险按钮</van-button>
		<p></p>
		<van-icon name="chat-o" dot />
		<van-icon name="chat-o" badge="9" />
		<van-icon name="chat-o" badge="99+" />
		<p>{{ store.name }}</p>

		<p>{{ store.isAdmin }}</p>
		<p></p>
		<van-button type="default" @click="() => store.counter--">-</van-button>
		<span>{{ store.counter }}</span>
		——
		<span>{{ store.doubleCount }}</span>
		<van-button type="warning" @click="() => store.counter++">+</van-button>

		<p></p>
		<van-button type="warning" @click="() => store.$reset()">重置</van-button>
        <br />
        <van-button type="primary" @click="onAbout">关于我们</van-button>
		<van-calendar v-model="state.show" @confirm="onConfirm" />

        <p></p>
        <van-field  v-model="state.color"  />
		<!-- <van-toast v-show="false"></van-toast> -->
	</div>
</template>

<script setup>
import { reactive, getCurrentInstance, onMounted } from "vue"
import { Toast } from "vant"
import { useStore } from "@/store/index"
import { storeToRefs } from "pinia"

const store = useStore()
// const { name, counter, isAdmin } = storeToRefs(store)
const { proxy } = getCurrentInstance()
const router = proxy.$router
const state = reactive({
	caption: "首页",
	show: false,
    color: '#1989fa'
})

const onMain = () => {
	Toast("toast")
}

const onShow = () => {
	state.show = true
}

const onConfirm = (date) => {
	console.log(date)
}

const onAbout = () => {
    router.push({path: '/about'})
}

onMounted(() => {
})
</script>

<style lang="scss" scoped>
.home {
    width: 100%;
    min-height: 100vh;
    background-color: v-bind('state.color');
    padding-bottom: 200px;
}
</style>
