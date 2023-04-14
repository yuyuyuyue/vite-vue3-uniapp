<template>
    <view>
        <van-button type="primary">主要按钮</van-button>
        <van-button type="success">成功按钮</van-button>
        <van-button type="default">默认按钮</van-button>
        <van-button type="warning">警告按钮</van-button>
        <van-button type="danger">危险按钮</van-button>
    </view>
</template>

<script>
import { showToast } from "vant";
import { onMounted } from "vue";
export default {
    data() {
        return {};
    },
    setup(props, context) {
        console.log(`login${JSON.stringify(props)}`);

        onMounted(() => {
            console.log(`onMounted`);
        });
    },
};
</script>

<style lang="scss" scoped>
</style>