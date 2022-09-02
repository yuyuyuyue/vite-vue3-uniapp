<template>
    <div class="demo-basic--circle header-image">
        <div class="header-left">
            <el-dropdown @command="handleCommand">
                <div class="block">
                    <el-avatar class="image" :size="55" :src="$store.state.circleUrl.src" />
                    <p>
                        {{ $store.state.circleUrl.name }}
                    </p>
                </div>

                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item size="large">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
        <div class="header-right">
            <div class="login">
                <router-link to="" class="login-link">登录</router-link>
                <router-link to="" class="login-link">注册</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ViteHeader',

    data() {
        return {

        };
    },

    mounted() {

    },


};
</script>

<style lang="less" scoped>
.header-image {
    display: flex;
    align-items: center;
    height: 60px;
    justify-content: space-between;
}
.el-dropdown-menu,
.el-dropdown-item {
    width: 120px;
    text-align: center !important;
}
.login {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 80%;
    border-left: 1px solid #ccc;
    border-right: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 0 0 1px;
    overflow: hidden;
    &::after {
        position: absolute;
        content: ' ';
        width: 1px;
        height: 80%;
        background-color: rgb(209, 209, 209);
    }
    .login-link {
        flex: 1;
        height: 100%;
        line-height: 48px;
        text-align: center;
        text-decoration: none;
        font-size: 18px;
        color: rgb(126, 126, 126);

        &:hover {
            color: #a0cfff;
            text-shadow: 0 0 2px #a0cfff;
            background-color: #ffffff;
        }
    }
}


.header-left {
    display: flex;

    .block {
        width: 180px;
        margin: 0 20px 0 10px;
        display: flex;
        text-align: center;
        justify-content: space-between;
        align-items: center;
    }
}

.header-right {
    display: flex;
    height: 100%;
}

.image {
    border: 5px solid rgb(223, 213, 213);
    box-shadow: 0 0 5px;
}
</style>