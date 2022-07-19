<template>
	<div>
		{{ state.msg }}
		<p></p>
		<van-button type="primary" @click="onMain">返回</van-button>
	</div>
</template>

<script setup>
import { reactive, getCurrentInstance } from "vue"

const { proxy } = getCurrentInstance()

const state = reactive({
	msg: "关于我们"
})

const onMain = () => {
	proxy.$router.back()
}
</script>

<style lang="scss" scoped></style>
