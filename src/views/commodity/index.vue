<template>
    <div>
        commodity/page1 头部
        <hr>
        <router-view></router-view>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'ViteIndex',

    data() {
        return {
            
        };
    },
    created() {
        this.togoList() //请求列表数据
        console.log('请求完成')
       
    },
    mounted() {
    },
    computed: {
    },
    methods: {
        ...mapActions(['togoList'])
    },
};
</script>

<style lang="less" scoped>
</style>